import Svg, {Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function More() {
  return (
    <Svg
      width={11 * scaleWidth}
      height={8 * scaleWidth}
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.92.66L5.79 7.846a.348.348 0 01-.578 0L.08.66C-.11.392.06 0 .369 0h10.262c.308 0 .48.392.29.66z"
        fill="#fff"
      />
    </Svg>
  );
}

export default More;
