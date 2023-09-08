let pos = document.getElementById("center");

let body = document.querySelector("body");

pos.addEventListener("mousemove", (e) => {
	let recloc = pos.getBoundingClientRect();
	console.log(parseInt(e.clientX - recloc.left));
	let x = e.clientX - recloc.left;
	console.log(x);
	let clr = "";
	if (x < 300) {
		clr = `rgb(${255 - (x / 300) * 255}, 0, 0)`;
	} else {
		clr = `rgb(0, 0,${((x - 300) / 300) * 255})`;
	}

	pos.style.backgroundColor = clr;
	body.style.backgroundColor = `rgb(0, 255,${((x - 300) / 300) * 255})`;
});

pos.addEventListener("mouseleave", () => {
	pos.style.backgroundColor = "white";
	body.style.backgroundColor = "white";
});
