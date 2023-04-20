import * as React from "react";
function SvgGlobeWire(
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
      <path
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
        stroke="#000"
      />
      <path
        d="M13 2.05S16 6 16 12M13 22s3-3.97 3-10M11 21.95S8 18 8 12c0-6 3-9.95 3-9.95M3 15h18M2.63 8.5h18.74"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgGlobeWire);
export default ForwardRef;
