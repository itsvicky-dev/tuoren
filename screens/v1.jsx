// V1 — Calm Clinical
// Generous whitespace, low density, single-column, big primary action

// ─────────────────────────────────────────────────────────────
// V1 LOGIN
// ─────────────────────────────────────────────────────────────
function V1Login({ onNext }) {
  return (
    <div style={{ height: '100%', background: T.paper, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '60px 32px 0' }}>
        {/* Logo lockup */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 60 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: T.brand, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px oklch(0.52 0.14 245 / 0.25)',
          }}>
            <div style={{ position: 'relative', width: 22, height: 22 }}>
              <div style={{ position: 'absolute', top: 9, left: 0, right: 0, height: 4, background: 'white', borderRadius: 1 }}/>
              <div style={{ position: 'absolute', left: 9, top: 0, bottom: 0, width: 4, background: 'white', borderRadius: 1 }}/>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: FONT, fontSize: 18, fontWeight: 700, color: T.ink, letterSpacing: -0.3 }}>Tuoren</div>
            <div style={{ fontFamily: MONO, fontSize: 10, color: T.ink3, letterSpacing: 0.5, textTransform: 'uppercase' }}>Field Sales</div>
          </div>
        </div>

        <div style={{ fontFamily: FONT, fontSize: 30, fontWeight: 600, color: T.ink, letterSpacing: -0.8, lineHeight: 1.1 }}>
          Sign in to<br/>your workspace
        </div>
        <div style={{ fontFamily: FONT, fontSize: 15, color: T.ink3, marginTop: 10, lineHeight: 1.4 }}>
          Use your Tuoren Medical email address to continue.
        </div>

        <div style={{ marginTop: 40 }}>
          <div style={{ fontFamily: FONT, fontSize: 12, fontWeight: 500, color: T.ink2, textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 8 }}>Employee ID</div>
          <div style={{
            background: T.surface, border: `1px solid ${T.line}`, borderRadius: T.r3,
            padding: '14px 16px', fontFamily: FONT, fontSize: 15, color: T.ink,
          }}>TMR-2841</div>
        </div>

        <div style={{ marginTop: 20 }}>
          <div style={{ fontFamily: FONT, fontSize: 12, fontWeight: 500, color: T.ink2, textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 8 }}>Password</div>
          <div style={{
            background: T.surface, border: `1px solid ${T.line}`, borderRadius: T.r3,
            padding: '14px 16px', fontFamily: FONT, fontSize: 15, color: T.ink,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ letterSpacing: 4, color: T.ink }}>••••••••</span>
            <span style={{ flex: 1 }}/>
            <span style={{ fontFamily: FONT, fontSize: 13, color: T.brand, fontWeight: 500 }}>Show</span>
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }}/>

      <div style={{ padding: '20px 24px 40px' }}>
        <button onClick={onNext} style={{
          width: '100%', padding: '16px', borderRadius: T.r3,
          background: T.brand, color: 'white', border: 'none',
          fontFamily: FONT, fontSize: 16, fontWeight: 600, letterSpacing: -0.2,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          boxShadow: '0 6px 20px -6px oklch(0.52 0.14 245 / 0.5)',
        }}>
          Continue
          <Icon name="arrowR" size={18} color="white"/>
        </button>
        <div style={{ textAlign: 'center', marginTop: 16, fontFamily: FONT, fontSize: 13, color: T.ink3 }}>
          Trouble signing in? <span style={{ color: T.brand, fontWeight: 500 }}>Get help</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V1 HOME / DASHBOARD
