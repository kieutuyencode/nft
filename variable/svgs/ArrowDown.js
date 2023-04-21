import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function ArrowDown() {
  return (
    <Svg
      width={22 * scaleWidth}
      height={23 * scaleWidth}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19.704 13.591v7.847H1.314V13.59h18.39zm1.314-.98H0v9.807h21.018V12.61z"
        fill="url(#paint0_linear_1_7471)"
      />
      <Path
        d="M10.509 18.215L4.203 7.286h3.153V0h6.305v7.286h3.153l-6.305 10.93z"
        fill="url(#paint1_linear_1_7471)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_7471"
          x1={10.5088}
          y1={12.6102}
          x2={10.5088}
          y2={22.4184}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E4C0FC" />
          <Stop offset={1} stopColor="#DEAECB" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_7471"
          x1={10.5087}
          y1={18.2153}
          x2={10.5087}
          y2={0.0000133514}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E4C0FC" />
          <Stop offset={1} stopColor="#DEAECB" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ArrowDown;
