import * as React from "react";
function SvgElectronicsTransistor(
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
        d="M7 16V3.6a.6.6 0 01.6-.6h8.8a.6.6 0 01.6.6V16M7 16h2m-2 0H5m12 0h-2m2 0h2M9 16h3m-3 0v6m6-6h-3m3 0v6m-3-6v6"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgElectronicsTransistor);
export default ForwardRef;
