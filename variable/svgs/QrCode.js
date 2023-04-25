import Svg, {Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function QrCodeIcon() {
  return (
    <Svg
      width={180 * scaleWidth}
      height={180 * scaleWidth}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M22.5 22.5H45V45H22.5V22.5z" fill="#fff" />
      <Path
        d="M67.5 0v67.5H0V0h67.5zM56.25 11.25h-45v45h45v-45zM45 135H22.5v22.5H45V135z"
        fill="#fff"
      />
      <Path
        d="M67.5 112.5V180H0v-67.5h67.5zm-56.25 11.25v45h45v-45h-45zM135 22.5h22.5V45H135V22.5z"
        fill="#fff"
      />
      <Path
        d="M112.5 0v67.5H180V0h-67.5zm56.25 11.25v45h-45v-45h45zm-78.75 0V0h11.25v22.5H90V45H78.75V11.25H90zm0 56.25V45h11.25v22.5H90zM67.5 90V78.75h11.25V67.5H90V90h11.25V78.75h56.25V90h-45v11.25H78.75V90H67.5zm0 0v11.25h-45V90H11.25v11.25H0v-22.5h33.75V90H67.5zM180 101.25h-11.25v-22.5H180v22.5zm-11.25 0H157.5v22.5H180V112.5h-11.25v-11.25zm-45 0h22.5v11.25H135v11.25h-11.25v-22.5zm22.5 33.75v-11.25H135V135h-11.25v11.25h-22.5v11.25H135V135h11.25zm0 0H180v11.25h-22.5v11.25h-11.25V135zm-45-11.25V135h11.25v-22.5H78.75v11.25h22.5z"
        fill="#fff"
      />
      <Path
        d="M78.75 135H90v33.75h45V180H78.75v-45zM180 157.5V180h-33.75v-11.25h22.5V157.5H180z"
        fill="#fff"
      />
    </Svg>
  );
}

export default QrCodeIcon;
