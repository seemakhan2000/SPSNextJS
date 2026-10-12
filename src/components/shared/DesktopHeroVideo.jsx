export default function DesktopHeroVideo({ src, eager = false }) {
  return (
    <video
      className="hidden lg:block w-full h-full object-cover"
      muted
      loop
      playsInline
      preload="none"
    >
      {eager ? (
        <source src={src} type="video/webm" />
      ) : (
        <source data-src={src} type="video/webm" />
      )}
    </video>
  );
}
