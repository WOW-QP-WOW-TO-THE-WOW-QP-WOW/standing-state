export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footerInner">
        <div className="fMark">Standing State Press</div>
        <div className="fCopy">© Leon Powdar · All rights reserved</div>
        <div className="fSig">Signal → Completion → Repair</div>
        <nav className="fNav" aria-label="Footer">
          <a href="/" className="fNavLink">Home</a>
          <span className="fNavSep">·</span>
          <a href="/essays" className="fNavLink">Essays</a>
          <span className="fNavSep">·</span>
          <a href="/system" className="fNavLink">System</a>
        </nav>
      </div>
    </footer>
  )
}
