import 'bootstrap/dist/css/bootstrap.css'

function NavBar() {
	return (
		<nav className="navbar navbar-expand navbar-light bg-light fixed-top">
			<div className="navbar-brand mx-3">Peterlim's Portfolio</div>
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link" href="/">Profile</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/project">Project</a>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar