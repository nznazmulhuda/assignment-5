const seats = document.querySelectorAll(".seat");
let seatCount = 0;
let seatField = document.getElementById("seat");
const seatClass = "Economoy";
const ticketPrice = 550;
for (const seat of seats) {
	seat.addEventListener("click", function () {
		let seatName = document.createElement("p");
		let seatclass = document.createElement("p");
		let price = document.createElement("p");
		if (seat.classList.contains("bg-theme_btn")) {
			seat.classList.remove("bg-theme_btn", "text-white");
			seatName.classList.remove("seatName");
			seatName.setAttribute("id", "toRemove");
		} else {
			seat.classList.add("bg-theme_btn", "text-white");
			seatName.classList.add("seatName", "text-left");
		}
		seatCount = document.querySelectorAll(".bg-theme_btn").length;

		if (seatCount > 4) {
			alert("You can not buy more then 4 seats");
			seat.classList.remove("bg-theme_btn");
			seatCount = 4;
		}

		document.getElementById("seatCount").innerText = seatCount;

		document.getElementById("seatLeft").innerText = 40 - seatCount;

		seatclass.classList.add("text-center");
		price.classList.add("text-right");
		seatclass.innerText = seatClass;
		price.innerText = ticketPrice;

		if (seatName.classList.contains("seatName")) {
			seatName.innerText = seat.innerText;
			seatField.appendChild(seatName);
			seatField.appendChild(seatclass);
			seatField.appendChild(price);
		} else if (
			seatName.classList.contains(".toRemove") &&
			seatField.getElementById("toRemove").innerText == seatName
		) {
			document.getElementById("toRemove").innerText = "";
		}

		document.getElementById("price").innerText = seatCount * ticketPrice;
		document.getElementById("grandTotalPrice").innerText =
			seatCount * ticketPrice;

		if (seatCount > 0) {
			document.getElementById("couponField").classList.remove("hidden");
		} else {
			document.getElementById("couponField").classList.add("hidden");
			document.getElementById("discount").classList.add("hidden");
		}
	});
}
