import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navbar navbar-dark bg-dark h-100">
      <div className="d-flex flex-column align-items-start p-3 h-100">
        <Link className="navbar-brand mb-3" to="/">
          Student Manager
        </Link>
        <ul className="navbar-nav flex-column w-100">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
            Search Student
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create">
              Create Student
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/update">
              Update Student
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/delet">
              Delete Student
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
