// Minimal line icons — 24x24 default, controlled by CSS color
const Icon = ({ name, size = 20, color = 'currentColor', strokeWidth = 1.7 }) => {
  const p = { fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    // nav
    home:      <><path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9.5z" {...p}/></>,
    map:       <><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" {...p}/><path d="M9 4v14M15 6v14" {...p}/></>,
    users:     <><circle cx="9" cy="8" r="3.2" {...p}/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" {...p}/><circle cx="17" cy="7" r="2.5" {...p}/><path d="M15 14c3 0 6 2 6 5" {...p}/></>,
    chart:     <><path d="M3 3v18h18" {...p}/><path d="M7 15l4-4 3 3 5-6" {...p}/></>,
    user:      <><circle cx="12" cy="8" r="4" {...p}/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" {...p}/></>,

    // actions
    plus:      <><path d="M12 5v14M5 12h14" {...p}/></>,
    check:     <><path d="M5 12.5l4.5 4.5L19 7.5" {...p}/></>,
    x:         <><path d="M6 6l12 12M18 6L6 18" {...p}/></>,
    chevronR:  <><path d="M9 6l6 6-6 6" {...p}/></>,
    chevronL:  <><path d="M15 6l-6 6 6 6" {...p}/></>,
    chevronD:  <><path d="M6 9l6 6 6-6" {...p}/></>,
    arrowR:    <><path d="M5 12h14M13 6l6 6-6 6" {...p}/></>,
    search:    <><circle cx="11" cy="11" r="7" {...p}/><path d="M20 20l-3.5-3.5" {...p}/></>,
    filter:    <><path d="M4 5h16M7 12h10M10 19h4" {...p}/></>,
    more:      <><circle cx="5" cy="12" r="1.2" fill={color} stroke="none"/><circle cx="12" cy="12" r="1.2" fill={color} stroke="none"/><circle cx="19" cy="12" r="1.2" fill={color} stroke="none"/></>,

    // domain
    pin:       <><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" {...p}/><circle cx="12" cy="9.5" r="2.5" {...p}/></>,
    clock:     <><circle cx="12" cy="12" r="9" {...p}/><path d="M12 7v5.5l3.5 2" {...p}/></>,
    calendar:  <><rect x="3.5" y="5" width="17" height="15.5" rx="2" {...p}/><path d="M3.5 10h17M8 3v4M16 3v4" {...p}/></>,
    phone:     <><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1z" {...p}/></>,
    mail:      <><rect x="3" y="5" width="18" height="14" rx="2" {...p}/><path d="M3 7l9 6 9-6" {...p}/></>,
    bell:      <><path d="M6 16V11a6 6 0 0112 0v5l1.5 2h-15L6 16z" {...p}/><path d="M10 20a2 2 0 004 0" {...p}/></>,
    doc:       <><path d="M6 3h8l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" {...p}/><path d="M14 3v4h4M8 12h8M8 16h6" {...p}/></>,
    hospital:  <><path d="M4 21V8l8-4 8 4v13" {...p}/><path d="M12 21v-6M9 12h6M12 9v6" {...p}/><path d="M4 21h16" {...p}/></>,
    stethoscope: <><path d="M6 4v6a4 4 0 008 0V4" {...p}/><path d="M10 14v3a4 4 0 004 4h0a4 4 0 004-4v-2" {...p}/><circle cx="18" cy="13" r="2" {...p}/></>,
    box:       <><path d="M3.5 7L12 3l8.5 4v10L12 21l-8.5-4V7z" {...p}/><path d="M3.5 7L12 11l8.5-4M12 11v10" {...p}/></>,
    target:    <><circle cx="12" cy="12" r="9" {...p}/><circle cx="12" cy="12" r="5" {...p}/><circle cx="12" cy="12" r="1.5" fill={color} stroke="none"/></>,
    signal:    <><path d="M4 4a20 20 0 0116 16M4 10a14 14 0 0110 10M4 16a8 8 0 018 8" {...p}/><circle cx="4" cy="21" r="1.2" fill={color} stroke="none"/></>,
    camera:    <><path d="M3 8a2 2 0 012-2h2l1.5-2h7L17 6h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" {...p}/><circle cx="12" cy="13" r="4" {...p}/></>,
    note:      <><path d="M5 4h10l4 4v12a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" {...p}/><path d="M8 11h8M8 15h5" {...p}/></>,
    logo:      <><rect x="3" y="3" width="18" height="18" rx="5" fill={color} stroke="none"/><path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{display:'block', flexShrink: 0}}>
      {paths[name] || null}
    </svg>
  );
};
window.Icon = Icon;
