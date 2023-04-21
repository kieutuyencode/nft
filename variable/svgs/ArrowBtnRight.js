import Svg, {Path, Rect, Defs, LinearGradient, Stop} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function ArrowBtnRight() {
  return (
    <Svg
      width={30 * scaleWidth}
      height={30 * scaleWidth}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.117 13.31h9.538l-3.6-3.39a1.186 1.186 0 01-.237-.822c.026-.297.16-.57.372-.761a.991.991 0 01.761-.255c.276.027.53.171.706.4l5.026 5.232c.035.054.067.11.094.169 0 .056 0 .09.073.146.047.129.072.266.073.404a1.205 1.205 0 01-.073.405c0 .056 0 .09-.073.146a1.354 1.354 0 01-.094.168l-5.203 5.213c-.098.127-.22.229-.358.299a.976.976 0 01-.443.105.995.995 0 01-.666-.258 1.11 1.11 0 01-.256-.341 1.19 1.19 0 01-.073-.858c.04-.14.106-.272.194-.385l3.777-3.37H9.117c-.276 0-.54-.119-.736-.33a1.17 1.17 0 01-.305-.794c0-.297.11-.583.305-.794.195-.21.46-.329.736-.329z"
        fill="#fff"
      />
      <Rect
        x={29.9995}
        y={30}
        width={30}
        height={30}
        rx={15}
        transform="rotate(-180 30 30)"
        fill="url(#paint0_linear_1_7438)"
        fillOpacity={0.2}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_7438"
          x1={44.9995}
          y1={30}
          x2={68.8081}
          y2={41.2856}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#DDD" />
          <Stop offset={1} stopColor="#08021C" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ArrowBtnRight;
