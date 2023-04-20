import * as React from "react";
function SvgFolder(
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
        d="M2 11V7.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C3.52 4 4.08 4 5.2 4h2.616c.438 0 .658 0 .866.045a2 2 0 01.53.196c.188.102.354.244.687.53L11.6 6.23c.333.285.5.427.687.529.166.09.345.156.53.196.209.045.428.045.866.045H18.8c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C22 8.52 22 9.08 22 10.2v.8M2 11v5.8c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C3.52 20 4.08 20 5.2 20h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C22 18.48 22 17.92 22 16.8V11M2 11h20"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgFolder);
export default ForwardRef;
