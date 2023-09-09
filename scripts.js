let pos = document.getElementById("center");

let body = document.querySelector("body");

// let v = pos.clientWidth + pos.offsetWidth / 2;

let v = window.innerWidth / 2;

pos.addEventListener("mousemove", (e) => {
	{
		let recloc = pos.getBoundingClientRect();
		// console.log(parseInt(e.clientX - recloc.left));
		let x = e.clientX - recloc.left;
		// console.log(x);

		// console.log(gsap.utils.mapRange(0, recloc.width / 2, 255, 0, x));

		// let clr = "";

		if (x < recloc.width / 2) {
			clr = `rgb(${gsap.utils.mapRange(
				0,
				recloc.width / 2,
				255,
				0,
				x
			)}, 0, 0)`;
		} else {
			clr = `rgb(0, 0,${gsap.utils.mapRange(
				recloc.width / 2,
				recloc.width,
				0,
				255,
				x
			)})`;
		}

		// pos.style.backgroundColor = clr;

		gsap.to(pos, {
			backgroundColor: clr,
		});

		body.style.backgroundColor = `rgb(0, 255,${((x - 300) / 300) * 255})`;
	}
});

pos.addEventListener("mouseleave", () => {
	// pos.style.backgroundColor = "white";

	gsap.to(pos, {
		backgroundColor: "white",
	});

	body.style.backgroundColor = "white";
});

// // // click listener used....
// let b = 0;
// document.addEventListener("click", () => {
// 	b += 1;
// });
// document.addEventListener("mousemove", (e) => {
// 	if (b % 2 == 1) {
// 		console.log(e);
// 		v += e.movementX / 2;
// 		pos.style.left = v + "px";
// 	}
// });

window.addEventListener("mousemove", (e) => {
	// console.log(window.innerWidth, window.outerWidth);
	v = gsap.utils.mapRange(
		0,
		window.innerWidth,
		0 + 400,
		window.innerWidth - 400,
		e.x
	);
	// pos.style.left = v + "px";

	gsap.to(pos, {
		left: v,
		ease: Power3,
	});
});
