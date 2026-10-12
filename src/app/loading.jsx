export default function Loading() {
  return (
    <div className="container py-20" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading</span>
      <div className="sps-page-skeleton" />
    </div>
  );
}
