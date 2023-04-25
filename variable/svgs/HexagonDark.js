import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function HexagonDark() {
  return (
    <Svg
      width={179 * scaleWidth}
      height={161 * scaleWidth}
      viewBox="0 0 179 161"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M54.634 161h69.732c7.069 0 13.615-3.771 17.106-9.909l34.91-60.682a20.06 20.06 0 000-19.818l-34.91-60.682C137.981 3.771 131.435 0 124.366 0H54.634c-7.07 0-13.615 3.77-17.106 9.909L2.618 70.591a20.06 20.06 0 000 19.818l34.91 60.682C41.019 157.229 47.565 161 54.634 161z"
        fill="url(#paint0_linear_42_5527)"
        fillOpacity={0.9}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_42_5527"
          x1={89.5}
          y1={161}
          x2={89.5}
          y2={-0.0000021619}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#750D68" />
          <Stop offset={1} stopColor="#180346" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default HexagonDark;
