import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgPlanet(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(SymbolKitContext);
  const props = {
    ...context,
    ...passedProps,
  };
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
      <path d="M12 20a8 8 0 100-16 8 8 0 000 16z" stroke="#000" />
      <path
        d="M17.5 6.348c2.297-.538 3.945-.476 4.338.312.73 1.466-3.158 4.89-8.687 7.645-5.528 2.757-10.602 3.803-11.333 2.336-.392-.786.544-2.134 2.349-3.64"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPlanet);
export default ForwardRef;
