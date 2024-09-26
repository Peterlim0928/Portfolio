import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav className="navbar navbar-expand navbar-light bg-light fixed-top">
			<div className="navbar-brand mx-3">Peterlim's Portfolio</div>
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link className="nav-link" to="/">Profile</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/project">Project</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
