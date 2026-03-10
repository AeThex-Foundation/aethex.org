import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AeThex Foundation — Building open digital infrastructure for everyone';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAFAFA',
          backgroundImage: 'linear-gradient(to bottom right, #FAFAFA, #F5F5F5)',
        }}
      >
        {/* Red accent */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            background: 'rgba(220, 38, 38, 0.1)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#DC2626',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: 'white', fontSize: 36, fontWeight: 'bold' }}>Ae</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 48, fontWeight: 'bold', color: '#171717' }}>
              AeThex
            </span>
            <span style={{ fontSize: 36, fontWeight: 500, color: '#DC2626' }}>
              Foundation
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#525252',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Building open-source infrastructure for digital civilization
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span style={{ fontSize: 20, color: '#737373' }}>aethex.org</span>
          <span style={{ color: '#D4D4D4' }}>•</span>
          <span style={{ fontSize: 20, color: '#737373' }}>501(c)(3) Nonprofit</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
