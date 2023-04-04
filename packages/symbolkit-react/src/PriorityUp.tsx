import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgPriorityUp(
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
      <g clipPath="url(#priority-up_svg__clip0_1_4685)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <path
          d="M11.576 1.424a.6.6 0 01.848 0l10.152 10.152a.6.6 0 010 .848L12.424 22.576a.6.6 0 01-.848 0L1.424 12.424a.6.6 0 010-.848L11.576 1.424zM12 7l4 4m-4-4l-4 4.167M12 7v9"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="priority-up_svg__clip0_1_4685">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPriorityUp);
export default ForwardRef;
