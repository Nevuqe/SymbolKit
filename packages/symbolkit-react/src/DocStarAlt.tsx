import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgDocStarAlt(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(SymbolKitContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M4 18.8V5.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C5.52 2 6.08 2 7.2 2h7.974c.49 0 .734 0 .965.055.204.05.399.13.578.24.201.123.374.296.72.642l1.626 1.626c.346.346.519.519.642.72.11.18.19.374.24.579.055.23.055.474.055.963V18.8c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C18.48 22 17.92 22 16.8 22H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C4 20.48 4 19.92 4 18.8z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.793 10.544c.308-.047.462-.07.595-.134a.997.997 0 00.312-.233c.099-.11.165-.25.298-.532l.676-1.433a.357.357 0 01.652 0l.676 1.433c.133.282.199.422.298.532a.997.997 0 00.312.233c.133.063.287.087.595.134l1.482.227c.298.045.416.429.2.649l-1.112 1.135c-.208.212-.313.318-.38.442a1 1 0 00-.112.356c-.017.14.007.287.055.58l.265 1.621c.051.311-.26.548-.527.401l-1.306-.719c-.282-.155-.423-.232-.572-.263a1 1 0 00-.4 0c-.149.03-.29.108-.572.263l-1.306.72c-.267.146-.578-.09-.527-.402l.265-1.62c.048-.294.072-.44.055-.58a1 1 0 00-.112-.357c-.067-.124-.171-.23-.38-.442L8.11 11.42c-.216-.22-.097-.604.201-.65l1.482-.226zM16 2.5v2.9a.6.6 0 00.6.6h2.9"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDocStarAlt);
export default ForwardRef;
