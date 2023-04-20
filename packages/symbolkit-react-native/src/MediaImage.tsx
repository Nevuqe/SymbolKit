import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgMediaImage(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(SymbolKitContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M21 6.2v11.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C19.48 21 18.92 21 17.8 21H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C3 19.48 3 18.92 3 17.8V6.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C4.52 3 5.08 3 6.2 3h11.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C21 4.52 21 5.08 21 6.2z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 16l5.701-2.444c.479-.204.718-.307.966-.346.22-.034.443-.032.662.007.247.045.483.152.957.368L21 18M16 10a2 2 0 110-4 2 2 0 010 4z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMediaImage);
export default ForwardRef;
