const container = document.querySelector('.container');
const availableSeats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = parseInt(movieSelect.value);

function increaseTotalCount () {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatLength = selectedSeats.length;

    count.innerText = seatLength;
    total.innerText = ticketPrice * seatLength;
}

movieSelect.addEventListener('change', (e) => {
    ticketPrice = parseInt(e.target.value);
    increaseTotalCount();
});

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !(e.target.classList.contains('occupied'))) {
        e.target.classList.toggle('selected');
        increaseTotalCount();
    }
});



