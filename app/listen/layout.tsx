// Layout override for /listen/* routes.
//
// The root layout typically wraps pages with site navigation,
// header chrome, and footer. Reader Mode must NOT include any of
// that — this layout provides a minimal shell so the canonical
// essay body is the only structurally significant content.
//
// If the root layout renders <html>/<body> (as Next.js app-router
// root layouts normally do), this layout should remain a plain
// passthrough wrapper and the exclusion of nav/footer should happen
// by NOT importing/rendering them here. Adjust if the root layout
// structure differs.

export default function ListenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div data-reader-mode="true">{children}</div>;
}
