import * as React from "react";
function SvgBeachBagBig(
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
        d="M2.77 12l-.633-3.287A.6.6 0 012.727 8h18.547a.6.6 0 01.589.713L21.23 12M2.769 12h18.462M2.769 12l.616 4m17.846-4l-.616 4m-17.23 0l.537 3.491a.6.6 0 00.593.509h14.97a.6.6 0 00.593-.509L20.615 16m-17.23 0h17.23M5 8V6a2 2 0 012-2h10a2 2 0 012 2v2"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBeachBagBig);
export default ForwardRef;
