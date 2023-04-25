import Svg, {Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function QrCard() {
  return (
    <Svg
      width={30 * scaleWidth}
      height={30 * scaleWidth}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M3.75 3.75H7.5V7.5H3.75V3.75z" fill="#fff" />
      <Path
        d="M11.25 0v11.25H0V0h11.25zM9.375 1.875h-7.5v7.5h7.5v-7.5zM7.5 22.5H3.75v3.75H7.5V22.5z"
        fill="#fff"
      />
      <Path
        d="M11.25 18.75V30H0V18.75h11.25zm-9.375 1.875v7.5h7.5v-7.5h-7.5zM22.5 3.75h3.75V7.5H22.5V3.75z"
        fill="#fff"
      />
      <Path
        d="M18.75 0v11.25H30V0H18.75zm9.375 1.875v7.5h-7.5v-7.5h7.5zM15 1.875V0h1.875v3.75H15V7.5h-1.875V1.875H15zm0 9.375V7.5h1.875v3.75H15zM11.25 15v-1.875h1.875V11.25H15V15h1.875v-1.875h9.375V15h-7.5v1.875h-5.625V15H11.25zm0 0v1.875h-7.5V15H1.875v1.875H0v-3.75h5.625V15h5.625zM30 16.875h-1.875v-3.75H30v3.75zm-1.875 0H26.25v3.75H30V18.75h-1.875v-1.875zm-7.5 0h3.75v1.875H22.5v1.875h-1.875v-3.75zm3.75 5.625v-1.875H22.5V22.5h-1.875v1.875h-3.75v1.875H22.5V22.5h1.875zm0 0H30v1.875h-3.75v1.875h-1.875V22.5zm-7.5-1.875V22.5h1.875v-3.75h-5.625v1.875h3.75z"
        fill="#fff"
      />
      <Path
        d="M13.125 22.5H15v5.625h7.5V30h-9.375v-7.5zM30 26.25V30h-5.625v-1.875h3.75V26.25H30z"
        fill="#fff"
      />
    </Svg>
  );
}

export default QrCard;
