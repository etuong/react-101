import "exercise.css";

const Navigation = () => {

  return (
    <ul className="nav">
      <li><a className="active" href="/">Home</a></li>
      <li><a href="/movies">Movies</a></li>
      <li><a href="/pictures">Pictures</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  )
}

export default Navigation;
