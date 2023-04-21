import Svg, {Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function ProfileIcon() {
  return (
    <Svg
      width={20 * scaleWidth}
      height={21 * scaleWidth}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15.516 14.739H4.484C2.01 14.739 0 16.609 0 18.914v1.54h20v-1.54c0-2.306-2.005-4.175-4.484-4.175z"
        fill="#E80274"
      />
      <Path
        d="M15.379 7.116A5.447 5.447 0 104.625 5.377a5.447 5.447 0 0010.754 1.739z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ProfileIcon;