// ─────────────────────────────────────────────────────────────
function V1Home({ onCheckIn, onLead }) {
  return (
    <div style={{ height: '100%', background: T.paper, overflow: 'auto', paddingBottom: 90 }}>
      {/* top greeting */}
      <div style={{ padding: '18px 22px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: FONT, fontSize: 12, color: T.ink3, letterSpacing: 0.2 }}>Tuesday, July 1</div>
            <div style={{ fontFamily: FONT, fontSize: 24, fontWeight: 600, color: T.ink, letterSpacing: -0.5, marginTop: 2 }}>
              Good morning, Rohan
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <IconBtn name="bell" badge/>
            <div style={{
              width: 38, height: 38, borderRadius: 999, background: T.brandSoft,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: FONT, fontWeight: 600, fontSize: 13, color: T.brandInk,
            }}>RK</div>
          </div>
        </div>
      </div>

      {/* Check-in card (hero) */}
      <div style={{ padding: '18px 20px 0' }}>
        <div onClick={onCheckIn} style={{
          background: `linear-gradient(135deg, ${T.brand}, oklch(0.45 0.15 255))`,
          borderRadius: T.r4, padding: '20px 22px', color: 'white',
          position: 'relative', overflow: 'hidden', cursor: 'pointer',
          boxShadow: '0 10px 32px -12px oklch(0.52 0.14 245 / 0.5)',
        }}>
          {/* soft blob */}
          <div style={{
            position: 'absolute', top: -40, right: -40, width: 160, height: 160,
            borderRadius: '50%', background: 'rgba(255,255,255,0.08)',
          }}/>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: FONT, fontSize: 12, fontWeight: 500, letterSpacing: 0.4, textTransform: 'uppercase', opacity: 0.85 }}>
            <div style={{ width: 6, height: 6, borderRadius: 999, background: 'oklch(0.85 0.14 155)' }}/>
            Not checked in
          </div>
          <div style={{ fontFamily: FONT, fontSize: 22, fontWeight: 600, marginTop: 6, letterSpacing: -0.4, lineHeight: 1.2 }}>
            Start your day at<br/>Fortis Memorial
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.15)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: FONT, fontSize: 13, opacity: 0.9 }}>
              <Icon name="pin" size={14} color="white"/> 0.4 km away
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: FONT, fontSize: 14, fontWeight: 600 }}>
              Check in <Icon name="arrowR" size={16} color="white"/>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ padding: '18px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <StatMini label="Visits today" value="0" target="/ 6"/>
        <StatMini label="Active leads" value="24" trend="+3"/>
      </div>

      {/* Today's plan */}
      <div style={{ padding: '24px 22px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 600, color: T.ink, letterSpacing: -0.2 }}>Today's plan</div>
          <div style={{ fontFamily: FONT, fontSize: 13, color: T.brand, fontWeight: 500 }}>View all</div>
        </div>

        <PlanRow
          time="10:30"
          title="Dr. Priya Sharma"
          sub="Fortis Memorial · Cardiology"
          status="upcoming"
          onClick={onLead}
        />
        <PlanRow
          time="12:15"
          title="Dr. Anand Verma"
          sub="Medanta · Interventional"
          status="upcoming"
        />
        <PlanRow
          time="14:00"
          title="Dr. Kavita Iyer"
          sub="Artemis · Vascular Surgery"
          status="upcoming"
        />
        <PlanRow
          time="16:30"
          title="Dr. Sameer Roy"
          sub="Max Saket · General Surgery"
          status="upcoming"
          last
        />
      </div>
    </div>
  );
}

