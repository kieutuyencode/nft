import Svg, {Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function Logo2() {
  return (
    <Svg
      width={47 * scaleWidth}
      height={67 * scaleWidth}
      viewBox="0 0 47 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.475 33.245V16.269l3.013-3.116V4.779L22.248 0v33.245h5.227z"
        fill="#02FFAC"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.166 12.333C5.844 15.893 0 24.19 0 33.846c0 5.973 2.274 11.96 6.812 16.522l16.441 16.52 16.441-16.52a23.371 23.371 0 006.813-16.522c0-7.25-3.3-13.74-8.47-18.027l-.006 18.027c0 3.8-1.437 7.6-4.328 10.5a14.72 14.72 0 01-20.895 0 14.84 14.84 0 01-4.328-10.5V22.438l5.686-3.3v-6.805z"
        fill="#02FFAC"
      />
      <Path
        d="M35.858 33.243V16.267l-5.37-3.115v20.091h5.37zM19.042 33.243V23.26l-3.013-3.116v13.099h-5.37V23.26l5.37-3.116V8.735l5.366-3.109v27.617h-2.353z"
        fill="#fff"
      />
      <Path
        d="M10.865 35.605c1.074 5.9 6.206 10.377 12.388 10.377 6.182 0 11.313-4.477 12.388-10.377H10.865z"
        fill="#02FFAC"
      />
    </Svg>
  );
}

export default Logo2;
