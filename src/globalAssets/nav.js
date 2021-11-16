console.log('nav loaded')

function isHidden(id) {
	const el = document.getElementById(id)
	return window.getComputedStyle(el).visibility === "hidden"
}

document.getElementById('topMenuBar').addEventListener('click', ()=>{
	if(isHidden('sideMenu')) {
		console.log('was hidden')
		document.getElementById("sideMenu").style.visibility = "visible"
	} else {
		console.log('was visible')
		document.getElementById("sideMenu").style.visibility = "hidden"
	}
})

