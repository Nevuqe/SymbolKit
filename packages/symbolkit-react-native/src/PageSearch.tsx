import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgPageSearch(
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
        d="M20 12V6.825c0-.489 0-.733-.055-.963-.05-.205-.13-.4-.24-.579-.123-.201-.296-.374-.642-.72l-1.626-1.626c-.346-.346-.519-.519-.72-.642a2.001 2.001 0 00-.578-.24C15.909 2 15.664 2 15.175 2H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C4 3.52 4 4.08 4 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C5.52 22 6.08 22 7.2 22H11M8 10h8M8 6h4m-4 8h3M20.5 20.5L22 22"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 18a3 3 0 106 0 3 3 0 00-6 0zM16 2.5v2.9a.6.6 0 00.6.6h2.9"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgPageSearch);
export default ForwardRef;
