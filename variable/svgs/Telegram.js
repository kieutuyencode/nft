import Svg, {Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function Telegram({scale}) {
  return (
    <Svg
      width={scale ? scale * scaleWidth : 33 * scaleWidth}
      height={scale ? scale * scaleWidth : 33 * scaleWidth}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.463 32.879c9.092 0 16.463-7.36 16.463-16.44C32.926 7.36 25.556 0 16.463 0 7.371 0 0 7.36 0 16.44c0 9.079 7.37 16.439 16.463 16.439z"
        fill="#00C2FF"
      />
      <Path
        d="M13.732 19.024L13.359 23s-.155 1.22 1.061 0c1.223-1.22 2.387-2.16 2.387-2.16l-3.075-1.816z"
        fill="#fff"
      />
      <Path
        d="M11.178 17.832l-4.017-1.306s-.482-.195-.327-.636c.035-.092.098-.167.287-.304.89-.62 16.475-6.212 16.475-6.212s.442-.149.7-.051c.12.046.195.097.258.28.023.07.034.213.034.356 0 .103-.011.2-.023.35-.097 1.53-2.938 12.944-2.938 12.944s-.172.67-.78.693c-.224.006-.493-.035-.815-.315-1.193-1.026-5.325-3.8-6.237-4.407a.165.165 0 01-.075-.12c-.011-.063.057-.143.057-.143s7.19-6.383 7.386-7.054c.017-.052-.04-.08-.115-.057-.476.177-8.757 5.397-9.675 5.976-.046.029-.195.006-.195.006z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Telegram;
