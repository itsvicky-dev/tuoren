// V2 — Field Utility
// Denser, top-tab nav, status pills, swipe-to-confirm check-in with fence picker

// ─────────────────────────────────────────────────────────────
// V2 LOGIN — dark, utility feel
// ─────────────────────────────────────────────────────────────
function V2Login({ onNext }) {
  return (
    <div style={{
      height: '100%', background: '#0a0f1c', color: 'white',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* faint grid backdrop */}
      <svg style={{ position: 'absolute', top: 48, left: 0, width: 390, height: 400, opacity: 0.08 }}>
        <defs>
          <pattern id="g" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)"/>
      </svg>

      <div style={{ padding: '48px 28px 0', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: T.brand, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ position: 'relative', width: 16, height: 16 }}>
              <div style={{ position: 'absolute', top: 6, left: 0, right: 0, height: 3, background: 'white' }}/>
              <div style={{ position: 'absolute', left: 6.5, top: 0, bottom: 0, width: 3, background: 'white' }}/>
            </div>
          </div>
          <div style={{ fontFamily: FONT, fontSize: 15, fontWeight: 600, letterSpacing: -0.2 }}>Tuoren <span style={{ opacity: 0.5, fontWeight: 400 }}>/ Field</span></div>
        </div>

        {/* Status ticker */}
        <div style={{
          marginTop: 44, display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: MONO, fontSize: 11, color: 'oklch(0.85 0.14 155)',
          letterSpacing: 0.5, textTransform: 'uppercase',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: 999, background: 'oklch(0.62 0.14 155)' }}/>
          Server online · IN-South region
        </div>

        <div style={{ fontFamily: FONT, fontSize: 34, fontWeight: 600, letterSpacing: -0.8, lineHeight: 1.05, marginTop: 14 }}>
          Sign in.
        </div>
        <div style={{ fontFamily: FONT, fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 8, lineHeight: 1.45 }}>
          Enter your Tuoren credentials.<br/>Location + camera permissions required for check-in.
        </div>

        <div style={{ marginTop: 30 }}>
          <FieldDark label="Employee ID" value="TMR-2841"/>
          <FieldDark label="Password" value="••••••••••" trail="Show"/>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 20 }}>
          <div style={{
            width: 18, height: 18, borderRadius: 4, background: T.brand,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon name="check" size={12} color="white" strokeWidth={2.8}/>
          </div>
          <div style={{ fontFamily: FONT, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>
            Keep me signed in on this device
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }}/>

      <div style={{ padding: '20px 20px 36px', display: 'flex', gap: 10 }}>
        <button style={{
          flex: 1, padding: '15px', borderRadius: T.r2,
          background: 'transparent', color: 'rgba(255,255,255,0.7)',
          border: '1px solid rgba(255,255,255,0.15)',
          fontFamily: FONT, fontSize: 14, fontWeight: 500, cursor: 'pointer',
        }}>Reset</button>
        <button onClick={onNext} style={{
          flex: 2, padding: '15px', borderRadius: T.r2,
          background: T.brand, color: 'white', border: 'none',
          fontFamily: FONT, fontSize: 14, fontWeight: 600, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          Continue <Icon name="arrowR" size={16} color="white"/>
        </button>
      </div>

      <div style={{ textAlign: 'center', fontFamily: MONO, fontSize: 10, color: 'rgba(255,255,255,0.35)', paddingBottom: 8, letterSpacing: 0.4 }}>
        v3.2.1 · build 12841
      </div>
    </div>
  );
}

function FieldDark({ label, value, trail }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 14px', borderRadius: T.r2,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}>
        <div style={{ fontFamily: MONO, fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: 0.4, textTransform: 'uppercase', width: 78 }}>{label}</div>
        <div style={{ flex: 1, fontFamily: FONT, fontSize: 14, color: 'white', letterSpacing: -0.2 }}>{value}</div>
        {trail && <div style={{ fontFamily: FONT, fontSize: 12, color: T.brand, fontWeight: 500 }}>{trail}</div>}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V2 HOME
// ─────────────────────────────────────────────────────────────
function V2Home() {
  return (
    <div style={{ height: '100%', background: T.paper, overflow: 'auto', paddingBottom: 90 }}>
      {/* Top bar — compact */}
      <div style={{
        padding: '10px 16px 12px', display: 'flex', alignItems: 'center', gap: 8,
        borderBottom: `1px solid ${T.line}`,
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8, background: T.brandSoft,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: FONT, fontSize: 11.5, fontWeight: 600, color: T.brandInk,
        }}>RK</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: FONT, fontSize: 13.5, fontWeight: 600, color: T.ink, lineHeight: 1.15 }}>Rohan Kapoor</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 1 }}>
            <div style={{ width: 5, height: 5, borderRadius: 999, background: T.warn }}/>
            <div style={{ fontFamily: MONO, fontSize: 10.5, color: T.ink3, letterSpacing: 0.2 }}>NOT CHECKED IN · GURGAON-N</div>
          </div>
        </div>
        <IconBtn2 name="search"/>
        <IconBtn2 name="bell" badge/>
      </div>

      {/* Top tabs */}
      <div style={{
        display: 'flex', gap: 0, padding: '0 16px',
        borderBottom: `1px solid ${T.line}`,
      }}>
        {['Today', 'Week', 'Pending'].map((t, i) => (
          <div key={t} style={{
            padding: '11px 14px', fontFamily: FONT, fontSize: 13,
            fontWeight: i === 0 ? 600 : 500,
            color: i === 0 ? T.ink : T.ink3,
            borderBottom: i === 0 ? `2px solid ${T.brand}` : '2px solid transparent',
            marginBottom: -1,
          }}>{t}{i === 2 && <span style={{
            marginLeft: 5, padding: '1px 6px', borderRadius: 999,
            background: T.warnSoft, color: T.warn, fontSize: 10, fontFamily: MONO,
          }}>3</span>}</div>
        ))}
      </div>

      {/* KPI strip */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        borderBottom: `1px solid ${T.line}`,
      }}>
        <KPI value="0/6" label="Visits" tone="ink"/>
        <KPI value="24" label="Leads" trend="+3"/>
        <KPI value="₹4.2L" label="Pipeline"/>
        <KPI value="86%" label="Attend" tone="ok"/>
      </div>

      {/* Check-in strip (dense) */}
      <div style={{ padding: '12px 16px 0' }}>
        <div style={{
          background: T.ink, borderRadius: T.r2,
          padding: '14px 14px', color: 'white', position: 'relative', overflow: 'hidden',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: T.r2,
            background: 'oklch(0.30 0.05 245)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Icon name="pin" size={22} color={T.brand}/>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, letterSpacing: -0.2 }}>Ready to check in</div>
            <div style={{ fontFamily: FONT, fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 1 }}>
              Fortis Memorial · 0.4 km · in fence
            </div>
          </div>
          <button style={{
            padding: '9px 14px', borderRadius: 8, border: 'none', cursor: 'pointer',
            background: T.brand, color: 'white',
            fontFamily: FONT, fontSize: 13, fontWeight: 600,
          }}>Check in</button>
        </div>
      </div>

      {/* Schedule list — dense */}
      <div style={{ padding: '14px 16px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: T.ink, letterSpacing: -0.1 }}>Route · 4 visits</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <div style={{ padding: '4px 8px', borderRadius: 6, background: T.surface, border: `1px solid ${T.line}`, fontFamily: MONO, fontSize: 10.5, color: T.ink2, letterSpacing: 0.3 }}>OPTIMIZE</div>
            <div style={{ padding: '4px 8px', borderRadius: 6, background: T.surface, border: `1px solid ${T.line}`, fontFamily: MONO, fontSize: 10.5, color: T.ink2, letterSpacing: 0.3 }}>MAP</div>
          </div>
        </div>

        <div style={{ borderRadius: T.r2, overflow: 'hidden', border: `1px solid ${T.line}` }}>
          <VisitRowDense time="10:30" name="Dr. Priya Sharma" sub="Fortis · Cardiology" tag="Meeting" tagColor={T.brand} dist="0.4 km"/>
          <VisitRowDense time="12:15" name="Dr. Anand Verma" sub="Medanta · Interventional" tag="Trial" tagColor={T.warn} dist="4.1 km"/>
          <VisitRowDense time="14:00" name="Dr. Kavita Iyer" sub="Artemis · Vascular" tag="Meeting" tagColor={T.brand} dist="6.3 km"/>
          <VisitRowDense time="16:30" name="Dr. Sameer Roy" sub="Max Saket · Gen. Surg." tag="New" tagColor={T.ink3} dist="9.8 km" last/>
        </div>
      </div>

      {/* Follow-ups */}
      <div style={{ padding: '10px 16px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: T.ink }}>Overdue follow-ups</div>
          <div style={{ fontFamily: FONT, fontSize: 12, color: T.brand, fontWeight: 500 }}>3 →</div>
        </div>
        <div style={{
          background: 'color-mix(in oklch, oklch(0.68 0.16 45) 8%, white)',
          border: `1px solid color-mix(in oklch, ${T.warn} 25%, white)`,
          borderRadius: T.r2, padding: '10px 12px',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{ fontFamily: MONO, fontSize: 22, fontWeight: 600, color: T.warn, letterSpacing: -0.5 }}>3</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 500, color: T.ink }}>doctors need contact this week</div>
            <div style={{ fontFamily: FONT, fontSize: 11.5, color: T.ink3, marginTop: 1 }}>Oldest: Dr. Ravi Menon · 12 days</div>
          </div>
          <Icon name="chevronR" size={16} color={T.ink2}/>
        </div>
      </div>
    </div>
  );
}

function KPI({ value, label, trend, tone }) {
  const color = tone === 'ok' ? T.ok : tone === 'ink' ? T.ink : T.ink;
  return (
    <div style={{
      padding: '10px 12px', borderRight: `1px solid ${T.line}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <div style={{ fontFamily: FONT, fontSize: 18, fontWeight: 600, color, letterSpacing: -0.4 }}>{value}</div>
        {trend && <div style={{ fontFamily: MONO, fontSize: 10, color: T.ok, fontWeight: 500 }}>{trend}</div>}
      </div>
      <div style={{ fontFamily: MONO, fontSize: 10, color: T.ink3, letterSpacing: 0.3, textTransform: 'uppercase', marginTop: 2 }}>{label}</div>
    </div>
  );
}

function VisitRowDense({ time, name, sub, tag, tagColor, dist, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '11px 12px',
      borderBottom: last ? 'none' : `1px solid ${T.line}`,
      background: 'white',
    }}>
      <div style={{
        width: 40, textAlign: 'center', flexShrink: 0,
        padding: '6px 0', background: T.surface, borderRadius: 6,
        border: `1px solid ${T.line}`,
      }}>
        <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 600, color: T.ink, letterSpacing: -0.2 }}>{time}</div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: T.ink, letterSpacing: -0.1 }}>{name}</div>
        <div style={{ fontFamily: FONT, fontSize: 11.5, color: T.ink3, marginTop: 1 }}>{sub}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
        <div style={{
          padding: '2px 7px', borderRadius: 4,
          background: `color-mix(in oklch, ${tagColor} 12%, white)`,
          color: tagColor, fontFamily: MONO, fontSize: 10, fontWeight: 600, letterSpacing: 0.2, textTransform: 'uppercase',
        }}>{tag}</div>
        <div style={{ fontFamily: MONO, fontSize: 10.5, color: T.ink3 }}>{dist}</div>
      </div>
    </div>
  );
}

function IconBtn2({ name, badge }) {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: 8,
      background: T.surface, border: `1px solid ${T.line}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      <Icon name={name} size={16} color={T.ink2}/>
      {badge && (
        <div style={{
          position: 'absolute', top: 5, right: 6,
          width: 6, height: 6, borderRadius: 999, background: T.warn,
          border: '1.5px solid white',
        }}/>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V2 CHECK-IN — compact map + fence picker + swipe-to-confirm
// ─────────────────────────────────────────────────────────────
function V2CheckIn({ state = 'in', onBack }) {
  const mode = state === 'out' ? 'outFence' : (state === 'success' ? 'success' : 'inFence');

  const fences = [
    { name: 'Fortis Memorial Research', addr: 'Sector 44, Gurgaon', dist: '48 m', in: true, primary: true },
    { name: 'Medanta – The Medicity', addr: 'Sector 38, Gurgaon', dist: '4.1 km', in: false },
    { name: 'Artemis Hospitals', addr: 'Sector 51, Gurgaon', dist: '6.3 km', in: false },
  ];

  return (
    <div style={{ height: '100%', background: T.paper, display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{
        padding: '10px 14px 10px', display: 'flex', alignItems: 'center', gap: 10,
        borderBottom: `1px solid ${T.line}`,
      }}>
        <button onClick={onBack} style={{
          width: 30, height: 30, borderRadius: 8,
          background: T.surface, border: `1px solid ${T.line}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0,
        }}>
          <Icon name="chevronL" size={16} color={T.ink}/>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: FONT, fontSize: 15, fontWeight: 600, color: T.ink, letterSpacing: -0.2 }}>Attendance check-in</div>
          <div style={{ fontFamily: MONO, fontSize: 10.5, color: T.ink3, marginTop: 1, letterSpacing: 0.2 }}>
            9:41 AM · GPS ±8m · {state === 'out' ? 'OUT OF FENCE' : 'IN FENCE'}
          </div>
        </div>
        <div style={{
          padding: '4px 8px', borderRadius: 6,
          background: state === 'out' ? T.warnSoft : T.okSoft,
          fontFamily: MONO, fontSize: 10, fontWeight: 600, letterSpacing: 0.3, textTransform: 'uppercase',
          color: state === 'out' ? T.warn : T.ok,
          display: 'flex', alignItems: 'center', gap: 5,
        }}>
          <div style={{ width: 5, height: 5, borderRadius: 999, background: state === 'out' ? T.warn : T.ok }}/>
          {state === 'success' ? 'DONE' : (state === 'out' ? 'OUT' : 'IN')}
        </div>
      </div>

      {/* Compact map card */}
      <div style={{ padding: '12px 14px 0' }}>
        <div style={{
          borderRadius: T.r2, overflow: 'hidden',
          border: `1px solid ${T.line}`, position: 'relative',
        }}>
          <StylizedMap w={362} h={200} mode={mode} dense/>
          {/* overlay chips */}
          <div style={{ position: 'absolute', top: 8, left: 8, display: 'flex', gap: 6 }}>
            <MapChip>200m radius</MapChip>
            <MapChip>±8m acc</MapChip>
          </div>
          <div style={{
            position: 'absolute', bottom: 8, right: 8,
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            <MapBtn><Icon name="plus" size={14} color={T.ink}/></MapBtn>
            <MapBtn><Icon name="target" size={14} color={T.brand}/></MapBtn>
          </div>
        </div>
      </div>

      {/* Fence picker */}
      <div style={{ padding: '14px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600, color: T.ink3, letterSpacing: 0.3, textTransform: 'uppercase' }}>
            Nearby geofences · 3
          </div>
          <div style={{ fontFamily: MONO, fontSize: 10.5, color: T.ink3 }}>SORT: DISTANCE</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {fences.map((f, i) => (
            <FenceRow key={i} fence={f} selected={f.primary}/>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }}/>

      {/* Bottom action */}
      {state === 'success' ? (
        <div style={{ padding: '10px 14px 20px', borderTop: `1px solid ${T.line}` }}>
          <div style={{
            background: T.okSoft, borderRadius: T.r2, padding: '14px 14px',
            display: 'flex', alignItems: 'center', gap: 12,
            border: `1px solid color-mix(in oklch, ${T.ok} 25%, white)`,
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 999, background: T.ok,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Icon name="check" size={22} color="white" strokeWidth={2.6}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, color: T.ink, letterSpacing: -0.1 }}>Checked in at 9:41 AM</div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: T.ink2, marginTop: 2, letterSpacing: 0.2 }}>
                REF #ATT-041278 · FORTIS MEMORIAL
              </div>
            </div>
          </div>
          <button style={{
            marginTop: 10, width: '100%', padding: '13px', borderRadius: T.r2,
            background: T.ink, color: 'white', border: 'none', cursor: 'pointer',
            fontFamily: FONT, fontSize: 14, fontWeight: 600,
          }}>Continue to today's route</button>
        </div>
      ) : (
        <div style={{ padding: '12px 14px 20px', borderTop: `1px solid ${T.line}`, background: 'white' }}>
          <SwipeToConfirm disabled={state === 'out'}/>
          <div style={{
            fontFamily: MONO, fontSize: 10, color: T.ink3, textAlign: 'center',
            marginTop: 10, letterSpacing: 0.3,
          }}>
            {state === 'out'
              ? 'MOVE WITHIN 200M OF A FENCE TO ENABLE'
              : 'A LIVE PHOTO WILL BE CAPTURED ON CONFIRM'}
          </div>
        </div>
      )}
    </div>
  );
}

function MapChip({ children }) {
  return (
    <div style={{
      padding: '4px 8px', borderRadius: 6,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(6px)',
      fontFamily: MONO, fontSize: 10, fontWeight: 500, color: T.ink2,
      letterSpacing: 0.2, border: `1px solid ${T.line}`,
    }}>{children}</div>
  );
}

function MapBtn({ children }) {
  return (
    <div style={{
      width: 30, height: 30, borderRadius: 6,
      background: 'white', border: `1px solid ${T.line}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
    }}>{children}</div>
  );
}

function FenceRow({ fence, selected }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '10px 12px', borderRadius: T.r2,
      background: selected ? T.brandSoft : T.surface,
      border: selected ? `1.5px solid ${T.brand}` : `1px solid ${T.line}`,
    }}>
      <div style={{
        width: 8, height: 8, borderRadius: 999,
        background: fence.in ? T.ok : T.line2,
        flexShrink: 0,
      }}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: T.ink, letterSpacing: -0.1 }}>{fence.name}</div>
        <div style={{ fontFamily: FONT, fontSize: 11.5, color: T.ink3, marginTop: 1 }}>{fence.addr}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 600, color: fence.in ? T.ok : T.ink3, letterSpacing: -0.2 }}>{fence.dist}</div>
        <div style={{ fontFamily: MONO, fontSize: 9.5, color: fence.in ? T.ok : T.ink3, marginTop: 1, letterSpacing: 0.3, textTransform: 'uppercase' }}>
          {fence.in ? 'IN' : 'OUT'}
        </div>
      </div>
    </div>
  );
}

function SwipeToConfirm({ disabled }) {
  return (
    <div style={{
      height: 56, borderRadius: 28,
      background: disabled ? T.surface2 : T.ink,
      position: 'relative', display: 'flex', alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* progress hint gradient */}
      {!disabled && (
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 28,
          background: `linear-gradient(90deg, ${T.brand} 0%, ${T.ink} 50%)`,
          opacity: 0.6,
        }}/>
      )}
      {/* label */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: FONT, fontSize: 14, fontWeight: 600,
        color: disabled ? T.ink3 : 'rgba(255,255,255,0.9)',
        letterSpacing: 0.4, textTransform: 'uppercase',
      }}>
        {disabled ? 'Move closer to check in' : 'Swipe to check in'}
      </div>
      {/* handle */}
      <div style={{
        position: 'absolute', left: 4, top: 4, bottom: 4,
        width: 48, borderRadius: 24,
        background: disabled ? T.line : 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
      }}>
        <Icon name="arrowR" size={18} color={disabled ? T.ink3 : T.ink} strokeWidth={2.2}/>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V2 LEADS — pipeline / table-ish
// ─────────────────────────────────────────────────────────────
function V2Leads() {
  const leads = [
    { name: 'Dr. Priya Sharma', spec: 'Cardiology · Fortis', stage: 'MEETING', color: T.brand, score: 'A', value: '₹85k' },
    { name: 'Dr. Anand Verma', spec: 'Interventional · Medanta', stage: 'TRIAL', color: T.warn, score: 'A', value: '₹1.2L' },
    { name: 'Dr. Kavita Iyer', spec: 'Vascular · Artemis', stage: 'MEETING', color: T.brand, score: 'B', value: '₹40k' },
    { name: 'Dr. Sameer Roy', spec: 'General Surg · Max', stage: 'NEW', color: T.ink3, score: 'B', value: '—' },
    { name: 'Dr. Meera Nair', spec: 'Anesthesia · Paras', stage: 'WON', color: T.ok, score: 'A', value: '₹95k' },
    { name: 'Dr. Vikram Bose', spec: 'Neuro · Columbia', stage: 'TRIAL', color: T.warn, score: 'B', value: '₹60k' },
    { name: 'Dr. Ravi Menon', spec: 'Ortho · Manipal', stage: 'CONTACT', color: T.ink2, score: 'C', value: '—' },
  ];
  return (
    <div style={{ height: '100%', background: T.paper, overflow: 'auto', paddingBottom: 90 }}>
      {/* Header */}
      <div style={{
        padding: '10px 14px 10px', display: 'flex', alignItems: 'center', gap: 10,
        borderBottom: `1px solid ${T.line}`,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: FONT, fontSize: 15, fontWeight: 600, color: T.ink, letterSpacing: -0.2 }}>Leads · 24</div>
          <div style={{ fontFamily: MONO, fontSize: 10.5, color: T.ink3, marginTop: 1, letterSpacing: 0.2 }}>
            PIPELINE ₹4.2L · WON MTD ₹95K
          </div>
        </div>
        <IconBtn2 name="filter"/>
        <div style={{
          padding: '7px 12px', borderRadius: 8,
          background: T.brand, color: 'white',
          fontFamily: FONT, fontSize: 12.5, fontWeight: 600,
          display: 'flex', alignItems: 'center', gap: 5,
        }}>
          <Icon name="plus" size={14} color="white" strokeWidth={2.4}/>
          Add
        </div>
      </div>

      {/* Stage tabs */}
      <div style={{
        display: 'flex', gap: 0, padding: '0 4px',
        borderBottom: `1px solid ${T.line}`,
        overflowX: 'auto',
      }}>
        {[
          { l: 'All', c: 24, active: true },
          { l: 'New', c: 4 },
          { l: 'Contact', c: 5 },
          { l: 'Meeting', c: 8 },
          { l: 'Trial', c: 5 },
          { l: 'Won', c: 2 },
        ].map((t, i) => (
          <div key={t.l} style={{
            padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap',
            fontFamily: FONT, fontSize: 12.5, fontWeight: t.active ? 600 : 500,
            color: t.active ? T.ink : T.ink3,
            borderBottom: t.active ? `2px solid ${T.brand}` : '2px solid transparent',
            marginBottom: -1,
          }}>
            {t.l}
            <span style={{
              padding: '1px 5px', borderRadius: 4,
              background: t.active ? T.brand : T.surface2,
              color: t.active ? 'white' : T.ink3,
              fontFamily: MONO, fontSize: 9.5, fontWeight: 600,
            }}>{t.c}</span>
          </div>
        ))}
      </div>

      {/* Search */}
      <div style={{ padding: '10px 14px 6px' }}>
        <div style={{
          background: T.surface, border: `1px solid ${T.line}`, borderRadius: 8,
          padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <Icon name="search" size={14} color={T.ink3}/>
          <div style={{ fontFamily: FONT, fontSize: 13, color: T.ink3, flex: 1 }}>Search 24 leads…</div>
          <div style={{
            padding: '2px 7px', borderRadius: 4, background: 'white',
            fontFamily: MONO, fontSize: 10, color: T.ink3, border: `1px solid ${T.line}`,
          }}>⌘K</div>
        </div>
      </div>

      {/* Column headers */}
      <div style={{
        display: 'flex', padding: '10px 14px 6px',
        fontFamily: MONO, fontSize: 10, color: T.ink3, letterSpacing: 0.3, textTransform: 'uppercase',
      }}>
        <div style={{ flex: 1 }}>Doctor / Hospital</div>
        <div style={{ width: 70, textAlign: 'right' }}>Stage</div>
        <div style={{ width: 56, textAlign: 'right' }}>Value</div>
      </div>

      {/* Table rows */}
      <div style={{ borderTop: `1px solid ${T.line}` }}>
        {leads.map((l, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 14px',
            borderBottom: `1px solid ${T.line}`,
            background: 'white',
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: 6, background: T.surface2,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              fontFamily: MONO, fontSize: 10.5, fontWeight: 600, color: T.ink2,
            }}>{l.score}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: T.ink, letterSpacing: -0.1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{l.name}</div>
              <div style={{ fontFamily: FONT, fontSize: 11.5, color: T.ink3, marginTop: 1 }}>{l.spec}</div>
            </div>
            <div style={{ width: 70, textAlign: 'right' }}>
              <div style={{
                display: 'inline-block',
                padding: '2px 6px', borderRadius: 4,
                background: `color-mix(in oklch, ${l.color} 12%, white)`,
                color: l.color, fontFamily: MONO, fontSize: 9.5, fontWeight: 600, letterSpacing: 0.3,
              }}>{l.stage}</div>
            </div>
            <div style={{ width: 56, textAlign: 'right', fontFamily: MONO, fontSize: 11.5, fontWeight: 500, color: l.value === '—' ? T.ink3 : T.ink }}>{l.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V2 LEAD DETAIL — denser, tabbed
// ─────────────────────────────────────────────────────────────
function V2LeadDetail({ onBack }) {
  return (
    <div style={{ height: '100%', background: T.paper, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Compact header */}
      <div style={{
        padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10,
        borderBottom: `1px solid ${T.line}`,
      }}>
        <button onClick={onBack} style={{
          width: 30, height: 30, borderRadius: 8,
          background: T.surface, border: `1px solid ${T.line}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0,
        }}>
          <Icon name="chevronL" size={16} color={T.ink}/>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, color: T.ink, letterSpacing: -0.2 }}>Dr. Priya Sharma</div>
          <div style={{ fontFamily: MONO, fontSize: 10.5, color: T.ink3, marginTop: 1, letterSpacing: 0.2 }}>ID DR-2841 · SCORE A</div>
        </div>
        <IconBtn2 name="phone"/>
        <IconBtn2 name="more"/>
      </div>

      {/* Summary strip */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        borderBottom: `1px solid ${T.line}`,
      }}>
        <KPI value="MEETING" label="Stage" tone="ink"/>
        <KPI value="₹85k" label="Deal value"/>
        <KPI value="6d" label="Last contact"/>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex', padding: '0 4px',
        borderBottom: `1px solid ${T.line}`, background: 'white',
      }}>
        {['Overview', 'Activity', 'Samples', 'Files'].map((t, i) => (
          <div key={t} style={{
            padding: '10px 12px',
            fontFamily: FONT, fontSize: 12.5, fontWeight: i === 0 ? 600 : 500,
            color: i === 0 ? T.ink : T.ink3,
            borderBottom: i === 0 ? `2px solid ${T.brand}` : '2px solid transparent',
            marginBottom: -1,
          }}>{t}</div>
        ))}
      </div>

      {/* Body */}
      <div style={{ flex: 1, overflow: 'auto', padding: '12px 14px 20px' }}>
        {/* Meta rows */}
        <div style={{ borderRadius: T.r2, border: `1px solid ${T.line}`, overflow: 'hidden' }}>
          <MetaRow label="HOSPITAL" value="Fortis Memorial Research"/>
          <MetaRow label="SPECIALTY" value="Cardiology · Interventional"/>
          <MetaRow label="OPD BLOCK" value="Block C · Level 3"/>
          <MetaRow label="DAYS/WEEK" value="Mon–Sat · 9:30–14:00"/>
          <MetaRow label="MOBILE" value="+91 98110 22384" copy last/>
        </div>

        {/* Interests */}
        <div style={{ marginTop: 16 }}>
          <div style={{ fontFamily: MONO, fontSize: 10, color: T.ink3, letterSpacing: 0.4, textTransform: 'uppercase', marginBottom: 8 }}>Product interest</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {[
              { l: 'Interventional catheters', h: true },
              { l: 'Guidewires', h: true },
              { l: 'Balloon dilatation', h: false },
              { l: 'Vascular access', h: false },
              { l: '+ Add', a: true },
            ].map((t, i) => (
              <div key={i} style={{
                padding: '4px 9px', borderRadius: 4,
                background: t.a ? 'transparent' : (t.h ? T.brand : T.surface),
                color: t.a ? T.ink3 : (t.h ? 'white' : T.ink2),
                border: t.a ? `1px dashed ${T.line2}` : (t.h ? 'none' : `1px solid ${T.line}`),
                fontFamily: MONO, fontSize: 10.5, fontWeight: 600, letterSpacing: 0.2,
              }}>{t.l}</div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ marginTop: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ fontFamily: MONO, fontSize: 10, color: T.ink3, letterSpacing: 0.4, textTransform: 'uppercase' }}>Last 3 activities</div>
            <div style={{ fontFamily: FONT, fontSize: 12, color: T.brand, fontWeight: 500 }}>See all →</div>
          </div>
          <div style={{ borderRadius: T.r2, border: `1px solid ${T.line}`, overflow: 'hidden' }}>
            <TimelineRow date="24 JUN" type="VISIT" title="Nova PTCA product demo" outcome="positive"/>
            <TimelineRow date="12 JUN" type="MEET" title="First meeting · cath lab tour" outcome="positive"/>
            <TimelineRow date="30 MAY" type="CALL" title="Introduction call · 10 min" outcome="neutral" last/>
          </div>
        </div>
      </div>

      {/* Sticky bottom action */}
      <div style={{
        padding: '10px 14px', display: 'flex', gap: 8,
        borderTop: `1px solid ${T.line}`, background: 'white',
      }}>
        <button style={{
          padding: '11px', flex: 1, borderRadius: 8,
          background: T.surface, border: `1px solid ${T.line}`, color: T.ink,
          fontFamily: FONT, fontSize: 13, fontWeight: 600, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          <Icon name="calendar" size={14} color={T.ink}/> Schedule
        </button>
        <button style={{
          padding: '11px', flex: 1.4, borderRadius: 8,
          background: T.brand, border: 'none', color: 'white',
          fontFamily: FONT, fontSize: 13, fontWeight: 600, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          <Icon name="note" size={14} color="white"/> Log visit
        </button>
      </div>
    </div>
  );
}

function MetaRow({ label, value, copy, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '9px 12px',
      borderBottom: last ? 'none' : `1px solid ${T.line}`,
      background: 'white',
    }}>
      <div style={{ fontFamily: MONO, fontSize: 10, color: T.ink3, letterSpacing: 0.3, width: 82, flexShrink: 0 }}>{label}</div>
      <div style={{ flex: 1, fontFamily: FONT, fontSize: 13, color: T.ink, letterSpacing: -0.1 }}>{value}</div>
      {copy && (
        <div style={{
          padding: '3px 7px', borderRadius: 4,
          fontFamily: MONO, fontSize: 10, color: T.ink3, border: `1px solid ${T.line}`,
        }}>COPY</div>
      )}
    </div>
  );
}

function TimelineRow({ date, type, title, outcome, last }) {
  const oc = outcome === 'positive' ? T.ok : outcome === 'blocked' ? T.warn : T.ink3;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '10px 12px',
      borderBottom: last ? 'none' : `1px solid ${T.line}`,
      background: 'white',
    }}>
      <div style={{ width: 42, textAlign: 'center' }}>
        <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 600, color: T.ink, letterSpacing: 0.2 }}>{date}</div>
        <div style={{
          fontFamily: MONO, fontSize: 8.5, color: T.brand, fontWeight: 600,
          marginTop: 2, letterSpacing: 0.4,
        }}>{type}</div>
      </div>
      <div style={{ width: 1, height: 30, background: T.line }}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: FONT, fontSize: 12.5, fontWeight: 500, color: T.ink, letterSpacing: -0.1 }}>{title}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 3 }}>
          <div style={{ width: 5, height: 5, borderRadius: 999, background: oc }}/>
          <div style={{ fontFamily: MONO, fontSize: 9.5, color: oc, fontWeight: 600, letterSpacing: 0.3, textTransform: 'uppercase' }}>{outcome}</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V2 VISIT LOG — dense form
// ─────────────────────────────────────────────────────────────
function V2VisitLog({ onBack }) {
  return (
    <div style={{ height: '100%', background: T.paper, display: 'flex', flexDirection: 'column' }}>
      <div style={{
        padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10,
        borderBottom: `1px solid ${T.line}`,
      }}>
        <button onClick={onBack} style={{
          width: 30, height: 30, borderRadius: 8,
          background: T.surface, border: `1px solid ${T.line}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0,
        }}>
          <Icon name="x" size={16} color={T.ink}/>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, color: T.ink, letterSpacing: -0.2 }}>Log visit</div>
          <div style={{ fontFamily: MONO, fontSize: 10.5, color: T.ink3, marginTop: 1, letterSpacing: 0.2 }}>DR PRIYA SHARMA · 10:32 IST</div>
        </div>
        <div style={{
          padding: '6px 12px', borderRadius: 6,
          background: T.brand, color: 'white',
          fontFamily: FONT, fontSize: 12.5, fontWeight: 600,
        }}>Save</div>
      </div>

      {/* Progress rail */}
      <div style={{
        display: 'flex', padding: '10px 14px', gap: 6,
        borderBottom: `1px solid ${T.line}`, background: T.surface,
      }}>
        {['Outcome', 'Notes', 'Samples', 'Next'].map((s, i) => (
          <div key={s} style={{ flex: 1 }}>
            <div style={{
              height: 3, borderRadius: 2,
              background: i <= 1 ? T.brand : T.line2,
            }}/>
            <div style={{
              fontFamily: MONO, fontSize: 9.5, color: i <= 1 ? T.ink : T.ink3,
              fontWeight: i === 1 ? 600 : 500,
              marginTop: 5, letterSpacing: 0.3, textTransform: 'uppercase',
            }}>{i+1}. {s}</div>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '12px 14px 20px' }}>
        {/* Outcome */}
        <FormLabel>Outcome</FormLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 4, marginBottom: 14 }}>
          {[
            { l: 'Positive', c: T.ok, active: true },
            { l: 'Neutral', c: T.ink3 },
            { l: 'Blocked', c: T.warn },
            { l: 'Trial', c: T.brand },
            { l: 'Won', c: T.ok },
          ].map(o => (
            <div key={o.l} style={{
              padding: '8px 2px', textAlign: 'center', borderRadius: 6,
              background: o.active ? o.c : 'white',
              border: o.active ? 'none' : `1px solid ${T.line}`,
              color: o.active ? 'white' : T.ink2,
              fontFamily: FONT, fontSize: 11.5, fontWeight: 600, letterSpacing: -0.1,
            }}>{o.l}</div>
          ))}
        </div>

        {/* Notes */}
        <FormLabel>Notes · voice or text</FormLabel>
        <div style={{
          background: 'white', border: `1px solid ${T.line}`, borderRadius: 8,
          padding: '10px 12px', minHeight: 82,
          fontFamily: FONT, fontSize: 13, color: T.ink, lineHeight: 1.5, marginBottom: 3,
        }}>
          Reviewed Nova PTCA. Impressed with braided shaft trackability. Requested 5 samples for next week's cases.
        </div>
        <div style={{ display: 'flex', gap: 6, marginBottom: 14, marginTop: 6 }}>
          <MiniAction icon="camera" label="Photo"/>
          <MiniAction icon="signal" label="Voice"/>
          <MiniAction icon="doc" label="Template"/>
        </div>

        {/* Samples */}
        <FormLabel>Samples · 5 units</FormLabel>
        <div style={{ borderRadius: 8, border: `1px solid ${T.line}`, overflow: 'hidden', marginBottom: 8 }}>
          <SampleRowDense sku="NPTCA-2520" name="Nova PTCA 2.5×20" qty={3}/>
          <SampleRowDense sku="NPTCA-3015" name="Nova PTCA 3.0×15" qty={2} last/>
        </div>
        <div style={{
          padding: '8px', textAlign: 'center', borderRadius: 6,
          border: `1px dashed ${T.line2}`,
          fontFamily: FONT, fontSize: 12.5, color: T.brand, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          <Icon name="plus" size={14} color={T.brand}/> Add SKU
        </div>

        {/* Next */}
        <FormLabel style={{ marginTop: 14 }}>Next action</FormLabel>
        <div style={{
          padding: '10px 12px', borderRadius: 8, background: 'white',
          border: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 6, background: T.brandSoft,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Icon name="calendar" size={16} color={T.brandInk}/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: T.ink, letterSpacing: -0.1 }}>Follow up · Jul 6</div>
            <div style={{ fontFamily: MONO, fontSize: 10.5, color: T.ink3, marginTop: 1, letterSpacing: 0.2 }}>TRIAL RESULTS REVIEW · IN 5D</div>
          </div>
          <Icon name="chevronR" size={14} color={T.ink3}/>
        </div>
      </div>
    </div>
  );
}

function FormLabel({ children, style }) {
  return (
    <div style={{
      fontFamily: MONO, fontSize: 10, color: T.ink3, fontWeight: 600,
      letterSpacing: 0.4, textTransform: 'uppercase',
      marginBottom: 6, ...style,
    }}>{children}</div>
  );
}

function MiniAction({ icon, label }) {
  return (
    <div style={{
      padding: '6px 10px', borderRadius: 6,
      background: T.surface, border: `1px solid ${T.line}`,
      display: 'flex', alignItems: 'center', gap: 5,
      fontFamily: FONT, fontSize: 11.5, fontWeight: 500, color: T.ink2,
    }}>
      <Icon name={icon} size={13} color={T.ink2}/>
      {label}
    </div>
  );
}

function SampleRowDense({ sku, name, qty, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '9px 12px',
      borderBottom: last ? 'none' : `1px solid ${T.line}`,
      background: 'white',
    }}>
      <div style={{ fontFamily: MONO, fontSize: 10, color: T.ink3, width: 76, letterSpacing: 0.2 }}>{sku}</div>
      <div style={{ flex: 1, fontFamily: FONT, fontSize: 12.5, color: T.ink, letterSpacing: -0.1 }}>{name}</div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 4,
        border: `1px solid ${T.line}`, borderRadius: 6, padding: '2px',
      }}>
        <div style={{ width: 20, height: 20, textAlign: 'center', fontFamily: MONO, color: T.ink3, fontSize: 14, lineHeight: '20px' }}>−</div>
        <div style={{ width: 20, textAlign: 'center', fontFamily: MONO, fontSize: 12, fontWeight: 600, color: T.ink }}>{qty}</div>
        <div style={{ width: 20, height: 20, textAlign: 'center', fontFamily: MONO, color: T.ink3, fontSize: 14, lineHeight: '20px' }}>+</div>
      </div>
    </div>
  );
}

Object.assign(window, { V2Login, V2Home, V2CheckIn, V2Leads, V2LeadDetail, V2VisitLog });
