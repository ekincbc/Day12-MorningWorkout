const seatNumber = Number(prompt('Enter your seat number:'));

const row = Math.floor(seatNumber / 10);

const column = seatNumber % 10;

const rowLine = String.fromCharCode(65 + row);

alert(rowLine + column);

