import * as React from "react";
function SvgHexagonAlt(
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
      <g clipPath="url(#hexagon-alt_svg__clip0_1_3142)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <mask
          id="hexagon-alt_svg__a"
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
        <g mask="url(#hexagon-alt_svg__a)">
          <path
            d="M6.327 2.774a.6.6 0 01.52-.3h10.307a.6.6 0 01.52.3l5.153 8.926a.6.6 0 010 .6l-5.154 8.926a.6.6 0 01-.52.3H6.847a.6.6 0 01-.52-.3L1.174 12.3a.6.6 0 010-.6l5.154-8.926z"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="hexagon-alt_svg__clip0_1_3142">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHexagonAlt);
export default ForwardRef;
