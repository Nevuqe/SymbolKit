import execa from 'execa';
import { promises as fs, readFileSync, existsSync } from 'fs';
import { generateTemplateFilesBatch } from 'generate-template-files';
import { Listr } from 'listr2';
import os from 'os';
import path, { basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import { incompatibleNames } from '../constants.js';

// Paths
const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const symbolkitIconsDir = path.join(rootDir, 'icons');
const ignoreCleanFilenames = ['SymbolKitContext.tsx', 'server'];

// Targets for building icons
const targets = {
  'meta-data': { path: 'meta-data.json' },
  css: { path: 'css/symbolkit.css' },
};

// Get targets from command line arguments
// (build all targets if no arguments)
const args = process.argv.slice(2);
const cliTargets = [];
args.forEach((target) => {
  if (target in targets) {
    cliTargets.push(target);
  } else {
    console.error(`Target '${target}' doesn't exist!\n\nPossible targets are:`);
    for (const [targetName] of Object.entries(targets)) {
      console.log(`- ${targetName}`);
    }
    process.exit(1);
  }
});

// Build tasks
const tasks = new Listr(
  [
    {
      title: 'Fetching icons',
      task: async (ctx) => {
        ctx.symbolkitIconsFiles = await fs.readdir(symbolkitIconsDir);
      },
    },
    {
      title: 'Building targets',
      skip: (ctx) => !ctx.symbolkitIconsFiles,
      task: (_, task) =>
        task.newListr(
          [
            {
              title: 'Building meta-data file',
              enabled: () =>
                cliTargets.length === 0 || cliTargets.includes('meta-data'),
              task: async (ctx) => {
                await fs.writeFile(
                  path.join(rootDir, targets['meta-data'].path),
                  JSON.stringify({ icons: ctx.symbolkitIconsFiles })
                );
              },
            },
            {
              title: 'Building CSS file',
              enabled: () =>
                cliTargets.length === 0 || cliTargets.includes('css'),
              task: async (ctx) => {
                const content = [
                  (
                    await fs.readFile(
                      path.join(__dirname, 'header.css'),
                      'utf8'
                    )
                  ).replace('[YEAR]', new Date().getFullYear()),
                ];
                ctx.symbolkitIconsFiles.forEach((file) => {
                  const fileContents = readFileSync(
                    path.join(__dirname, '../icons/', file)
                  )
                    .toString()
                    .replace(/\n/g, '')
                    .replace(/(width|height)="[0-9]+"/g, '')
                    .replace(/[ ]+/g, ' ');
                  content.push(
                    `.symbolkit-${
                      path.parse(file).name
                    }::before{mask-image:url('data:image/svg+xml;charset=utf-8,${fileContents}');-webkit-mask-image:url('data:image/svg+xml;charset=utf-8,${fileContents}');}`
                  );
                });
                await fs.writeFile(
                  path.join(rootDir, targets.css.path),
                  content
                );
              },
            },
          ],
          { concurrent: true }
        ),
    },
  ],
  {
    concurrent: false,
    exitOnError: false,
    rendererOptions: { collapse: false, collapseErrors: false },
  }
);

await tasks.run();
