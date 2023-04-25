import Svg, {Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function Facebook({scale}) {
  return (
    <Svg
      width={scale ? scale * scaleWidth : 33 * scaleWidth}
      height={scale ? scale * scaleWidth : 33 * scaleWidth}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M32.926 16.44C32.926 7.362 25.558 0 16.463 0S0 7.357 0 16.44c0 8.205 6.02 15.006 13.892 16.238V21.19H9.715v-4.75h4.177v-3.622c0-4.12 2.456-6.395 6.22-6.395 1.802 0 3.685.321 3.685.321v4.046h-2.078c-2.043 0-2.685 1.266-2.685 2.567v3.082H23.6l-.728 4.75h-3.834v11.49c7.868-1.238 13.887-8.034 13.887-16.24z"
        fill="#0075FF"
      />
      <Path
        d="M22.873 21.19l.729-4.75h-4.568v-3.083c0-1.3.637-2.567 2.685-2.567h2.078V6.744s-1.883-.32-3.684-.32c-3.759 0-6.22 2.274-6.22 6.394v3.622H9.714v4.75h4.177v11.488a16.554 16.554 0 005.142 0V21.19h3.839z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Facebook;
