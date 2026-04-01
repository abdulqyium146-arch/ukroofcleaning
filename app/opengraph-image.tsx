import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Local Roof Cleaning UK — Professional Roof Cleaning in North West England'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080809',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 600,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,98,42,0.12) 0%, transparent 70%)',
          }}
        />
        {/* Border */}
        <div
          style={{
            position: 'absolute',
            inset: 30,
            border: '2px solid rgba(232,98,42,0.35)',
            borderRadius: 16,
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(196,151,62,0.12)',
            border: '1px solid rgba(196,151,62,0.3)',
            borderRadius: 999,
            padding: '6px 18px',
            marginBottom: 32,
            width: 'fit-content',
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#C4973E' }} />
          <span style={{ color: '#C4973E', fontSize: 14, letterSpacing: 3 }}>
            12 YEARS · NORTH WEST ENGLAND
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 28 }}>
          <span
            style={{
              fontSize: 76,
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 0.95,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            LOCAL ROOF
          </span>
          <span
            style={{
              fontSize: 76,
              fontWeight: 900,
              color: '#E8622A',
              lineHeight: 0.95,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            CLEANING UK
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#888888',
            fontSize: 22,
            letterSpacing: 1,
            marginBottom: 40,
          }}
        >
          Professional Roof Cleaning · North West England
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#222222', marginBottom: 28 }} />

        {/* Stats */}
        <div style={{ display: 'flex', gap: 48 }}>
          {[
            { value: '12 YRS', label: 'Experience' },
            { value: '500+', label: 'Roofs Cleaned' },
            { value: '8 TOWNS', label: 'Covered' },
            { value: '5★', label: 'Rated Service' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ color: '#C4973E', fontSize: 22, fontWeight: 700 }}>{stat.value}</span>
              <span style={{ color: '#555555', fontSize: 14 }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 54,
            right: 70,
            color: '#444444',
            fontSize: 16,
          }}
        >
          localroofcleaning.uk
        </div>
      </div>
    ),
    { ...size },
  )
}
