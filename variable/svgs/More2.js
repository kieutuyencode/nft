import Svg, {Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function More2() {
  return (
    <Svg
      width={12 * scaleWidth}
      height={9 * scaleWidth}
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.199.93l-5.2 6.931a.363.363 0 01-.586 0L.213.93C.02.67.194.293.506.293h10.4c.312 0 .486.378.293.637z"
        fill="#536981"
      />
    </Svg>
  );
}

export default More2;
