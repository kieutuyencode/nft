import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function Transfer() {
  return (
    <Svg
      width={23 * scaleWidth}
      height={23 * scaleWidth}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M5.604 9.207a3.603 3.603 0 100-7.206 3.603 3.603 0 000 7.206z"
        fill="url(#paint0_linear_1_7479)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.604 2.501a3.103 3.103 0 100 6.206 3.103 3.103 0 000-6.206zM1.5 5.604a4.103 4.103 0 118.206 0 4.103 4.103 0 01-8.206 0z"
        fill="url(#paint1_linear_1_7479)"
      />
      <Path
        d="M16.413 20.017a3.603 3.603 0 100-7.206 3.603 3.603 0 000 7.206z"
        fill="url(#paint2_linear_1_7479)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.413 13.31a3.103 3.103 0 100 6.207 3.103 3.103 0 000-6.206zm-4.103 3.104a4.103 4.103 0 118.206 0 4.103 4.103 0 01-8.206 0z"
        fill="url(#paint3_linear_1_7479)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.237 10.584a.5.5 0 01.487-.022l3.503 1.751a.5.5 0 01-.448.895l-2.745-1.373c.42 5.141 4.725 9.183 9.975 9.183a.5.5 0 110 1C4.929 22.018 0 17.089 0 11.008a.5.5 0 01.237-.424z"
        fill="url(#paint4_linear_1_7479)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.51.5a.5.5 0 01.5-.5c6.08 0 11.008 4.929 11.008 11.009a.5.5 0 01-.724.447l-3.503-1.751a.5.5 0 11.448-.895l2.745 1.373C20.564 5.042 16.26 1 11.01 1a.5.5 0 01-.5-.5z"
        fill="url(#paint5_linear_1_7479)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_7479"
          x1={5.60393}
          y1={2.0011}
          x2={5.60393}
          y2={9.20701}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#DFAFCD" />
          <Stop offset={1} stopColor="#DFAFCD" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_7479"
          x1={5.60393}
          y1={1.5011}
          x2={5.60393}
          y2={9.70701}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#DFAFCD" />
          <Stop offset={1} stopColor="#DFAFCD" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_1_7479"
          x1={16.4128}
          y1={12.8106}
          x2={16.4128}
          y2={20.0165}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#DFAFCD" />
          <Stop offset={1} stopColor="#DFAFCD" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_1_7479"
          x1={16.4128}
          y1={12.3106}
          x2={16.4128}
          y2={20.5165}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#DFAFCD" />
          <Stop offset={1} stopColor="#DFAFCD" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_1_7479"
          x1={5.75442}
          y1={10.5088}
          x2={5.75442}
          y2={22.0176}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#DFAFCD" />
          <Stop offset={1} stopColor="#DFAFCD" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_1_7479"
          x1={16.2637}
          y1={0}
          x2={16.2637}
          y2={11.5088}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#DFAFCD" />
          <Stop offset={1} stopColor="#DFAFCD" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Transfer;
