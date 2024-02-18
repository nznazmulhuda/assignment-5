const seats = document.querySelectorAll(".seat");
const seatCount = document.getElementById("seatCount");
const seatLeft = document.getElementById("seatLeft");
const seatField = document.getElementById("seatField");
const coupon = document.getElementById("couponField");
let totalPrice = document.getElementById("totalPrice");
let grandTotalPrice = document.getElementById("grandTotalPrice");

const ticketPrice = 550;
const couponOne = "NEW15";
const couponTwo = "Couple 20";
let activeSeat = 0;

for (const seat of seats) {
	seat.addEventListener("click", function () {
		let seatFieldElementCount =
			document.getElementById("seatField").childElementCount;
		if (activeSeat < 4 || seat.classList.contains("green")) {
			if (seat.classList.contains("green")) {
				delClass(seat, "green");
				activeSeat--;
				seatCount.innerText = activeSeat;
				seatLeft.innerText++;

				for (let i = 0; i < seatFieldElementCount; i++) {
					if (
						Boolean(seat.classList.contains(`num_${i}`)) == true &&
						Boolean(document.getElementById(`num_${i}`)) == true
					) {
						document.getElementById(`num_${i}`).innerHTML = "";
					} else {
						continue;
					}
				}
				totalPrice.innerText = ticketPrice * activeSeat;
				grandTotalPrice.innerText = ticketPrice * activeSeat;

				if (activeSeat === 0) {
					addClassById("couponField", "hidden");
				}
			} else {
				addClass(seat, "green");
				activeSeat++;
				seatCount.innerText = activeSeat;
				seatLeft.innerText = 40 - activeSeat;
				seatField.innerHTML += `<div id="num_${seatFieldElementCount}" class="flex justify-between"><p class="text-left">${seat.innerText}</p>
                <p class="text-center">Economoy</p>
                <p class="text-right">550</p> </div>`;
				seat.classList.add(`num_${seatFieldElementCount}`);
				totalPrice.innerText = ticketPrice * activeSeat;
				grandTotalPrice.innerText = ticketPrice * activeSeat;

				if (activeSeat > 0) {
					delClassById("couponField", "hidden");
				}
			}
		}
	});
}
