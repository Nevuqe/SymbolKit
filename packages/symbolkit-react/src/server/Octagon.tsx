import * as React from "react";
function SvgOctagon(
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
      <g clipPath="url(#octagon_svg__clip0_1_4161)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <path
          d="M11.77 1.095a.6.6 0 01.46 0l7.319 3.032a.6.6 0 01.324.324l3.032 7.32a.6.6 0 010 .458l-3.032 7.32a.6.6 0 01-.324.324l-7.32 3.032a.6.6 0 01-.459 0l-7.319-3.032a.6.6 0 01-.324-.325L1.095 12.23a.6.6 0 010-.46l3.032-7.319a.6.6 0 01.324-.324l7.32-3.032z"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="octagon_svg__clip0_1_4161">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgOctagon);
export default ForwardRef;
