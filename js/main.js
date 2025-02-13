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
