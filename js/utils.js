function coupon() {
	const couponOne = "NEW15";
	const couponTwo = "Couple 20";
	const coupon = document.getElementById("coupon").value;

	if (coupon === couponOne) {
		document.getElementById("couponField").classList.add("hidden");
		document.getElementById("discount").classList.remove("hidden");
		document.getElementById("discount").classList.add("flex");

		document.getElementById("discountPrice").innerText =
			ticketPrice * seatCount * 0.15;

		document.getElementById("grandTotalPrice").innerText =
			ticketPrice * seatCount - ticketPrice * seatCount * 0.15;
	} else if (coupon === couponTwo) {
		document.getElementById("couponField").classList.add("hidden");
		document.getElementById("discount").classList.remove("hidden");
		document.getElementById("discount").classList.add("flex");

		document.getElementById("discountPrice").innerText =
			ticketPrice * seatCount * 0.2;

		document.getElementById("grandTotalPrice").innerText =
			ticketPrice * seatCount - ticketPrice * seatCount * 0.2;
	} else {
		alert("invalid coupon or insert your number");
		document.getElementById("coupon").value = "";
	}
}

function submit() {
	if (
		document.getElementById("number").value &&
		document.getElementById("pName").value
	) {
		document.getElementById("header").classList.add("hidden");
		document.getElementById("ticketSell").classList.add("hidden");
		document.getElementById("offer").classList.add("hidden");
		document.getElementById("body").classList.add("bg-[#F2F1F1]");
		my_modal_1.showModal();
	} else {
		alert("Enter name and valid number");
	}
}

function unHide() {
	document.getElementById("header").classList.remove("hidden");
	document.getElementById("ticketSell").classList.remove("hidden");
	document.getElementById("offer").classList.remove("hidden");
	document.getElementById("body").classList.remove("bg-[#F2F1F1]");
}
