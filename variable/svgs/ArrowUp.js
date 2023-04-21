import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function ArrowUp() {
  return (
    <Svg
      width={22 * scaleWidth}
      height={23 * scaleWidth}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19.704 13.591v7.847H1.314v-7.846h18.39zm1.314-.98H0v9.808h21.018V12.61z"
        fill="url(#paint0_linear_1_7463)"
      />
      <Path
        d="M10.509 0l6.305 10.93h-3.152v7.285H7.356V10.93H4.204L10.509 0z"
        fill="url(#paint1_linear_1_7463)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_7463"
          x1={10.5088}
          y1={12.6106}
          x2={10.5088}
          y2={22.4189}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#DFAFCD" />
          <Stop offset={1} stopColor="#DFAFCC" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_7463"
          x1={10.5089}
          y1={0}
          x2={10.5089}
          y2={18.2153}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#DFAFCD" />
          <Stop offset={1} stopColor="#DFAFCC" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ArrowUp;