function StatMini({ label, value, target, trend }) {
  return (
    <div style={{
      background: T.surface, border: `1px solid ${T.line}`,
      borderRadius: T.r3, padding: '14px 16px',
    }}>
      <div style={{ fontFamily: FONT, fontSize: 11, fontWeight: 500, color: T.ink3, letterSpacing: 0.3, textTransform: 'uppercase' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
        <div style={{ fontFamily: FONT, fontSize: 26, fontWeight: 600, color: T.ink, letterSpacing: -0.6 }}>{value}</div>
        {target && <div style={{ fontFamily: FONT, fontSize: 13, color: T.ink3 }}>{target}</div>}
        {trend && (
          <div style={{
            fontFamily: MONO, fontSize: 11, color: T.ok, fontWeight: 500,
            background: T.okSoft, padding: '2px 6px', borderRadius: 4,
          }}>{trend}</div>
        )}
      </div>
    </div>
  );
}

function PlanRow({ time, title, sub, status, last, onClick }) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: '14px 0',
      borderBottom: last ? 'none' : `1px solid ${T.line}`,
      cursor: onClick ? 'pointer' : 'default',
    }}>
      <div style={{
        fontFamily: MONO, fontSize: 12, fontWeight: 500, color: T.ink2,
        width: 42, letterSpacing: 0,
      }}>{time}</div>
      <div style={{
        width: 8, height: 8, borderRadius: 999,
        background: status === 'upcoming' ? T.brand : T.ink3, flexShrink: 0,
      }}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: FONT, fontSize: 14.5, fontWeight: 500, color: T.ink, letterSpacing: -0.2 }}>{title}</div>
        <div style={{ fontFamily: FONT, fontSize: 12.5, color: T.ink3, marginTop: 1 }}>{sub}</div>
      </div>
      <Icon name="chevronR" size={16} color={T.ink3}/>
    </div>
  );
}

