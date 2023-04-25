import Svg, {Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function ArrowRightSm() {
  return (
    <Svg
      width={6 * scaleWidth}
      height={6 * scaleWidth}
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M.654.618l4.615 2.397c.132.068.132.2 0 .27L.654 5.68c-.172.09-.424.01-.424-.135V.753C.23.609.482.529.654.618z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ArrowRightSm;
