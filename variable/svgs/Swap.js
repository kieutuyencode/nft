import Svg, {Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function SwapIcon() {
  return (
    <Svg
      width={21 * scaleWidth}
      height={21 * scaleWidth}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18.245 3.41A10.5 10.5 0 000 10.5h1.969A8.532 8.532 0 0116.85 4.805l-1.757 1.757L21 7.875l-1.313-5.907-1.442 1.443zM19.031 10.5A8.532 8.532 0 014.15 16.195l1.757-1.757L0 13.125l1.313 5.907 1.442-1.443A10.5 10.5 0 0021 10.5h-1.969z"
        fill="#fff"
      />
      <Path d="M12 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#E80274" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 10.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM10.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="#E50374"
      />
    </Svg>
  );
}

export default SwapIcon;
