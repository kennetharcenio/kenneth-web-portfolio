export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="logo">
        kenneth<span>.</span>dev
      </div>
      <ul>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
      <a href="#contact" className="btn-nav">
        Hire me
      </a>
    </nav>
  );
}
