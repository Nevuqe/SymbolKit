import * as React from "react";
function SvgLabel(
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
        d="M3 14.8V9.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C4.52 6 5.08 6 6.2 6h9.087c.627 0 .94 0 1.224.086a2 2 0 01.689.369c.229.188.403.449.75.97l1.867 2.8c.427.642.641.962.724 1.309.074.306.074.626 0 .932-.083.347-.297.668-.724 1.309l-1.867 2.8c-.347.521-.521.782-.75.97a2.001 2.001 0 01-.69.369c-.283.086-.596.086-1.223.086H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C3 16.48 3 15.92 3 14.8z"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgLabel);
export default ForwardRef;
