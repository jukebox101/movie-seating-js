const container = document.querySelector('.container');
const availableSeats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

fetch('https://api.themoviedb.org/3/movie/76341?api_key=2a92c440dec247ecd8c1885cabc0cd06')
  .then(response => response.json())
  .then(data => console.log(data));

populateUI();

let ticketPrice = parseInt(movieSelect.value);

function populateUI (){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0){
        availableSeats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1)
            seat.classList.add('selected');
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function increaseSeatTotalCount () {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatArr = [...selectedSeats].map(seat => [...availableSeats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatArr));

    const seatLength = selectedSeats.length;
    
    count.innerText = seatLength;
    total.innerText = ticketPrice * seatLength;
}

movieSelect.addEventListener('change', (e) => {
    ticketPrice = parseInt(e.target.value);
    
    setMovieData(e.target.selectedIndex, e.target.value);

    increaseSeatTotalCount();
});

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !(e.target.classList.contains('occupied'))) {
        e.target.classList.toggle('selected');
        increaseSeatTotalCount();
    }
});


increaseSeatTotalCount();
