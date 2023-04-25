import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function Plus() {
  return (
    <Svg
      width={20 * scaleWidth}
      height={21 * scaleWidth}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.851 21v-9.44H0V9.44h8.851V0h2.298v9.44H20v2.12h-8.851V21H8.85z"
        fill="url(#paint0_linear_42_1994)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_42_1994"
          x1={10}
          y1={0}
          x2={10}
          y2={21}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FCDAE1" />
          <Stop offset={1} stopColor="#D285AD" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Plus;
