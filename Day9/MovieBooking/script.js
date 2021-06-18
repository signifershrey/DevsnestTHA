let bs = document.querySelector("#bookedseats");
let rs = document.querySelector("#remainingseats");
let box = document.querySelectorAll(".seat");

let bookedSeats = 0;
let remainingSeats = 36;

function bookSeat() {
  bookedSeats++;
  remainingSeats--;

  bs.innerText = bookedSeats;
  rs.innerText = remainingSeats;
}

function removeSeat() {
  bookedSeats--;
  remainingSeats++;

  bs.innerHTML = bookedSeats;
  rs.innerHTML = remainingSeats;
}

let mark = false;
box.forEach((item) => {
  item.addEventListener("mousedown", () => {
    mark = true;
    item.classList.toggle("seat-clicked")
    console.log(item.style.backgroundColor)
    if (item.classList.contains("seat-clicked")) {
      bookSeat()
    } else {
      removeSeat()
    }
  });
  item.addEventListener("mouseup", () => { 
    mark = false;
  })
  item.addEventListener("mouseover", () => { 
    if (mark===true) {
      item.classList.toggle("seat-clicked")
      if(item.classList.contains("seat-clicked")) {
        bookSeat();
      } else {
        removeSeat();
      }
    }
  })
});
