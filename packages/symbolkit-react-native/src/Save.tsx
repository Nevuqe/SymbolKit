import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgSave(
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
        d="M20 13v4.8c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C18.48 21 17.92 21 16.8 21H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C4 19.48 4 18.92 4 17.8V13M12 3v12m0 0l3.5-3.5M12 15l-3.5-3.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgSave);
export default ForwardRef;
