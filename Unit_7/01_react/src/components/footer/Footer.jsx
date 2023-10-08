// &copy; places copyright symbol
// function Footer() {

// 	let currentYear = new Date().getFullYear();

// 	return(
// 		<h6>
// 			Copyright {currentYear} &copy;
// 		</h6>
// 	)
// } // also valid

// const Footer = function() {
// 	let currentYear = new Date().getFullYear();

// 	return(
// 		<h6>
// 			Copyright {currentYear} &copy;
// 		</h6>
// 	)
// } // also valid

const Footer = () => {
	let currentYear = new Date().getFullYear();

	return(
		<h6>
			Copyright {currentYear} &copy;
		</h6>
	)
}

export default Footer;