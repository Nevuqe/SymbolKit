const template = (
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports }
) => {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }
  const typeScriptTpl = template.smart({ plugins });
  props[0].name = 'passedProps';
  return typeScriptTpl.ast`${imports}
import { SymbolKitContext } from './SymbolKitContext'

${interfaces}

function ${componentName}(${props}) {
  const context = React.useContext(SymbolKitContext);
  const props = { ...context, ...passedProps };
  return ${jsx};
}
${exports}
  `;
};

module.exports = template;
