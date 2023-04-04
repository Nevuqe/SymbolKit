import * as React from "react";
function SvgSendDiagonal(
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
      <g clipPath="url(#send-diagonal_svg__clip0_1_5156)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <mask
          id="send-diagonal_svg__a"
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
          mask="url(#send-diagonal_svg__a)"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22.152 3.553L11.178 21.004l-1.67-8.596L2 7.898l20.152-4.345zM9.456 12.444l12.696-8.89" />
        </g>
      </g>
      <defs>
        <clipPath id="send-diagonal_svg__clip0_1_5156">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSendDiagonal);
export default ForwardRef;
