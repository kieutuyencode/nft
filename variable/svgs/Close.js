import Svg, {Rect, Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function Close() {
  return (
    <Svg
      width={17 * scaleWidth}
      height={17 * scaleWidth}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect width={17} height={17} rx={3} fill="#F40074" />
      <Path d="M13.5 4L4 13.5M4 4l9.5 9.5" stroke="#fff" />
    </Svg>
  );
}

export default Close;
