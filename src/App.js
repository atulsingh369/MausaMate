import './App.css';

function App() {
	return (
		<>
			<div className="container">
				<div className='backDrop'>
					<div className="weather">
						<div className="temp">37<sup className="deg">o</sup></div>
						<div className="place">
							<span className="loc">Lucknow</span>
							<span className="time">04/07/2002 14:02</span>
						</div>
						<div className="emoji">
							<img
								src="https://i.ibb.co/68dnwxv/cloud.png"
								alt="emoji"
								width="50"
								height="50"
								style={{ marginTop: "1rem" }} />
							<span className="emjType">Mist</span>
						</div>
					</div>
					<div className="search">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="35"
							width="35"
							className='icon'
							fill='currentColor'
							viewBox="0 0 512 512">
							<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
						</svg>
						<input type="text" placeholder="Search city..." />
						<button>Search</button>
					</div>
					<div className="cred">
						<img
							className='logo'
							src="https://ik.imagekit.io/xji6otwwkb/Portfolio/android-chrome-512x512.png?updatedAt=1689898722189"
							alt="logo"
							width="120"
							height="120" />
						<p className='credText'>Built with 💗 by Atul</p>
					</div>
				</div>
			</div >
		</>
	)
}

export default App;
