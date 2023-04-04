import * as React from "react";
function SvgHandBrake(
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
      <path fill="#fff" d="M0 0h24v24H0z" />
      <path
        d="M12 16v-4M12 9V8"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 20a8 8 0 100-16 8 8 0 000 16z" stroke="#000" />
      <path
        d="M3.953 4.5A10.961 10.961 0 001 12c0 2.899 1.121 5.535 2.953 7.5M20.047 4.5A10.962 10.962 0 0123 12c0 2.899-1.121 5.535-2.953 7.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHandBrake);
export default ForwardRef;
