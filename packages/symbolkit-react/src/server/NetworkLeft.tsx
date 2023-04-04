import * as React from "react";
function SvgNetworkLeft(
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
        d="M2 14.6v5.8a.6.6 0 00.6.6h3.8a.6.6 0 00.6-.6v-5.8a.6.6 0 00-.6-.6H2.6a.6.6 0 00-.6.6zM17 9.1v5.8a.6.6 0 00.6.6h3.8a.6.6 0 00.6-.6V9.1a.6.6 0 00-.6-.6h-3.8a.6.6 0 00-.6.6zM2 3.6v5.8a.6.6 0 00.6.6h3.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H2.6a.6.6 0 00-.6.6zM7 17.5h3.5a2 2 0 002-2v-7a2 2 0 00-2-2H7M12.5 12H17"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNetworkLeft);
export default ForwardRef;
