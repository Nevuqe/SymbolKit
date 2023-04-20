import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgDocStar(
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
        d="M15.464 17.242c.308-.047.461-.07.595-.134a.999.999 0 00.312-.233c.099-.11.165-.25.298-.532l.546-1.157a.312.312 0 01.57 0l.546 1.157c.133.282.2.422.298.532a.999.999 0 00.312.233c.134.063.287.087.595.134l1.191.182c.261.04.365.376.177.568l-.904.92c-.208.213-.312.319-.379.444a1 1 0 00-.112.355c-.017.141.007.288.055.581l.216 1.318c.044.272-.229.48-.462.351l-1.047-.576c-.281-.155-.422-.233-.571-.263a.997.997 0 00-.4 0c-.149.03-.29.108-.572.263l-1.046.576c-.234.129-.506-.079-.462-.351l.216-1.318c.048-.293.072-.44.056-.58a1 1 0 00-.113-.356c-.067-.125-.171-.231-.38-.443l-.902-.92c-.19-.193-.085-.529.176-.569l1.19-.182z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 12V6.825c0-.489 0-.733-.055-.963-.05-.205-.13-.4-.24-.579-.123-.201-.296-.374-.642-.72l-1.626-1.626c-.346-.346-.519-.519-.72-.642a2.001 2.001 0 00-.578-.24C15.909 2 15.664 2 15.175 2H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C4 3.52 4 4.08 4 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C5.52 22 6.08 22 7.2 22H11"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2.5v2.9a.6.6 0 00.6.6h2.9"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgDocStar);
export default ForwardRef;
