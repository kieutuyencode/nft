import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function Earned() {
  return (
    <Svg
      width={17 * scaleWidth}
      height={17 * scaleWidth}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_1_5721)">
        <Path
          d="M0 8.5a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z"
          fill="url(#paint0_linear_1_5721)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.24 8.5a8.26 8.26 0 1016.52 0 8.26 8.26 0 00-16.52 0zM8.5 0a8.5 8.5 0 100 17 8.5 8.5 0 000-17z"
          fill="#fff"
          fillOpacity={0.16}
        />
        <Path
          d="M8.593 5.403c.744 0 1.405.325 1.851.829l1.124-.748A3.81 3.81 0 008.593 4.07a3.763 3.763 0 00-2.96 1.398l1.125.748a2.444 2.444 0 011.835-.813z"
          fill="url(#paint1_linear_1_5721)"
        />
        <Path
          d="M8.593 10.197a2.467 2.467 0 01-1.852-.829l-1.09.732c.115.13.247.26.38.406l2.595 2.551 2.694-2.681c.083-.081.166-.179.248-.276l-1.107-.748a2.46 2.46 0 01-1.868.845z"
          fill="url(#paint2_linear_1_5721)"
        />
        <Path
          d="M6.146 7.792c0-.406.1-.796.298-1.138L5.32 5.907a3.681 3.681 0 00-.53 1.885c0 .748.183 1.333.53 1.869l1.107-.748a2.506 2.506 0 01-.28-1.121z"
          fill="url(#paint3_linear_1_5721)"
        />
        <Path
          d="M11.882 5.923l-1.124.748c.182.341.281.715.281 1.121 0 .39-.1.78-.264 1.105l1.124.748c.347-.553.512-1.154.512-1.853a3.837 3.837 0 00-.529-1.869z"
          fill="url(#paint4_linear_1_5721)"
        />
        <Path
          d="M8.593 6.72c.595 0 1.09.487 1.09 1.072a1.08 1.08 0 01-1.09 1.072 1.08 1.08 0 01-1.091-1.072c0-.585.496-1.073 1.09-1.073z"
          fill="url(#paint5_linear_1_5721)"
        />
        <Path
          d="M13.47 4.85c.528.862.842 1.87.842 2.942 0 1.073-.314 2.08-.843 2.925l-1.14-.764c.38-.633.595-1.365.595-2.161s-.215-1.528-.612-2.178l1.157-.764zm-9.754 5.9a5.627 5.627 0 01-.843-2.958c0-1.073.314-2.096.86-2.942l1.14.764a4.097 4.097 0 00-.628 2.178c0 .796.232 1.544.612 2.178l-1.14.78z"
          fill="url(#paint6_linear_1_5721)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1_5721"
          x1={8.5}
          y1={0}
          x2={8.5}
          y2={17}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E80274" />
          <Stop offset={1} stopColor="#7D0D6A" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_5721"
          x1={8.60097}
          y1={4.07043}
          x2={8.60097}
          y2={6.23188}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#DDD" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_1_5721"
          x1={8.6093}
          y1={9.35199}
          x2={8.6093}
          y2={13.0573}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#DDD" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_1_5721"
          x1={5.61729}
          y1={5.90686}
          x2={5.61729}
          y2={9.66095}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#DDD" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_1_5721"
          x1={11.5846}
          y1={5.92328}
          x2={11.5846}
          y2={9.64488}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#DDD" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_1_5721"
          x1={8.59271}
          y1={6.71924}
          x2={8.59271}
          y2={8.86445}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#DDD" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear_1_5721"
          x1={8.59277}
          y1={4.85046}
          x2={8.59277}
          y2={10.7498}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#DDD" />
        </LinearGradient>
        <ClipPath id="clip0_1_5721">
          <Path fill="#fff" d="M0 0H17V17H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Earned;
