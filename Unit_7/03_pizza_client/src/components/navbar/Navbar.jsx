import { Link } from 'react-router-dom';
// Link is going to allow us to go to different routes using our "Link" tags

const Navbar = () => {
	return (
		<nav>
			<Link style={{margin:'3px 10px'}} to="/">Home</Link>
			{/* Link tags want at least one property, "to". this is going to tell the Link which route to go to */}
			<Link style={{margin:'3px 10px'}} to="/about">About Me</Link>
			<Link style={{margin:'3px 10px'}} to="/auth">Sign Up/Login</Link>
		</nav>
	)
}

export default Navbar;