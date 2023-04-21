import Svg, {Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function ArrowBtnLeft() {
  return (
    <Svg
      width={26 * scaleWidth}
      height={26 * scaleWidth}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect
        width={26}
        height={26}
        rx={13}
        fill="url(#paint0_linear_42_3916)"
        fillOpacity={0.1}
      />
      <Path
        d="M18.098 14.465H9.832l3.12 2.937a1.028 1.028 0 01-.117 1.373.859.859 0 01-.66.22.885.885 0 01-.612-.347l-4.356-4.534a1.181 1.181 0 01-.08-.146c0-.049 0-.078-.064-.127a1.041 1.041 0 01-.063-.35c0-.12.022-.239.063-.35 0-.05 0-.078.063-.127.024-.05.051-.1.081-.146l4.51-4.517a.914.914 0 01.31-.26.862.862 0 01.96.132.963.963 0 01.223.296 1.033 1.033 0 01-.105 1.078l-3.273 2.92h8.266a.87.87 0 01.638.286c.169.182.264.43.264.688 0 .258-.095.506-.264.689a.87.87 0 01-.638.285z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_42_3916"
          x1={13}
          y1={0}
          x2={33.6341}
          y2={9.78088}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#08021C" stopOpacity={0} />
          <Stop offset={1} stopColor="#08021C" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ArrowBtnLeft;
