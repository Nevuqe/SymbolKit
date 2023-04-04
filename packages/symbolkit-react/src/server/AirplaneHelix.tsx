import * as React from "react";
function SvgAirplaneHelix(
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
      <g clipPath="url(#airplane-helix_svg__clip0_1_314)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <path
          d="M12 15a3 3 0 100-6 3 3 0 000 6z"
          stroke="#000"
          strokeMiterlimit={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          clipRule="evenodd"
          d="M12 9s-1.988-1.975-2-4c.001-1.993-.05-4.001 2-4 1.948.001 1.997 1.976 2 4 .003 1.985-2 4-2 4zM15 12s1.975-1.988 4-2c1.993.001 4.001-.05 4 2-.001 1.948-1.976 1.997-4 2-1.985.003-4-2-4-2zM9 12s-1.975 1.988-4 2c-1.993-.001-4.001.05-4-2 .001-1.948 1.976-1.997 4-2 1.985-.003 4 2 4 2zM12 15s1.988 1.975 2 4c-.001 1.993.05 4.001-2 4-1.948-.001-1.997-1.976-2-4-.003-1.985 2-4 2-4z"
          stroke="#000"
          strokeMiterlimit={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="airplane-helix_svg__clip0_1_314">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAirplaneHelix);
export default ForwardRef;
