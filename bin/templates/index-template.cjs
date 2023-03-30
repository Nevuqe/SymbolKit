const path = require('path');

function template(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName} } from './${basename}'`;
  });
  exportEntries.push(
    "export { SymbolKitProvider, SymbolKitContext, SymbolKitContextValue } from './SymbolKitContext'"
  );
  return exportEntries.join('\n');
}

module.exports = template;
