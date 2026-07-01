// Lightweight phone frame — neutral (not overtly iOS or Android)
// so both platforms are implied. 390 x 760 content area.

const PHONE_W = 390;
const PHONE_H = 760;

function Phone({ children, label, dark = false, onClick, active = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div
        onClick={onClick}
        style={{
          width: PHONE_W + 20, height: PHONE_H + 20,
          borderRadius: 46, padding: 10, boxSizing: 'border-box',
          background: dark ? '#0a0a0a' : '#111',
          boxShadow: active ?
          `0 30px 60px -20px oklch(0.52 0.14 245 / 0.35), 0 0 0 3px ${T.brand}, 0 0 0 1px rgba(0,0,0,0.2)` :
          '0 24px 48px -20px rgba(15, 30, 60, 0.28), 0 4px 12px rgba(15, 30, 60, 0.08), 0 0 0 1px rgba(0,0,0,0.15)',
          position: 'relative',
          cursor: onClick ? 'pointer' : 'default',
          transition: 'box-shadow 200ms',
          fontFamily: FONT
        }}>

        <div style={{
          width: PHONE_W, height: PHONE_H,
          borderRadius: 36, overflow: 'hidden',
          position: 'relative',
          background: dark ? '#0a0a0a' : T.paper
        }}>
          {/* dynamic island / notch */}
          <div style={{
            position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)',
            width: 108, height: 30, borderRadius: 22, background: '#000', zIndex: 100
          }} />
          {/* status bar */}
          <StatusBar dark={dark} />
          {/* content area — starts under status bar */}
          <div style={{ position: 'absolute', top: 48, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
            {children}
          </div>
        </div>
      </div>
      {label &&
      <div style={{
        fontFamily: MONO, fontSize: 12, color: T.ink3,
        letterSpacing: 0.4, textTransform: 'uppercase'
      }}>{label}</div>
      }
    </div>);

}

function StatusBar({ dark }) {
  const c = dark ? '#fff' : T.ink;
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 48,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 26px', paddingTop: 12,
      fontFamily: FONT, fontSize: 14, fontWeight: 600, color: c, zIndex: 50
    }}>
      <span style={{ letterSpacing: -0.2 }}>9:41</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="16" height="10" viewBox="0 0 16 10">
          <rect x="0" y="6" width="3" height="4" rx="0.5" fill={c} />
          <rect x="4" y="4" width="3" height="6" rx="0.5" fill={c} />
          <rect x="8" y="2" width="3" height="8" rx="0.5" fill={c} />
          <rect x="12" y="0" width="3" height="10" rx="0.5" fill={c} />
        </svg>
        <svg width="22" height="11" viewBox="0 0 22 11">
          <rect x="0.5" y="0.5" width="19" height="10" rx="3" stroke={c} fill="none" opacity="0.4" />
          <rect x="2" y="2" width="16" height="7" rx="1.5" fill={c} />
          <rect x="20" y="3.5" width="1.5" height="4" rx="0.5" fill={c} opacity="0.4" />
        </svg>
      </div>
    </div>);

}

// Bottom tab bar
function TabBar({ active = 'home', dark = false, dense = false }) {
  const tabs = [
  { id: 'home', icon: 'home', label: 'Today' },
  { id: 'leads', icon: 'users', label: 'Leads' },
  { id: 'map', icon: 'map', label: 'Map' },
  { id: 'reports', icon: 'chart', label: 'Reports' },
  { id: 'me', icon: 'user', label: 'Profile' }];

  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: dark ? '#0a0a0a' : 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(20px)',
      borderTop: `1px solid ${T.line}`,
      padding: dense ? '8px 4px 22px' : '10px 6px 24px',
      display: 'flex', justifyContent: 'space-around', zIndex: 20, borderRadius: "12px"
    }}>
      {tabs.map((t) => {
        const isActive = t.id === active;
        const color = isActive ? T.brand : T.ink3;
        return (
          <div key={t.id} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            padding: '4px 8px', minWidth: 52
          }}>
            <Icon name={t.icon} size={22} color={color} strokeWidth={isActive ? 2 : 1.6} />
            <div style={{
              fontFamily: FONT, fontSize: 10.5, fontWeight: isActive ? 600 : 500,
              color, letterSpacing: 0.1
            }}>{t.label}</div>
          </div>);

      })}
    </div>);

}

// Header bar within screens
function ScreenHeader({ title, subtitle, right, back, onBack, dense = false }) {
  return (
    <div style={{
      padding: dense ? '10px 18px 12px' : '14px 20px 16px',
      display: 'flex', alignItems: 'center', gap: 12,
      borderBottom: dense ? `1px solid ${T.line}` : 'none',
      background: T.paper
    }}>
      {back &&
      <button onClick={onBack} style={{
        width: 34, height: 34, borderRadius: 999,
        background: T.surface, border: `1px solid ${T.line}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', padding: 0
      }}>
          <Icon name="chevronL" size={18} color={T.ink} />
        </button>
      }
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: FONT, fontSize: dense ? 17 : 20, fontWeight: 600,
          color: T.ink, letterSpacing: -0.3, lineHeight: 1.15
        }}>{title}</div>
        {subtitle &&
        <div style={{
          fontFamily: FONT, fontSize: 12, color: T.ink3,
          marginTop: 2, letterSpacing: -0.1
        }}>{subtitle}</div>
        }
      </div>
      {right}
    </div>);

}

Object.assign(window, { Phone, StatusBar, TabBar, ScreenHeader, PHONE_W, PHONE_H });