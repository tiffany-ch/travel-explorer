function Header({ title, subtitle, favouriteCount }) {
  return (
    <header>
      <div style={{ padding: "24px" }}></div>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      <p>{favouriteCount}</p>
    </header>
  );
}

export default Header;
