import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function Star({size}) {
  return (
    <Svg
      width={size ? size * scaleWidth : 10 * scaleWidth}
      height={size ? size * scaleWidth : 10 * scaleWidth}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.174 3.975l-2.787-.424L5.14.905a.346.346 0 00-.63 0L3.264 3.551l-2.788.424a.345.345 0 00-.201.107.378.378 0 00.006.52l2.017 2.06-.476 2.908a.384.384 0 00.02.201.365.365 0 00.12.16.341.341 0 00.37.027l2.493-1.373L7.32 9.958c.068.038.147.05.223.037a.366.366 0 00.286-.425l-.476-2.908 2.017-2.06a.374.374 0 00.102-.21.364.364 0 00-.297-.417z"
        fill="url(#paint0_linear_42_4124)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_42_4124"
          x1={4.82505}
          y1={0.700272}
          x2={4.82505}
          y2={10.0003}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFD705" />
          <Stop offset={1} stopColor="#F7971E" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Star;
