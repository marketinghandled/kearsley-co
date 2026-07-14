export default function LogoMark({ size = 40, light = false }) {
  return (
    <img
      src="/images/KEARSLEY & CO logo.png"
      alt="Kearsley & Co Gas Services"
      height={size}
      style={{
        height: size,
        width: 'auto',
        display: 'block',
        userSelect: 'none',
        alignSelf: 'flex-start',
        filter: light
          ? 'brightness(0) invert(0.96) sepia(0.12) saturate(0.6)'
          : 'none',
      }}
    />
  )
}
