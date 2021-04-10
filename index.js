const container = document.querySelector('.container');
const availableSeats = document.querySelectorAll('.row .seats:not (.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;