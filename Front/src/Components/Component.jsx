import "./uredjivanje.css"

const posts = [
  { user: 'Svetlana', text: 'Mazem venogel i to mi pomaze.' },
  { user: 'Zorica', text: 'Ja popijem caj od zove i brusnicu i resi sve moje probleme.' },
  { user: 'Ruška', text: 'Stari su govorili oduvek. Rakija je zakon za sve.' },
];

const Component = () => {
  const getCurrentDateTime = () => {
    const date = new Date();
    return date.toLocaleString();
  };
  return (
    <div className="glavni-container">
    {/*<header className="container">
      <h1>Mentalno Zdravlje</h1>
    </header>*/}
    <nav className="navbar">
      <div className="navbar-left">
        {/*<ul className="sidenav">*/}
        <p id="#NazivSajta">MemoCare</p>
        <a href="#forum">Forum</a>
        <a href="#statistika">Statistika</a>
        <a href="#kursevi">Kursevi</a>
        {/*</ul>*/}
      </div>
      <div className="navbar-right">
        <a href="#login">Login</a>
        <a href="#signup">Signup</a>
      </div>
    </nav>
    <div className="Hero">
        <div className="Hero-content">
            <h1>Uvod U Mentalno Zdravlje</h1>
            <p>O mentalnom zdravlju</p>
            <button className="Hero-button">Saznaj Vise</button>
        </div>
    </div>
    <div className="posts-section">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <h3>{post.user}</h3>
            <p>{post.text}</p>
            <p className="post-date">{getCurrentDateTime()}</p>
          </div>
        ))}
      </div>
    <footer className="footer">
      <nav className="foot">
        <div className="foot-left">
            <p id="#MentalZ">Mentalno Zdravlje</p>
        </div>
        <div className="foot-right">
            <a href="#Kontakt">Kontakt</a>
        </div>
      </nav>
    </footer>
  </div>
  )
}

export default Component