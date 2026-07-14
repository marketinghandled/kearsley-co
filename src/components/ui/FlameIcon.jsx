const KEYFRAMES = `
/* Left tendril — gentle leftward lean */
@keyframes fire-tendril {
  0%   { transform: scaleX(1)    scaleY(1)    skewX(0deg)   translateX(0px);  opacity: 1;    }
  18%  { transform: scaleX(0.98) scaleY(1.03) skewX(-1.2deg)translateX(-1px); opacity: 0.94; }
  37%  { transform: scaleX(1.02) scaleY(0.98) skewX(0.8deg) translateX(1px);  opacity: 0.97; }
  55%  { transform: scaleX(0.97) scaleY(1.04) skewX(-1.5deg)translateX(-2px); opacity: 0.92; }
  73%  { transform: scaleX(1.01) scaleY(0.97) skewX(1deg)   translateX(1px);  opacity: 0.96; }
  89%  { transform: scaleX(0.99) scaleY(1.02) skewX(-0.6deg)translateX(-1px); opacity: 0.94; }
  100% { transform: scaleX(1)    scaleY(1)    skewX(0deg)   translateX(0px);  opacity: 1;    }
}

/* Main flame body — mirrors tendril, phase-shifted */
@keyframes fire-body {
  0%   { transform: scaleX(1)    scaleY(1)    skewX(0deg)   translateX(0px);  opacity: 1;    }
  21%  { transform: scaleX(1.02) scaleY(0.97) skewX(1.2deg) translateX(1px);  opacity: 0.93; }
  40%  { transform: scaleX(0.98) scaleY(1.03) skewX(-0.8deg)translateX(-1px); opacity: 0.97; }
  58%  { transform: scaleX(1.02) scaleY(0.97) skewX(1.5deg) translateX(2px);  opacity: 0.91; }
  76%  { transform: scaleX(0.99) scaleY(1.02) skewX(-1deg)  translateX(-1px); opacity: 0.95; }
  91%  { transform: scaleX(1.01) scaleY(0.98) skewX(0.5deg) translateX(1px);  opacity: 0.93; }
  100% { transform: scaleX(1)    scaleY(1)    skewX(0deg)   translateX(0px);  opacity: 1;    }
}

@media (prefers-reduced-motion: reduce) {
  .flame-path-tendril,
  .flame-path-body { animation: none !important; }
}
`

let stylesInjected = false
function injectStyles() {
  if (stylesInjected || typeof document === 'undefined') return
  const el = document.createElement('style')
  el.dataset.flameIcon = '1'
  el.textContent = KEYFRAMES
  document.head.appendChild(el)
  stylesInjected = true
}

export default function FlameIcon({ size = 32, color = '#274069', className = '' }) {
  injectStyles()
  const width = Math.round(size * (1481 / 1427))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="9 36 1481 1427"
      fill="none"
      width={width}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ flexShrink: 0, overflow: 'visible' }}
    >
      {/* Left tendril — anchored at its own base, 1.95s loop */}
      <path
        className="flame-path-tendril"
        fill={color}
        fillRule="nonzero"
        d="M 247.757812 1015.347656 C 257.753906 912.449219 288.113281 811.65625 336.054688 720.117188 C 386.386719 623.992188 458.722656 542.167969 524.132812 456.320312 C 568.554688 397.996094 619.539062 341.238281 651.488281 274.65625 C 688.527344 197.425781 683.671875 109.65625 624.824219 46.898438 C 275.445312 106.382812 9.453125 410.574219 9.453125 776.898438 C 9.453125 1087.648438 200.859375 1353.683594 472.195312 1463.570312 C 325.667969 1371.539062 231.289062 1184.769531 247.757812 1015.347656"
        style={{
          transformBox: 'fill-box',
          transformOrigin: '50% 100%',
          animation: 'fire-tendril 1.95s ease-in-out infinite',
        }}
      />
      {/* Main flame body — anchored at its own base, 1.7s loop, 0.31s delay */}
      <path
        className="flame-path-body"
        fill={color}
        fillRule="nonzero"
        d="M 1114.523438 1099.78125 C 1110.507812 1184.628906 1053.570312 1262.246094 978.199219 1301.414062 C 902.816406 1340.574219 821.359375 1347.3125 730.078125 1321.355469 C 563.886719 1274.085938 504.304688 1146.160156 492.328125 1083.058594 C 446.648438 842.261719 553.824219 705.390625 598.703125 647.84375 C 635.003906 601.316406 717.097656 515.34375 784.429688 424.101562 C 840.679688 347.910156 862.152344 272.007812 848.683594 214.550781 C 848.703125 214.574219 848.730469 214.621094 848.730469 214.640625 C 899.5625 292.6875 908.246094 408.898438 827.875 532.722656 C 804.445312 568.808594 768.480469 615.265625 705.148438 747.402344 C 692.183594 774.441406 678.753906 816.042969 679.75 846.019531 C 680.75 875.972656 699.890625 906.582031 729 913.796875 C 757.058594 920.765625 787.148438 904.433594 803.21875 880.382812 C 819.296875 856.339844 823.621094 826.277344 823.511719 797.363281 C 848.664062 822.257812 848.835938 864.265625 833.980469 896.375 C 819.125 928.480469 792.335938 953.175781 766.898438 977.769531 C 741.488281 1002.359375 715.980469 1028.972656 705.035156 1062.59375 C 690.832031 1106.148438 704.859375 1156.695312 737.144531 1189.191406 C 752.410156 1204.570312 771.335938 1215.890625 791.816406 1222.863281 C 791.992188 1222.929688 792.144531 1222.96875 792.316406 1223.011719 C 814.992188 1230.703125 839.566406 1233.070312 863.28125 1229.835938 C 919.15625 1222.230469 969.785156 1183.675781 991.96875 1131.84375 C 1014.625 1078.972656 1008.039062 1018.34375 995.664062 962.148438 C 983.28125 905.976562 965.402344 850.0625 966.636719 792.542969 C 967.636719 745.96875 984.386719 696.785156 1018.207031 666.464844 C 977.257812 730.789062 1023.597656 821.433594 1053.613281 888.945312 C 1083.632812 956.460938 1117.996094 1025.96875 1114.523438 1099.78125 Z M 750.007812 36.34375 C 709.917969 36.34375 670.570312 39.546875 632.203125 45.679688 C 655.945312 58.859375 698.003906 86.847656 719.589844 129.070312 C 740.207031 169.414062 742.636719 217.632812 735.921875 262.121094 C 711.070312 426.710938 572.726562 542.734375 496.132812 682.996094 C 412.023438 837.074219 376.003906 1051.734375 470.433594 1209.066406 C 515.203125 1283.660156 584.675781 1339.859375 664.960938 1372.445312 C 810.863281 1431.679688 1023.835938 1398.789062 1118.523438 1262.71875 C 1167.113281 1192.929688 1195.007812 1089.789062 1155.519531 1009.523438 C 1211.925781 1093.3125 1214.1875 1234.398438 1170.003906 1325.21875 C 1154.125 1357.886719 1133.355469 1388.101562 1108.445312 1414.515625 C 1100.679688 1422.753906 1092.605469 1430.53125 1084.265625 1437.890625 C 1325.328125 1315.742188 1490.566406 1065.625 1490.566406 776.898438 C 1490.566406 367.902344 1159.007812 36.34375 750.007812 36.34375"
        style={{
          transformBox: 'fill-box',
          transformOrigin: '50% 100%',
          animation: 'fire-body 1.7s ease-in-out infinite',
          animationDelay: '0.31s',
        }}
      />
    </svg>
  )
}