function IconBtn({ name, badge }) {
  return (
    <div style={{
      width: 38, height: 38, borderRadius: 999,
      background: T.surface, border: `1px solid ${T.line}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      <Icon name={name} size={18} color={T.ink2}/>
      {badge && (
        <div style={{
          position: 'absolute', top: 8, right: 9,
          width: 7, height: 7, borderRadius: 999, background: T.warn,
          border: '1.5px solid white',
        }}/>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V1 CHECK-IN — 3 states (out of fence, in fence, success)
// ─────────────────────────────────────────────────────────────
function V1CheckIn({ state = 'in', onBack, onConfirm, onDone }) {
  // state: 'out' | 'in' | 'success'
  const mode = state === 'out' ? 'outFence' : (state === 'success' ? 'success' : 'inFence');

  return (
    <div style={{ height: '100%', background: T.paper, position: 'relative' }}>
      {/* top bar overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
        padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <button onClick={onBack} style={{
          width: 38, height: 38, borderRadius: 999,
          background: 'rgba(255,255,255,0.92)', border: `1px solid ${T.line}`,
          backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', padding: 0,
        }}>
          <Icon name="chevronL" size={18} color={T.ink}/>
        </button>
        <div style={{
          flex: 1, padding: '10px 14px', borderRadius: 999,
          background: 'rgba(255,255,255,0.92)', border: `1px solid ${T.line}`,
          backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <Icon name="search" size={16} color={T.ink3}/>
          <div style={{ fontFamily: FONT, fontSize: 13, color: T.ink3 }}>Search location</div>
        </div>
      </div>

      {/* map area */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 440 }}>
        <StylizedMap w={390} h={440} mode={mode}/>
        {/* map center pin label */}
        <div style={{
          position: 'absolute', top: 155, left: '50%', transform: 'translateX(-50%)',
          background: 'white', borderRadius: 10, padding: '5px 10px',
          fontFamily: FONT, fontSize: 11.5, fontWeight: 500, color: T.ink,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)', whiteSpace: 'nowrap',
          border: `1px solid ${T.line}`,
        }}>
          Fortis Memorial · 200m fence
        </div>
      </div>

      {/* bottom sheet */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: T.paper, borderRadius: '24px 24px 0 0',
        boxShadow: '0 -12px 40px rgba(15,30,60,0.12)',
        padding: '10px 22px 30px',
      }}>
        <div style={{
          width: 40, height: 4, borderRadius: 999, background: T.line2,
          margin: '0 auto 18px',
        }}/>

        {state === 'success' ? (
          <>
            <div style={{
              width: 56, height: 56, borderRadius: 999, background: T.okSoft,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 14px',
            }}>
              <Icon name="check" size={30} color={T.ok} strokeWidth={2.4}/>
            </div>
            <div style={{ fontFamily: FONT, fontSize: 20, fontWeight: 600, color: T.ink, textAlign: 'center', letterSpacing: -0.4 }}>
              Checked in at 9:41 AM
            </div>
            <div style={{ fontFamily: FONT, fontSize: 13.5, color: T.ink3, textAlign: 'center', marginTop: 4 }}>
              Fortis Memorial · Cardiology block
            </div>
            <button onClick={onDone} style={{
              width: '100%', padding: '15px', borderRadius: T.r3,
              background: T.ink, color: 'white', border: 'none',
              fontFamily: FONT, fontSize: 15, fontWeight: 600,
              marginTop: 20, cursor: 'pointer',
            }}>Start visit log</button>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '4px 9px', borderRadius: 999,
                background: state === 'out' ? T.warnSoft : T.okSoft,
                fontFamily: FONT, fontSize: 11, fontWeight: 600,
                color: state === 'out' ? T.warn : T.ok, letterSpacing: 0.2, textTransform: 'uppercase',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: 999, background: state === 'out' ? T.warn : T.ok }}/>
                {state === 'out' ? 'Outside fence' : 'Inside fence'}
              </div>
              <div style={{ fontFamily: MONO, fontSize: 11, color: T.ink3, marginLeft: 'auto' }}>
                ±8m accuracy
              </div>
            </div>

            <div style={{ fontFamily: FONT, fontSize: 19, fontWeight: 600, color: T.ink, letterSpacing: -0.3, marginTop: 10 }}>
              Fortis Memorial Research
            </div>
            <div style={{ fontFamily: FONT, fontSize: 13, color: T.ink3, marginTop: 2 }}>
              Sector 44, Gurgaon · 200m geofence radius
            </div>

            {/* distance meter */}
            <div style={{ marginTop: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <div style={{ fontFamily: FONT, fontSize: 12, color: T.ink3 }}>Distance to center</div>
                <div style={{ fontFamily: MONO, fontSize: 12, color: T.ink2, fontWeight: 500 }}>
                  {state === 'out' ? '340 m' : '48 m'}
                </div>
              </div>
              <div style={{ height: 6, background: T.surface2, borderRadius: 999, overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: 0, top: 0, height: '100%',
                  width: state === 'out' ? '18%' : '76%',
                  background: state === 'out' ? T.warn : T.ok,
                  borderRadius: 999,
                }}/>
                {/* fence line marker */}
                <div style={{
                  position: 'absolute', left: '65%', top: -3, bottom: -3, width: 2,
                  background: T.ink, opacity: 0.4,
                }}/>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                <div style={{ fontFamily: MONO, fontSize: 10, color: T.ink3 }}>0m</div>
                <div style={{ fontFamily: MONO, fontSize: 10, color: T.ink3, marginLeft: '58%' }}>Fence</div>
              </div>
            </div>

            <button
              onClick={state === 'out' ? undefined : onConfirm}
              disabled={state === 'out'}
              style={{
                width: '100%', padding: '16px', borderRadius: T.r3,
                background: state === 'out' ? T.surface2 : T.brand,
                color: state === 'out' ? T.ink3 : 'white',
                border: 'none',
                fontFamily: FONT, fontSize: 16, fontWeight: 600,
                marginTop: 22, cursor: state === 'out' ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                boxShadow: state === 'out' ? 'none' : '0 6px 20px -6px oklch(0.52 0.14 245 / 0.5)',
              }}
            >
              {state === 'out' ? 'Move closer to check in' : 'Check in now'}
              {state !== 'out' && <Icon name="arrowR" size={18} color="white"/>}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V1 LEADS LIST
// ─────────────────────────────────────────────────────────────
function V1Leads({ onLead }) {
  const leads = [
    { name: 'Dr. Priya Sharma', spec: 'Cardiology', hosp: 'Fortis Memorial', stage: 'Meeting', color: T.brand, initial: 'PS' },
    { name: 'Dr. Anand Verma', spec: 'Interventional', hosp: 'Medanta', stage: 'Trial', color: T.warn, initial: 'AV' },
    { name: 'Dr. Kavita Iyer', spec: 'Vascular Surgery', hosp: 'Artemis', stage: 'Meeting', color: T.brand, initial: 'KI' },
    { name: 'Dr. Sameer Roy', spec: 'General Surgery', hosp: 'Max Saket', stage: 'New', color: T.ink2, initial: 'SR' },
    { name: 'Dr. Meera Nair', spec: 'Anesthesiology', hosp: 'Paras', stage: 'Won', color: T.ok, initial: 'MN' },
    { name: 'Dr. Vikram Bose', spec: 'Neurology', hosp: 'Columbia Asia', stage: 'Trial', color: T.warn, initial: 'VB' },
  ];

  return (
    <div style={{ height: '100%', background: T.paper, overflow: 'auto', paddingBottom: 90 }}>
      {/* header */}
      <div style={{ padding: '18px 22px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: FONT, fontSize: 24, fontWeight: 600, color: T.ink, letterSpacing: -0.5 }}>Leads</div>
          <div style={{
            width: 38, height: 38, borderRadius: 999, background: T.brand,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px oklch(0.52 0.14 245 / 0.35)',
          }}>
            <Icon name="plus" size={20} color="white" strokeWidth={2.2}/>
          </div>
        </div>
        <div style={{ fontFamily: FONT, fontSize: 13, color: T.ink3, marginTop: 2 }}>
          24 active · 8 need follow-up
        </div>
      </div>

      {/* search */}
      <div style={{ padding: '4px 20px 14px' }}>
        <div style={{
          background: T.surface, border: `1px solid ${T.line}`, borderRadius: T.r3,
          padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <Icon name="search" size={16} color={T.ink3}/>
          <div style={{ fontFamily: FONT, fontSize: 14, color: T.ink3, flex: 1 }}>Search doctors, hospitals…</div>
          <Icon name="filter" size={16} color={T.ink3}/>
        </div>
      </div>

      {/* filter chips */}
      <div style={{ padding: '0 20px 6px', display: 'flex', gap: 8, overflowX: 'auto' }}>
        {['All', 'New', 'Meeting', 'Trial', 'Won'].map((c, i) => (
          <div key={c} style={{
            padding: '7px 14px', borderRadius: 999,
            background: i === 0 ? T.ink : T.surface,
            color: i === 0 ? 'white' : T.ink2,
            fontFamily: FONT, fontSize: 12.5, fontWeight: 500,
            border: i === 0 ? 'none' : `1px solid ${T.line}`,
            whiteSpace: 'nowrap',
          }}>{c}</div>
        ))}
      </div>

      {/* lead cards */}
      <div style={{ padding: '10px 20px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {leads.map((l, i) => (
          <div key={i} onClick={i === 0 ? onLead : undefined} style={{
            background: T.paper, border: `1px solid ${T.line}`, borderRadius: T.r3,
            padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12,
            cursor: i === 0 ? 'pointer' : 'default',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 999, flexShrink: 0,
              background: T.brandSoft, color: T.brandInk,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: FONT, fontSize: 14, fontWeight: 600, letterSpacing: -0.2,
            }}>{l.initial}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ fontFamily: FONT, fontSize: 14.5, fontWeight: 600, color: T.ink, letterSpacing: -0.2 }}>{l.name}</div>
              </div>
              <div style={{ fontFamily: FONT, fontSize: 12.5, color: T.ink3, marginTop: 1 }}>
                {l.spec} · {l.hosp}
              </div>
            </div>
            <div style={{
              padding: '4px 9px', borderRadius: 999,
              background: `color-mix(in oklch, ${l.color} 12%, white)`,
              color: l.color, fontFamily: FONT, fontSize: 11, fontWeight: 600,
            }}>{l.stage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V1 LEAD DETAIL
// ─────────────────────────────────────────────────────────────
function V1LeadDetail({ onBack, onLogVisit }) {
  return (
    <div style={{ height: '100%', background: T.paper, overflow: 'auto', paddingBottom: 100 }}>
      {/* back bar */}
      <div style={{ padding: '14px 18px 8px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={onBack} style={{
          width: 34, height: 34, borderRadius: 999,
          background: T.surface, border: `1px solid ${T.line}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', padding: 0,
        }}>
          <Icon name="chevronL" size={18} color={T.ink}/>
        </button>
        <div style={{ flex: 1 }}/>
        <IconBtn name="phone"/>
        <IconBtn name="more"/>
      </div>

      {/* profile */}
      <div style={{ padding: '4px 22px 20px' }}>
        <div style={{
          width: 72, height: 72, borderRadius: 999, background: T.brandSoft,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: FONT, fontSize: 22, fontWeight: 600, color: T.brandInk,
          marginBottom: 14, letterSpacing: -0.3,
        }}>PS</div>
        <div style={{ fontFamily: FONT, fontSize: 24, fontWeight: 600, color: T.ink, letterSpacing: -0.5, lineHeight: 1.2 }}>
          Dr. Priya Sharma
        </div>
        <div style={{ fontFamily: FONT, fontSize: 14, color: T.ink2, marginTop: 3 }}>
          Sr. Consultant, Cardiology
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, fontFamily: FONT, fontSize: 13, color: T.ink3 }}>
          <Icon name="hospital" size={14} color={T.ink3}/>
          Fortis Memorial Research Institute
        </div>

        {/* stage progress */}
        <div style={{ marginTop: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ fontFamily: FONT, fontSize: 12, fontWeight: 500, color: T.ink2, letterSpacing: 0.3, textTransform: 'uppercase' }}>Stage · Meeting</div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: T.ink3 }}>3 of 5</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {['New', 'Contact', 'Meeting', 'Trial', 'Won'].map((s, i) => (
              <div key={s} style={{ flex: 1 }}>
                <div style={{
                  height: 4, borderRadius: 2,
                  background: i <= 2 ? T.brand : T.line,
                }}/>
                <div style={{
                  fontFamily: FONT, fontSize: 10, marginTop: 5,
                  color: i <= 2 ? T.ink : T.ink3,
                  fontWeight: i === 2 ? 600 : 400,
                }}>{s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* quick actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 22 }}>
          <button onClick={onLogVisit} style={{
            padding: '14px', borderRadius: T.r3, border: 'none', cursor: 'pointer',
            background: T.brand, color: 'white',
            fontFamily: FONT, fontSize: 14, fontWeight: 600, letterSpacing: -0.1,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            <Icon name="note" size={16} color="white"/>
            Log visit
          </button>
          <button style={{
            padding: '14px', borderRadius: T.r3, cursor: 'pointer',
            background: T.paper, color: T.ink,
            border: `1px solid ${T.line2}`,
            fontFamily: FONT, fontSize: 14, fontWeight: 600, letterSpacing: -0.1,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            <Icon name="calendar" size={16} color={T.ink}/>
            Schedule
          </button>
        </div>
      </div>

      {/* details */}
      <div style={{ padding: '0 20px' }}>
        <SectionLabel>Contact</SectionLabel>
        <div style={{ background: T.surface, border: `1px solid ${T.line}`, borderRadius: T.r3, overflow: 'hidden' }}>
          <Row icon="phone" label="Mobile" value="+91 98110 22384"/>
          <Row icon="mail" label="Email" value="priya.sharma@fortis.in"/>
          <Row icon="pin" label="OPD" value="Block C, Level 3" last/>
        </div>

        <SectionLabel style={{ marginTop: 20 }}>Interests</SectionLabel>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {['Interventional catheters', 'Guidewires', 'Balloon dilatation', 'Vascular access'].map(t => (
            <div key={t} style={{
              padding: '6px 11px', borderRadius: 999,
              background: T.brandSoft, color: T.brandInk,
              fontFamily: FONT, fontSize: 12, fontWeight: 500,
            }}>{t}</div>
          ))}
        </div>

        <SectionLabel style={{ marginTop: 20 }}>Recent activity</SectionLabel>
        <div style={{ borderLeft: `2px solid ${T.line}`, paddingLeft: 14, marginLeft: 6 }}>
          <Activity date="Jun 24" title="Product demo — Nova PTCA" note="Positive on braided shaft. Requested trial samples."/>
          <Activity date="Jun 12" title="First meeting" note="Discussed current cath lab workflow and pain points."/>
          <Activity date="May 30" title="Introduction call" note="10-min discovery. Follow-up scheduled."/>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children, style }) {
  return (
    <div style={{
      fontFamily: FONT, fontSize: 11, fontWeight: 600, color: T.ink3,
      textTransform: 'uppercase', letterSpacing: 0.5,
      marginTop: 8, marginBottom: 10,
      ...style,
    }}>{children}</div>
  );
}

function Row({ icon, label, value, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '13px 14px',
      borderBottom: last ? 'none' : `1px solid ${T.line}`,
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 8, background: T.paper,
        border: `1px solid ${T.line}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <Icon name={icon} size={16} color={T.ink2}/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: FONT, fontSize: 11, color: T.ink3, letterSpacing: 0.2 }}>{label}</div>
        <div style={{ fontFamily: FONT, fontSize: 14, color: T.ink, marginTop: 1 }}>{value}</div>
      </div>
    </div>
  );
}

function Activity({ date, title, note }) {
  return (
    <div style={{ position: 'relative', paddingBottom: 16 }}>
      <div style={{
        position: 'absolute', left: -20, top: 4,
        width: 10, height: 10, borderRadius: 999,
        background: 'white', border: `2px solid ${T.brand}`,
      }}/>
      <div style={{ fontFamily: MONO, fontSize: 10.5, color: T.ink3, letterSpacing: 0.3, textTransform: 'uppercase' }}>{date}</div>
      <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 500, color: T.ink, marginTop: 3, letterSpacing: -0.1 }}>{title}</div>
      <div style={{ fontFamily: FONT, fontSize: 12.5, color: T.ink2, marginTop: 3, lineHeight: 1.45 }}>{note}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// V1 VISIT LOG — modal-like sheet
// ─────────────────────────────────────────────────────────────
function V1VisitLog({ onBack, onSave }) {
  return (
    <div style={{ height: '100%', background: T.paper, display: 'flex', flexDirection: 'column' }}>
      {/* header */}
      <div style={{
        padding: '14px 18px 12px',
        display: 'flex', alignItems: 'center', gap: 10,
        borderBottom: `1px solid ${T.line}`,
      }}>
        <button onClick={onBack} style={{
          width: 34, height: 34, borderRadius: 999, background: 'transparent', border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0,
        }}>
          <Icon name="x" size={20} color={T.ink}/>
        </button>
        <div style={{ flex: 1, fontFamily: FONT, fontSize: 16, fontWeight: 600, color: T.ink, letterSpacing: -0.2 }}>
          Log visit
        </div>
        <button onClick={onSave} style={{
          padding: '7px 14px', borderRadius: 999, background: T.brand, color: 'white',
          border: 'none', cursor: 'pointer',
          fontFamily: FONT, fontSize: 13, fontWeight: 600,
        }}>Save</button>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '18px 20px 30px' }}>
        {/* Context */}
        <div style={{
          background: T.brandSoft, borderRadius: T.r3, padding: '12px 14px',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 999, background: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: FONT, fontSize: 12, fontWeight: 600, color: T.brandInk,
          }}>PS</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT, fontSize: 13.5, fontWeight: 600, color: T.brandInk }}>Dr. Priya Sharma</div>
            <div style={{ fontFamily: FONT, fontSize: 11.5, color: T.brandInk, opacity: 0.75 }}>Fortis Memorial · 10:32 AM</div>
          </div>
          <Icon name="check" size={16} color={T.ok} strokeWidth={2.2}/>
        </div>

        {/* Meeting outcome */}
        <SectionLabel style={{ marginTop: 20 }}>Meeting outcome</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          {[
            { label: 'Positive', color: T.ok, active: true },
            { label: 'Neutral', color: T.ink3, active: false },
            { label: 'Blocked', color: T.warn, active: false },
          ].map(o => (
            <div key={o.label} style={{
              padding: '11px 8px', borderRadius: T.r2, textAlign: 'center',
              border: `1.5px solid ${o.active ? o.color : T.line}`,
              background: o.active ? `color-mix(in oklch, ${o.color} 8%, white)` : 'white',
              fontFamily: FONT, fontSize: 13, fontWeight: 500,
              color: o.active ? o.color : T.ink2,
            }}>{o.label}</div>
          ))}
        </div>

        {/* Notes */}
        <SectionLabel style={{ marginTop: 20 }}>Discussion notes</SectionLabel>
        <div style={{
          background: T.surface, border: `1px solid ${T.line}`, borderRadius: T.r3,
          padding: '12px 14px', minHeight: 100,
          fontFamily: FONT, fontSize: 13.5, color: T.ink, lineHeight: 1.5,
        }}>
          Reviewed our new Nova PTCA catheter with braided shaft. Dr. Sharma is impressed with the trackability. Requested 5 sample units for evaluation in next week's cases. Interested in coronary guidewire portfolio next.
        </div>

        {/* Samples given */}
        <SectionLabel style={{ marginTop: 20 }}>Samples distributed</SectionLabel>
        <div style={{ background: T.surface, border: `1px solid ${T.line}`, borderRadius: T.r3, overflow: 'hidden' }}>
          <SampleRow name="Nova PTCA 2.5mm × 20mm" qty="3"/>
          <SampleRow name="Nova PTCA 3.0mm × 15mm" qty="2" last/>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          padding: '11px', marginTop: 8, borderRadius: T.r2,
          border: `1.5px dashed ${T.line2}`,
          fontFamily: FONT, fontSize: 13, fontWeight: 500, color: T.brand,
        }}>
          <Icon name="plus" size={16} color={T.brand}/>
          Add sample
        </div>

        {/* Next action */}
        <SectionLabel style={{ marginTop: 20 }}>Next action</SectionLabel>
        <div style={{
          background: T.surface, border: `1px solid ${T.line}`, borderRadius: T.r3,
          padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <Icon name="calendar" size={18} color={T.brand}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT, fontSize: 13.5, fontWeight: 500, color: T.ink }}>Follow up in 5 days</div>
            <div style={{ fontFamily: FONT, fontSize: 12, color: T.ink3, marginTop: 1 }}>Jul 6 · Trial results review</div>
          </div>
          <Icon name="chevronR" size={16} color={T.ink3}/>
        </div>
      </div>
    </div>
  );
}

function SampleRow({ name, qty, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 14px',
      borderBottom: last ? 'none' : `1px solid ${T.line}`,
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 8, background: T.brandSoft,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <Icon name="box" size={16} color={T.brandInk}/>
      </div>
      <div style={{ flex: 1, fontFamily: FONT, fontSize: 13.5, color: T.ink }}>{name}</div>
      <div style={{
        fontFamily: MONO, fontSize: 12, color: T.ink2, fontWeight: 500,
        padding: '2px 8px', background: T.paper, borderRadius: 6, border: `1px solid ${T.line}`,
      }}>×{qty}</div>
    </div>
  );
}

Object.assign(window, { V1Login, V1Home, V1CheckIn, V1Leads, V1LeadDetail, V1VisitLog });
