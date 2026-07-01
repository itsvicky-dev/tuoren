// Tuoren design tokens — clinical blue/white
const T = {
  // brand
  brand:      'oklch(0.52 0.14 245)',   // primary blue
  brandDeep:  'oklch(0.42 0.15 250)',   // pressed
  brandSoft:  'oklch(0.94 0.03 240)',   // tinted surface
  brandInk:   'oklch(0.35 0.13 245)',   // text on soft

  // neutrals
  ink:        'oklch(0.22 0.02 250)',
  ink2:       'oklch(0.40 0.015 250)',
  ink3:       'oklch(0.58 0.012 250)',
  paper:      'oklch(0.995 0.003 240)',
  surface:    'oklch(0.975 0.006 240)',
  surface2:   'oklch(0.955 0.008 240)',
  line:       'oklch(0.905 0.01 240)',
  line2:      'oklch(0.85 0.012 240)',

  // semantic
  ok:         'oklch(0.62 0.14 155)',
  okSoft:     'oklch(0.94 0.05 155)',
  warn:       'oklch(0.68 0.16 45)',
  warnSoft:   'oklch(0.95 0.05 60)',
  danger:     'oklch(0.58 0.19 25)',

  // radii
  r1: 8, r2: 12, r3: 16, r4: 20, r5: 28,
};

// Fonts
const FONT = "'Geist', -apple-system, system-ui, sans-serif";
const MONO = "'Geist Mono', ui-monospace, monospace";

window.T = T;
window.FONT = FONT;
window.MONO = MONO;
