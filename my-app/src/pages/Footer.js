import React from 'react';

// import Formulaire from './pages/Formulaire'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
	return (
		<div className="container my-100">
			<footer className="text-center text-lg-start" style={{ backgroundColor: '#db6930' }}>
				<div className="container d-flex justify-content-center py-5">
					<button
						type="button"
						className="btn btn-primary btn-lg btn-floating mx-2"
						style={{ backgroundColor: '#54456b' }}
					>
						<i className="fab fa-facebook-f" />
					</button>
					<button
						type="button"
						className="btn btn-primary btn-lg btn-floating mx-2"
						style={{ backgroundColor: '#54456b' }}
					>
						<i className="fab fa-youtube" />
					</button>
					<button
						type="button"
						className="btn btn-primary btn-lg btn-floating mx-2"
						style={{ backgroundColor: '#54456b' }}
					>
						<i className="fab fa-instagram" />
					</button>
					<button
						type="button"
						className="btn btn-primary btn-lg btn-floating mx-2"
						style={{ backgroundColor: '#54456b' }}
					>
						<i className="fab fa-twitter" />
					</button>
				</div>
				{/* Copyright */}
				<div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
					<p>© {new Date().getFullYear()}By Souhail</p>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
