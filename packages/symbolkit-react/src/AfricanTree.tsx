import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgAfricanTree(
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
      <g clipPath="url(#african-tree_svg__clip0_1_288)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <mask
          id="african-tree_svg__a"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={24}
          height={24}
        >
          <path d="M24 0H0v24h24V0z" fill="#fff" />
        </mask>
        <g
          mask="url(#african-tree_svg__a)"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22V12m0 0V8m0 4l3-3M12.424 18.576l6.169-6.169a5.502 5.502 0 00-.513-8.234 9.904 9.904 0 00-12.16 0 5.502 5.502 0 00-.513 8.234l6.169 6.169a.6.6 0 00.848 0z" />
        </g>
      </g>
      <defs>
        <clipPath id="african-tree_svg__clip0_1_288">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAfricanTree);
export default ForwardRef;
