import * as React from "react";
function SvgEcologyBook(
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
        d="M4 19V5a2 2 0 012-2h13.4a.6.6 0 01.6.6v13.114"
        stroke="#000"
        strokeLinecap="round"
      />
      <path
        d="M10 14s.9-3.118 3-5M12.802 12.425l-.134.012a3.094 3.094 0 01-3.366-2.774 3.06 3.06 0 012.761-3.35l2.986-.28a.35.35 0 01.381.314l.255 2.58a3.194 3.194 0 01-2.883 3.498z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 17h14M6 21h14" stroke="#000" strokeLinecap="round" />
      <path
        d="M6 21a2 2 0 110-4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgEcologyBook);
export default ForwardRef;
