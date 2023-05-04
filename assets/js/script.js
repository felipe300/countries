let locations = document.querySelectorAll("h3")

function formatTime (offsets = 0) {
	let d = new Date()
	d.setHours(d.getHours() + offsets)
	let hours = d.getHours()
	let minutes = d.getMinutes()
	let seconds = d.getSeconds()

	return `${hours}:${minutes}:${seconds}`
}

locations.forEach((country) => {
	let location = document.getElementById(country.id)

	function loadCountry () {
		let format
		if (location.id === "paris") {
			format = formatTime(6)
		} else if (location.id === "londres") {
			format = formatTime(5)
		} else if (location.id === "san petersburgo") {
			format = formatTime(7)
		} else if (location.id === "beijing") {
			format = formatTime(12)
		} else if (location.id === "seul") {
			format = formatTime(13)
		} else {
			format = formatTime(0)
		}

		document.getElementById(location.id).innerText = format
		setInterval(loadCountry, 1000)
	}
	window.addEventListener("load", loadCountry(0))
})
