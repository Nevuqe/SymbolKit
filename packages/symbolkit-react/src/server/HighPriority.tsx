import * as React from "react";
function SvgHighPriority(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
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
      <g clipPath="url(#high-priority_svg__clip0_1_3163)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <path
          d="M11.576 1.424a.6.6 0 01.848 0l10.152 10.152a.6.6 0 010 .848L12.424 22.576a.6.6 0 01-.848 0L1.424 12.424a.6.6 0 010-.848L11.576 1.424zM12 8v4M12 16.01l.01-.011"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="high-priority_svg__clip0_1_3163">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHighPriority);
export default ForwardRef;
