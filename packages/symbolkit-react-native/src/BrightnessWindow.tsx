import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBrightnessWindow(
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
        d="M12 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7"
        stroke="#000"
        strokeLinecap="round"
      />
      <Path
        d="M13 6.01l.01-.011M16 6.01l.01-.011M19 6.01l.01-.011"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.113 14.756c.225-.192.338-.288.456-.344a1 1 0 01.862 0c.118.056.23.152.456.344v0c.09.077.135.115.183.147a1 1 0 00.363.15c.057.012.116.016.233.026v0c.296.023.443.035.566.079a1 1 0 01.61.61c.044.123.056.27.08.566v0c.008.117.013.176.024.233a1 1 0 00.15.363c.033.048.071.093.148.183v0c.192.225.288.338.344.456a1 1 0 010 .862c-.056.118-.152.23-.344.456v0c-.077.09-.115.135-.147.183a1 1 0 00-.15.363 2.09 2.09 0 00-.026.233v0c-.023.296-.035.443-.079.566a1 1 0 01-.61.61c-.123.044-.27.056-.566.08v0a2.09 2.09 0 00-.233.024 1 1 0 00-.363.15c-.048.033-.093.071-.183.148v0c-.225.192-.338.288-.456.344a1 1 0 01-.862 0c-.118-.056-.23-.152-.456-.344v0c-.09-.077-.135-.115-.183-.147a1 1 0 00-.363-.15 2.09 2.09 0 00-.233-.026v0c-.296-.023-.443-.035-.566-.079a1 1 0 01-.61-.61c-.044-.123-.056-.27-.08-.566v0a2.09 2.09 0 00-.024-.233 1 1 0 00-.15-.363c-.033-.048-.071-.093-.148-.183v0c-.192-.225-.288-.338-.344-.456a1 1 0 010-.862c.056-.118.152-.23.344-.456v0c.077-.09.115-.135.147-.183a1 1 0 00.15-.363 2.09 2.09 0 00.026-.233v0c.023-.296.035-.443.079-.566a1 1 0 01.61-.61c.123-.044.27-.056.566-.08v0a2.09 2.09 0 00.233-.024 1 1 0 00.363-.15c.048-.033.093-.071.183-.148v0z"
        stroke="#000"
      />
      <Path
        d="M16.775 20.956L18 22v-8l-1.225 1.044-1.603.128-.128 1.603L14 18l1.044 1.225.128 1.603 1.603.128z"
        fill="#000"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgBrightnessWindow);
export default ForwardRef;
