// Stylized illustrated map — SVG. Two variants: full (large) and card (small)
const StylizedMap = ({ w = 390, h = 420, mode = 'inFence', showRoute = false, style = {}, dense = false }) => {
  // mode: inFence | outFence | success
  const centerX = w / 2;
  const centerY = h / 2 - 20;
  const fenceR = Math.min(w, h) * 0.28;
  const userX = mode === 'outFence' ? centerX + fenceR + 40 : centerX - 20;
  const userY = mode === 'outFence' ? centerY - fenceR - 10 : centerY + 15;
  const fenceColor = mode === 'outFence' ? T.warn : (mode === 'success' ? T.ok : T.brand);

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', ...style }}>
      <defs>
        <pattern id={`grid-${w}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="oklch(0.90 0.008 240)" strokeWidth="0.5"/>
        </pattern>
        <radialGradient id={`fenceGrad-${w}-${mode}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={fenceColor} stopOpacity="0.18"/>
          <stop offset="80%" stopColor={fenceColor} stopOpacity="0.06"/>
          <stop offset="100%" stopColor={fenceColor} stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* base */}
      <rect width={w} height={h} fill="oklch(0.97 0.008 235)"/>
      <rect width={w} height={h} fill={`url(#grid-${w})`}/>

      {/* parks / blocks */}
      <rect x={w*0.08} y={h*0.12} width={w*0.22} height={h*0.18} fill="oklch(0.94 0.04 150)" opacity="0.55" rx="2"/>
      <rect x={w*0.68} y={h*0.62} width={w*0.24} height={h*0.20} fill="oklch(0.94 0.04 150)" opacity="0.55" rx="2"/>
      <rect x={w*0.55} y={h*0.08} width={w*0.32} height={h*0.10} fill="oklch(0.93 0.02 240)" opacity="0.7" rx="2"/>

      {/* streets */}
      <g stroke="white" strokeWidth={dense ? 6 : 10} fill="none">
        <path d={`M 0 ${h*0.22} L ${w} ${h*0.24}`}/>
        <path d={`M 0 ${h*0.55} L ${w} ${h*0.58}`}/>
        <path d={`M 0 ${h*0.82} L ${w} ${h*0.80}`}/>
        <path d={`M ${w*0.18} 0 L ${w*0.20} ${h}`}/>
        <path d={`M ${w*0.52} 0 L ${w*0.54} ${h}`}/>
        <path d={`M ${w*0.83} 0 L ${w*0.85} ${h}`}/>
      </g>
      <g stroke="oklch(0.90 0.008 240)" strokeWidth={dense ? 3 : 4} fill="none">
        <path d={`M 0 ${h*0.35} L ${w} ${h*0.38}`}/>
        <path d={`M 0 ${h*0.70} L ${w} ${h*0.68}`}/>
        <path d={`M ${w*0.35} 0 L ${w*0.36} ${h}`}/>
        <path d={`M ${w*0.68} 0 L ${w*0.70} ${h}`}/>
      </g>

      {/* diagonal highway */}
      <path d={`M -10 ${h*0.05} L ${w+10} ${h*0.95}`} stroke="oklch(0.92 0.05 80)" strokeWidth={dense ? 8 : 12} fill="none" opacity="0.55"/>

      {/* geofence circle */}
      <circle cx={centerX} cy={centerY} r={fenceR} fill={`url(#fenceGrad-${w}-${mode})`}/>
      <circle cx={centerX} cy={centerY} r={fenceR} fill="none" stroke={fenceColor} strokeWidth="1.5" strokeDasharray="6 5" opacity="0.7"/>

      {/* office/hospital marker at center */}
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle r="18" fill="white" stroke={fenceColor} strokeWidth="2"/>
        <path d="M -7 6 L -7 -3 L 0 -8 L 7 -3 L 7 6 Z" fill="none" stroke={fenceColor} strokeWidth="1.5"/>
        <path d="M 0 -3 L 0 3 M -3 0 L 3 0" stroke={fenceColor} strokeWidth="1.5" strokeLinecap="round"/>
      </g>

      {/* other pins */}
      <MapPin x={w*0.18} y={h*0.20} color={T.ink3} small/>
      <MapPin x={w*0.82} y={h*0.30} color={T.ink3} small/>
      <MapPin x={w*0.28} y={h*0.85} color={T.ink3} small/>
      <MapPin x={w*0.70} y={h*0.15} color={T.ink3} small/>

      {/* route */}
      {showRoute && (
        <path d={`M ${userX} ${userY} Q ${(userX+centerX)/2} ${userY-30} ${centerX} ${centerY}`}
              stroke={T.brand} strokeWidth="2.5" fill="none" strokeDasharray="4 4"/>
      )}

      {/* user location dot */}
      <g transform={`translate(${userX}, ${userY})`}>
        <circle r="16" fill={T.brand} opacity="0.15"/>
        <circle r="9" fill="white"/>
        <circle r="6" fill={T.brand}/>
      </g>
    </svg>
  );
};

const MapPin = ({ x, y, color, small }) => (
  <g transform={`translate(${x}, ${y})`}>
    <circle r={small ? 4 : 6} fill="white" stroke={color} strokeWidth="1.5"/>
    <circle r={small ? 1.8 : 2.5} fill={color}/>
  </g>
);

window.StylizedMap = StylizedMap;
