import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgHeptagon(
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
      <g clipPath="url(#heptagon_svg__clip0_1_3138)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <path
          d="M11.74 1.625a.6.6 0 01.52 0l8.08 3.891a.6.6 0 01.324.407l1.996 8.743a.6.6 0 01-.116.508l-5.591 7.01a.6.6 0 01-.47.227H7.517a.6.6 0 01-.469-.226l-5.591-7.011a.6.6 0 01-.116-.508l1.996-8.743a.6.6 0 01.324-.407l8.08-3.89z"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="heptagon_svg__clip0_1_3138">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHeptagon);
export default ForwardRef;
