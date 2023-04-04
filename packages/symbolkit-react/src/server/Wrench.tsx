import * as React from "react";
function SvgWrench(
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
      <g clipPath="url(#wrench_svg__clip0_1_6465)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <mask
          id="wrench_svg__a"
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
          mask="url(#wrench_svg__a)"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10.05 10.607l-7.07 7.07a2 2 0 102.828 2.83l7.07-7.072M10.05 10.607c-.844-2.153-.679-4.978 1.06-6.718 1.74-1.74 4.95-2.121 6.718-1.06l-3.04 3.04-.283 3.111 3.111-.282 3.04-3.041c1.062 1.768.68 4.978-1.06 6.717-1.74 1.74-4.564 1.905-6.717 1.061" />
        </g>
      </g>
      <defs>
        <clipPath id="wrench_svg__clip0_1_6465">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWrench);
export default ForwardRef;
