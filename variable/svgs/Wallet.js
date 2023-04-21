import Svg, {Path} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function WalletIcon() {
  return (
    <Svg
      width={26 * scaleWidth}
      height={19 * scaleWidth}
      viewBox="0 0 26 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M23.827 16.811c0 1.2-.79 2.174-1.763 2.174H2.224c-.973-.002-1.763-.973-1.763-2.174V2.173C.46.973 1.25 0 2.224 0h19.84c.973 0 1.763.973 1.763 2.173v14.638z"
        fill="#fff"
      />
      <Path
        d="M26 11.2c0 1.007-.77 1.824-1.718 1.824h-8.305c-.948 0-1.718-.817-1.718-1.825V7.787c0-1.007.77-1.824 1.718-1.824h8.305c.948 0 1.718.815 1.718 1.824V11.2z"
        fill="#E80274"
      />
    </Svg>
  );
}

export default WalletIcon;
