const container = document.querySelector('.container');
const availableSeats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = parseInt(movieSelect.value);

function increaseSeatCount () {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    count.innerText = selectedSeats.length;
    total.innerText = ticketPrice * selectedSeats.length;
}

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !(e.target.classList.contains('occupied'))) {
        e.target.classList.toggle('selected');
        increaseSeatCount();
    }

});



