export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Coders Say What?
      </a>
      <ul>
        <li>
          <a href="/sign">Sign Up/Log In</a>
        </li>
        <li>
          <a href="/user">User Page</a>
        </li>
        <li>
          <a href="/homepage">Homepage</a>
        </li>
        <li>
          <a href="/help">Help</a>
        </li>
      </ul>
    </nav>
  );
}
