import Svg, {
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function Instagram() {
  return (
    <Svg
      width={33 * scaleWidth}
      height={33 * scaleWidth}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_42_1801)">
        <Path
          d="M33 16.5C33 7.387 25.613 0 16.5 0S0 7.387 0 16.5 7.387 33 16.5 33 33 25.613 33 16.5z"
          fill="url(#paint0_radial_42_1801)"
        />
        <Path
          d="M21.37 27.807h-9.741a6.444 6.444 0 01-6.436-6.436v-9.74a6.443 6.443 0 016.436-6.436h9.74a6.442 6.442 0 016.436 6.436v9.74a6.442 6.442 0 01-6.436 6.436zM11.628 7.133A4.503 4.503 0 007.13 11.63v9.74a4.505 4.505 0 004.498 4.498h9.74a4.502 4.502 0 004.498-4.498v-9.74a4.503 4.503 0 00-4.498-4.498h-9.74z"
          fill="#fff"
        />
        <Path
          d="M16.5 22.29a5.798 5.798 0 01-5.79-5.792 5.796 5.796 0 015.79-5.788 5.795 5.795 0 015.789 5.788A5.796 5.796 0 0116.5 22.29zm0-9.639a3.856 3.856 0 00-3.852 3.847A3.858 3.858 0 0016.5 20.35a3.856 3.856 0 003.85-3.852 3.855 3.855 0 00-3.85-3.849v.002zM23.929 10.38a1.393 1.393 0 01-2.783 0 1.392 1.392 0 012.783 0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_42_1801"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.324 32.556) scale(39.8214)">
          <Stop stopColor="#FEC053" />
          <Stop offset={0.33} stopColor="#F2203E" />
          <Stop offset={0.65} stopColor="#B729A8" />
          <Stop offset={1} stopColor="#5342D6" />
        </RadialGradient>
        <ClipPath id="clip0_42_1801">
          <Path fill="#fff" d="M0 0H33V33H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Instagram;
