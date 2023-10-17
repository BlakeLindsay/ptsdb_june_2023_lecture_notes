import { Link } from 'react-router-dom';
// Link is going to allow us to go to different routes using our "Link" tags

const Navbar = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			{/* Link tags want at least one property, "to". this is going to tell the Link which route to go to */}
			<Link to="/about">About Me</Link>
			<Link to="/signup">Sign Up</Link>
		</nav>
	)
}

export default Navbar;