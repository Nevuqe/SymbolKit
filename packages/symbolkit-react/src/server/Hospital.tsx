import * as React from "react";
function SvgHospital(
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
        d="M6.4 8a.6.6 0 00.6-.6V3.6a.6.6 0 01.6-.6h8.8a.6.6 0 01.6.6v3.8a.6.6 0 00.6.6h1.8a.6.6 0 01.6.6v11.8a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6V8.6a.6.6 0 01.6-.6h1.8z"
        stroke="#000"
      />
      <path
        d="M9.992 8h2m0 0h2m-2 0V6m0 2v2M16 17.01l.01-.011M16 13.01l.01-.011M12 13.01l.01-.011M8 13.01l.01-.011M8 17.01l.01-.011M12 17.01l.01-.011"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHospital);
export default ForwardRef;
