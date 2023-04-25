import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function HexagonLight() {
  return (
    <Svg
      width={179 * scaleWidth}
      height={161 * scaleWidth}
      viewBox="0 0 179 161"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M138.872 149.595l-.004.006-.004.007c-2.952 5.191-8.496 8.392-14.498 8.392H54.634c-6.002 0-11.546-3.201-14.498-8.392l-.004-.007-.004-.006-34.902-60.67-.003-.004a17.06 17.06 0 010-16.842l.003-.005 34.902-60.669.004-.006.004-.007C43.088 6.202 48.632 3 54.634 3h69.732c6.002 0 11.546 3.201 14.498 8.392l.004.007.004.006 34.902 60.67.004.005a17.061 17.061 0 01-.004 16.846l-34.902 60.669z"
        fill="url(#paint0_linear_1_2)"
        fillOpacity={0.9}
        stroke="#fff"
        strokeWidth={6}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_2"
          x1={89.5}
          y1={161}
          x2={89.5}
          y2={-0.0000021619}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F40074" />
          <Stop offset={1} stopColor="#502D9F" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default HexagonLight;
