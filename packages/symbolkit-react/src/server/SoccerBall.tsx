import * as React from "react";
function SvgSoccerBall(
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
        d="M12 8l3.804 2.764M12 8l-3.804 2.764M12 8V5m3.804 5.764l-1.453 4.472m1.453-4.472L18.5 9.5M8.196 10.764l1.453 4.472m-1.453-4.472L5.5 9.5M12 5L8.624 2.584M12 5l3.376-2.416M14.35 15.236H9.65m4.702 0L16 17.5m2.5-8l3.45 3.5M18.5 9.5l1-4.115m-9.851 9.851L8 17.5m8 0l4.662-.5M16 17.5l-2.5 4.388M8 17.5L3.338 17M8 17.5l2.5 4.388M5.5 9.5L2.05 13M5.5 9.5l-1-4.115M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSoccerBall);
export default ForwardRef;
