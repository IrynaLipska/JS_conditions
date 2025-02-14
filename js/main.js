// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let userAge = +prompt("Enter your age");

if (!isNaN(userAge) && userAge >= 0 && userAge <= 99) {
  if (userAge >= 0 && userAge <= 11) {
    alert("You are a child");
  } else if (userAge >= 12 && userAge <= 17) {
    alert("You are a teenager");
  } else if (userAge >= 18 && userAge <= 59) {
    alert("You are a adult");
  } else {
    alert("You are an old person");
  }
} else {
  alert("The entered age is incorrect");
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let number = Number(prompt("Enter number from 0 to 9:"));

switch (number) {
  case 1:
    alert("Symbol: !");
    break;
  case 2:
    alert("Symbol: @");
    break;
  case 3:
    alert("Symbol: #");
    break;
  case 4:
    alert("Symbol: $");
    break;
  case 5:
    alert("Symbol: %");
    break;
  case 6:
    alert("Symbol: ^");
    break;
  case 7:
    alert("Symbol: &");
    break;
  case 8:
    alert("Symbol: *");
    break;
  case 9:
    alert("Symbol: (");
    break;
  case 0:
    alert("Symbol: )");
    break;
  default:
    alert("Нou did not enter a number");
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let start = Number(prompt("Enter the start of the range"));
let end = Number(prompt("Enter the end of the range"));

if (start <= end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  alert(`The sum of all numbers in the range is ${sum}.`);
}

//Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:

// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.
let totalAmount = Number(prompt("Введіть суму покупки:"));

if (totalAmount > 0) {
  let discount = 0;

  if (totalAmount >= 200 && totalAmount < 300) {
    discount = 0.03;
    и;
  } else if (totalAmount >= 300 && totalAmount < 500) {
    discount = 0.05;
  } else if (totalAmount >= 500) {
    discount = 0.07;
  }

  let discountAmount = totalAmount * discount;
  let finalAmount = totalAmount - discountAmount;

  alert(`Ваша знижка: ${discountAmount.toFixed(2)} грн.
Сума до оплати: ${finalAmount.toFixed(2)} грн.`);
}

//Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 1; i <= 10; i++) {
  let number = Number(prompt(`Введіть число ${i} з 10:`));

  if (!isNaN(number)) {
    if (number > 0) positive++;
    else if (number < 0) negative++;
    else zero++;

    if (number % 2 === 0) even++;
    else odd++;
  }
}
