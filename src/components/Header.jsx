function Header({ title, subtitle }) {
  return (
    <header>
      <div style={{ padding: "24px" }}></div>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}

export default Header;
