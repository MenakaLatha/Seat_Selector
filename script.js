document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector(".container");
    const seats = document.querySelectorAll(".row .seat:not(.sold)"); 
    const count = document.createElement("div");
    const total = document.createElement("div");
    const ticketPrice = 500; 

    count.innerText = "Selected Seats: 0"; 
    total.innerText = "Total: RS. 0"; 
    container.appendChild(count); 
    container.appendChild(total);

    function updateSelectedCount() {
        const selectedSeats = document.querySelectorAll(".row .seat.selected");
        const selectedSeatsCount = selectedSeats.length;

        count.innerText = "Selected Seats: " + selectedSeatsCount;
        total.innerText = "Total: RS. " + selectedSeatsCount * ticketPrice;
    }

    const seatsArray = Array.from(seats);

    seatsArray.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
            updateSelectedCount();
        });
    });

    updateSelectedCount();
});
