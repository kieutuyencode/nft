import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  ClipPath,
} from 'react-native-svg';
import {scaleWidth} from '../sizes';

function Star2() {
  return (
    <Svg
      width={10 * scaleWidth}
      height={10 * scaleWidth}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_42_2101)">
        <Path
          d="M10 3.633l-3.456-.502L5 5.258 10 3.633z"
          fill="url(#paint0_linear_42_2101)"
        />
        <Path
          d="M10 3.633L4.999 5.258l2.5.813L10 3.633z"
          fill="url(#paint1_linear_42_2101)"
        />
        <Path
          d="M5 5.258V0L3.453 3.131l1.545 2.127z"
          fill="url(#paint2_linear_42_2101)"
        />
        <Path
          d="M5 0L5 .003v5.256l1.547-2.128L5 0z"
          fill="url(#paint3_linear_42_2101)"
        />
        <Path
          d="M8.09 9.512L7.5 6.071l-2.501-.813 3.09 4.254z"
          fill="url(#paint4_linear_42_2101)"
        />
        <Path
          d="M0 3.635l3.456-.502L5 5.26 0 3.635z"
          fill="url(#paint5_linear_42_2101)"
        />
        <Path
          d="M0 3.635l5 1.624-2.5.813L0 3.635z"
          fill="url(#paint6_linear_42_2101)"
        />
        <Path
          d="M1.91 9.514l.59-3.442L5 5.26 1.91 9.514z"
          fill="url(#paint7_linear_42_2101)"
        />
        <Path
          d="M4.999 5.258v2.63l3.09 1.624L5 5.258z"
          fill="url(#paint8_linear_42_2101)"
        />
        <Path
          d="M1.91 9.507l-.002.006h.002v-.006z"
          fill="url(#paint9_linear_42_2101)"
        />
        <Path
          d="M1.91 9.511L5 7.887V5.26L1.911 9.511z"
          fill="url(#paint10_linear_42_2101)"
        />
        <Path
          style={{
            mixBlendMode: 'color-dodge',
          }}
          d="M5.09 2.846c0 1.292-.037 2.339-.082 2.339-.046 0-.083-1.047-.083-2.339 0-1.291.037-2.338.083-2.338.045 0 .082 1.047.082 2.338z"
          fill="url(#paint11_radial_42_2101)"
        />
        <Path
          style={{
            mixBlendMode: 'color-dodge',
          }}
          d="M7.45 4.563c-1.226.405-2.233.698-2.247.655-.014-.044.969-.407 2.195-.811 1.226-.405 2.232-.697 2.246-.654.014.043-.968.406-2.194.81z"
          fill="url(#paint12_radial_42_2101)"
        />
        <Path
          style={{
            mixBlendMode: 'color-dodge',
          }}
          d="M6.396 7.303c-.765-1.04-1.356-1.905-1.32-1.931.037-.027.688.794 1.453 1.834.766 1.04 1.357 1.904 1.32 1.931-.037.027-.687-.794-1.453-1.834z"
          fill="url(#paint13_radial_42_2101)"
        />
        <Path
          style={{
            mixBlendMode: 'color-dodge',
          }}
          d="M3.647 7.303c.766-1.04 1.356-1.905 1.32-1.931-.037-.027-.687.794-1.453 1.834S2.158 9.11 2.194 9.137c.037.027.687-.794 1.453-1.834z"
          fill="url(#paint14_radial_42_2101)"
        />
        <Path
          style={{
            mixBlendMode: 'color-dodge',
          }}
          d="M2.567 4.564c1.233.385 2.243.662 2.256.619.014-.044-.974-.391-2.207-.776C1.384 4.02.374 3.744.36 3.787c-.014.044.974.391 2.207.777z"
          fill="url(#paint15_radial_42_2101)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_42_2101"
          x1={6.93162}
          y1={2.98126}
          x2={7.49761}
          y2={4.44109}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#D69B12" />
          <Stop offset={1} stopColor="#FEE227" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_42_2101"
          x1={7.99038}
          y1={5.90569}
          x2={7.50239}
          y2={4.45429}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#B56101" />
          <Stop offset={0.9} stopColor="#D79E13" />
          <Stop offset={1} stopColor="#FEE227" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_42_2101"
          x1={3.45374}
          y1={2.62917}
          x2={4.99911}
          y2={2.62917}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#B56101" />
          <Stop offset={1} stopColor="#FEE227" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_42_2101"
          x1={6.5459}
          y1={2.62967}
          x2={4.99261}
          y2={2.62967}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#B56101" />
          <Stop offset={0.92} stopColor="#E1AE18" />
          <Stop offset={1} stopColor="#FEE227" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_42_2101"
          x1={7.80105}
          y1={6.49734}
          x2={6.53584}
          y2={7.3913}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#B56101" />
          <Stop offset={0.93} stopColor="#F9D924" />
          <Stop offset={1} stopColor="#FEE227" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_42_2101"
          x1={3.01061}
          y1={2.97808}
          x2={2.51356}
          y2={4.4096}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#D69B12" />
          <Stop offset={1} stopColor="#FEE227" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear_42_2101"
          x1={2.03173}
          y1={5.92301}
          x2={2.50198}
          y2={4.44218}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#B56101" />
          <Stop offset={0.9} stopColor="#D79E13" />
          <Stop offset={1} stopColor="#FEE227" />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear_42_2101"
          x1={2.20278}
          y1={6.48598}
          x2={3.46433}
          y2={7.3929}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#B56101" />
          <Stop offset={1} stopColor="#F5D323" />
        </LinearGradient>
        <LinearGradient
          id="paint8_linear_42_2101"
          x1={5.26548}
          y1={8.2718}
          x2={6.51508}
          y2={7.40564}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#B56101" />
          <Stop offset={0.91} stopColor="#DFAB17" />
          <Stop offset={1} stopColor="#F2CD21" />
        </LinearGradient>
        <LinearGradient
          id="paint9_linear_42_2101"
          x1={3.43524}
          y1={10.6187}
          x2={1.90982}
          y2={9.51104}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#B56101" />
          <Stop offset={0.9} stopColor="#D79E13" />
          <Stop offset={1} stopColor="#FEE227" />
        </LinearGradient>
        <LinearGradient
          id="paint10_linear_42_2101"
          x1={4.70436}
          y1={8.29313}
          x2={3.45425}
          y2={7.38533}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#B56101" />
          <Stop offset={0.9} stopColor="#D79E13" />
          <Stop offset={1} stopColor="#FEE227" />
        </LinearGradient>
        <RadialGradient
          id="paint11_radial_42_2101"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(.0824 0 0 2.33688 5.008 2.838)">
          <Stop stopColor="#fff" />
          <Stop offset={0.5} stopColor="#797979" />
          <Stop offset={0.84} stopColor="#222" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="paint12_radial_42_2101"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(.02354 .0765 -2.23192 .68674 7.381 4.43)">
          <Stop stopColor="#fff" />
          <Stop offset={0.5} stopColor="#797979" />
          <Stop offset={0.84} stopColor="#222" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="paint13_radial_42_2101"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-.06475 .04709 -1.37453 -1.89 6.54 7.184)">
          <Stop stopColor="#fff" />
          <Stop offset={0.5} stopColor="#797979" />
          <Stop offset={0.84} stopColor="#222" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="paint14_radial_42_2101"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(.06475 .0471 -1.37454 1.89 3.525 7.208)">
          <Stop stopColor="#fff" />
          <Stop offset={0.5} stopColor="#797979" />
          <Stop offset={0.84} stopColor="#222" />
          <Stop offset={1} />
        </RadialGradient>
        <RadialGradient
          id="paint15_radial_42_2101"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-.02355 .07652 -2.23487 -.68766 2.62 4.438)">
          <Stop stopColor="#fff" />
          <Stop offset={0.5} stopColor="#797979" />
          <Stop offset={0.84} stopColor="#222" />
          <Stop offset={1} />
        </RadialGradient>
        <ClipPath id="clip0_42_2101">
          <Path fill="#fff" d="M0 0H10V9.51364H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Star2;
