import Svg, {Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function Star0({size}) {
  return (
    <Svg
      width={size ? size * scaleWidth : 10 * scaleWidth}
      height={size ? size * scaleWidth : 10 * scaleWidth}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.7 3.975L6.91 3.551 5.665.905a.346.346 0 00-.63 0L3.789 3.551 1 3.975a.345.345 0 00-.201.107.378.378 0 00.006.52l2.017 2.06-.476 2.908a.383.383 0 00.02.201.365.365 0 00.12.16.341.341 0 00.37.027L5.35 8.585l2.494 1.373c.068.038.147.05.223.037a.366.366 0 00.286-.425l-.476-2.908 2.017-2.06a.374.374 0 00.102-.21.364.364 0 00-.297-.417z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Star0;
