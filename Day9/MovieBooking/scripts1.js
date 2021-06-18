let bookedSeatsElement = document.querySelector("#bookedseats");
let remainingSeatsElement = document.querySelector("#remainingseats");
let seats = document.querySelectorAll(".seat");

let bookedSeats = 0;
let remainingSeats = seats.length;

bookedSeatsElement.innerText = bookedSeats;
remainingSeatsElement.innerText = remainingSeats;

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    seat.classList.toggle("booked");
    seat.classList.contains("booked") ? bookeSeats() : unBookSeats();
  });
});

function bookeSeats() {
  bookedSeats += 1;
  remainingSeats -= 1;

  bookedSeatsElement.innerText = bookedSeats;
  remainingSeatsElement.innerText = remainingSeats;
}

function unBookSeats() {
  bookedSeats -= 1;
  remainingSeats += 1;

  bookedSeatsElement.innerText = bookedSeats;
  remainingSeatsElement.innerText = remainingSeats;
}
