import Svg, {Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function Twitter() {
  return (
    <Svg
      width={33 * scaleWidth}
      height={33 * scaleWidth}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.463 32.879c9.092 0 16.463-7.36 16.463-16.44C32.926 7.36 25.556 0 16.463 0 7.371 0 0 7.36 0 16.44c0 9.079 7.37 16.439 16.463 16.439z"
        fill="#00C2FF"
      />
      <Path
        d="M13.14 25.905c8.04 0 12.436-6.652 12.436-12.417 0-.189-.006-.378-.012-.561a8.966 8.966 0 002.18-2.258 8.782 8.782 0 01-2.507.688 4.396 4.396 0 001.922-2.413 8.753 8.753 0 01-2.777 1.06 4.373 4.373 0 00-3.19-1.38 4.368 4.368 0 00-4.258 5.363 12.41 12.41 0 01-9.01-4.561 4.374 4.374 0 00-.59 2.194 4.35 4.35 0 001.945 3.633 4.368 4.368 0 01-1.98-.544v.057c0 2.115 1.51 3.88 3.506 4.28a4.282 4.282 0 01-1.974.074 4.37 4.37 0 004.086 3.032 8.79 8.79 0 01-6.473 1.805 12.438 12.438 0 006.697 1.948z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Twitter;
