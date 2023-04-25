import Svg, {Circle, Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function SwapVertical() {
  return (
    <Svg
      width={38 * scaleWidth}
      height={38 * scaleWidth}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx={18.6846} cy={18.6846} r={18.6846} fill="#fff" />
      <Path
        d="M22.747 23.829l-2.708-2.648m-5.416-9.267V23.83 11.914zm0 0l2.708 2.648-2.708-2.648zm0 0l-2.708 2.648 2.708-2.648zm8.124 11.915V11.914 23.83zm0 0l2.708-2.648-2.708 2.648z"
        stroke="#E10374"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SwapVertical;
