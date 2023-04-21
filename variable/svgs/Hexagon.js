import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function Hexagon() {
  return (
    <Svg
      width={339 * scaleWidth}
      height={329 * scaleWidth}
      viewBox="0 0 339 329"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M155.801 39.557L68.983 89.68c-8.801 5.081-14.253 14.459-14.208 24.574l-.052 100.285a28.584 28.584 0 0014.178 24.557l86.875 50.098c8.738 5.097 19.585 5.064 28.386-.017l86.818-50.125c8.802-5.081 14.254-14.459 14.208-24.574l.052-100.285a28.583 28.583 0 00-14.178-24.557L184.187 39.54c-8.738-5.097-19.585-5.064-28.386.018z"
        fill="url(#paint0_linear_1_7486)"
        fillOpacity={0.3}
      />
      <Path
        d="M218.868 52.245H121.34c-9.887 0-19.041 5.262-23.924 13.828l-48.824 84.68a27.94 27.94 0 000 27.656l48.824 84.68c4.883 8.566 14.037 13.828 23.924 13.828h97.528c9.887 0 19.041-5.262 23.924-13.828l48.825-84.68a27.942 27.942 0 000-27.656l-48.825-84.68c-4.883-8.566-14.037-13.828-23.924-13.828z"
        fill="url(#paint1_linear_1_7486)"
        fillOpacity={0.3}
      />
      <Path
        d="M210.532 71.502h-80.856c-8.197 0-15.786 4.36-19.834 11.458l-40.479 70.163a23.139 23.139 0 000 22.915l40.479 70.164c4.048 7.097 11.637 11.457 19.834 11.457h80.856c8.197 0 15.787-4.36 19.835-11.457l40.478-70.164a23.138 23.138 0 000-22.915L230.367 82.96c-4.048-7.098-11.638-11.458-19.835-11.458z"
        fill="url(#paint2_linear_1_7486)"
        fillOpacity={0.3}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_7486"
          x1={112.392}
          y1={64.6188}
          x2={227.571}
          y2={264.115}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#562E9E" />
          <Stop offset={1} stopColor="#EB2C7C" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_7486"
          x1={170.104}
          y1={52.2448}
          x2={170.104}
          y2={276.917}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#562E9E" />
          <Stop offset={1} stopColor="#EB2C7C" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_1_7486"
          x1={170.104}
          y1={71.5024}
          x2={170.104}
          y2={257.659}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#562E9E" />
          <Stop offset={1} stopColor="#EB2C7C" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Hexagon;
