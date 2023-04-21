import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function NumberWallet() {
  return (
    <Svg
      width={15 * scaleWidth}
      height={13 * scaleWidth}
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.5 2.24c.976 0 1.843.426 2.428 1.086l1.474-.98A4.997 4.997 0 007.5.492c-1.582 0-2.97.703-3.88 1.833l1.474.98A3.204 3.204 0 017.5 2.239z"
        fill="url(#paint0_linear_1_7395)"
      />
      <Path
        d="M7.5 8.526a3.235 3.235 0 01-2.427-1.087l-1.43.96c.15.17.324.34.498.532l3.403 3.346 3.533-3.517c.108-.106.217-.234.325-.362l-1.452-.98A3.226 3.226 0 017.5 8.526z"
        fill="url(#paint1_linear_1_7395)"
      />
      <Path
        d="M4.292 5.372c0-.533.13-1.044.39-1.492L3.208 2.9a4.827 4.827 0 00-.694 2.472c0 .98.239 1.748.694 2.45l1.452-.98a3.286 3.286 0 01-.368-1.47z"
        fill="url(#paint2_linear_1_7395)"
      />
      <Path
        d="M11.814 2.921l-1.474.98c.239.448.369.938.369 1.471 0 .512-.13 1.023-.347 1.45l1.474.98c.455-.725.672-1.513.672-2.43a5.031 5.031 0 00-.694-2.45z"
        fill="url(#paint3_linear_1_7395)"
      />
      <Path
        d="M7.5 3.965c.78 0 1.43.64 1.43 1.407 0 .788-.65 1.406-1.43 1.406-.802 0-1.43-.64-1.43-1.406 0-.768.65-1.407 1.43-1.407z"
        fill="url(#paint4_linear_1_7395)"
      />
      <Path
        d="M13.895 1.515A7.36 7.36 0 0115 5.373a7.229 7.229 0 01-1.105 3.835l-1.496-1.001a5.46 5.46 0 00.78-2.834 5.41 5.41 0 00-.802-2.856l1.518-1.002zM1.105 9.251A7.378 7.378 0 010 5.373c0-1.407.412-2.75 1.127-3.858l1.496 1.002a5.372 5.372 0 00-.824 2.856c0 1.044.304 2.024.802 2.855L1.105 9.251z"
        fill="url(#paint5_linear_1_7395)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_7395"
          x1={7.51101}
          y1={0.491943}
          x2={7.51101}
          y2={3.32628}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#DDD" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_7395"
          x1={7.52215}
          y1={7.41785}
          x2={7.52215}
          y2={12.2767}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#DDD" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_1_7395"
          x1={3.59798}
          y1={2.90009}
          x2={3.59798}
          y2={7.82288}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#DDD" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_1_7395"
          x1={11.4239}
          y1={2.92145}
          x2={11.4239}
          y2={7.80162}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#DDD" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_1_7395"
          x1={7.49973}
          y1={3.96509}
          x2={7.49973}
          y2={6.77811}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#DDD" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_1_7395"
          x1={7.5}
          y1={1.51526}
          x2={7.5}
          y2={9.25107}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#DDD" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default NumberWallet;
