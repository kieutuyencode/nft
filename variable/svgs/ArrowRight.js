import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function ArrowRight() {
  return (
    <Svg
      width={20 * scaleWidth}
      height={19 * scaleWidth}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_42_1754)">
        <Path
          d="M5.106 8.854h8.61l-3.25-3.17a1.14 1.14 0 01-.213-.77c.023-.278.144-.534.335-.713a.875.875 0 01.688-.238c.248.025.478.16.637.375l4.538 4.895c.031.05.06.103.084.157 0 .053 0 .085.066.137.043.12.065.249.066.379-.001.13-.024.257-.066.378 0 .052 0 .084-.066.136a1.28 1.28 0 01-.084.158l-4.697 4.877a.96.96 0 01-.324.28.856.856 0 01-.4.098.88.88 0 01-.601-.241 1.038 1.038 0 01-.231-.32 1.145 1.145 0 01-.066-.802c.036-.132.096-.254.175-.36l3.41-3.153h-8.61a.892.892 0 01-.665-.308 1.118 1.118 0 01-.275-.743c0-.28.099-.547.275-.744a.892.892 0 01.664-.308z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_42_1754">
          <Path fill="#fff" d="M0 0H20V19H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ArrowRight;
