import * as React from "react";
function SvgEmptyPage(
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
        d="M4 18.8V5.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C5.52 2 6.08 2 7.2 2h7.974c.49 0 .734 0 .965.055.204.05.399.13.578.24.201.123.374.296.72.642l1.626 1.626c.346.346.519.519.642.72.11.18.19.374.24.579.055.23.055.474.055.963V18.8c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C18.48 22 17.92 22 16.8 22H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C4 20.48 4 19.92 4 18.8z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2.258V5.4a.6.6 0 00.6.6h2.9"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgEmptyPage);
export default ForwardRef;
