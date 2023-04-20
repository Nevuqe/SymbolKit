import * as React from "react";
function SvgMultiplePages(
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
        d="M7 18h7M7 14h1M7 10h3M7 2h8.175c.489 0 .733 0 .963.055.204.05.4.13.579.24.201.123.374.296.72.642l2.626 2.626c.346.346.519.519.642.72.11.18.19.374.24.579.055.23.055.474.055.963V19"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18.8V8.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C4.52 5 5.08 5 6.2 5h6.974c.49 0 .734 0 .965.055.204.05.399.13.578.24.201.123.374.296.72.642l1.626 1.626c.346.346.519.519.642.72.11.18.19.374.24.579.055.23.055.474.055.963V18.8c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C16.48 22 15.92 22 14.8 22H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C3 20.48 3 19.92 3 18.8z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5.5v2.9a.6.6 0 00.6.6h2.9"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMultiplePages);
export default ForwardRef;
