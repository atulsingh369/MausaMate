import './App.css';

function App() {
	return (
		<>
			<div class="img"></div>
			<div class="container">
				<div class="weather">
					<span id="temp">37<sup class="deg">o</sup></span>
					<div class="place">
						<span id="loc">Lucknow</span>
						<span id="time">04/07/2002 14:02</span>
					</div>
					<div class="emoji">
						<img
							id="emoji"
							src="https://i.ibb.co/68dnwxv/cloud.png"
							alt="emoji"
							width="40"
							height="40" />
						<span id="emjType">Mist</span>
					</div>
				</div>
				<div class="search">
					<button class="icon">
						<i class="fa-solid fa-magnifying-glass"></i>
					</button>
					<input type="text" placeholder="Search city..." />
					<button onclick="find()" class="btn">Search</button>
				</div>
				<div class="cred"><p>Built with 💗 by Atul</p></div>
			</div>
		</>
	)
}

export default App;
