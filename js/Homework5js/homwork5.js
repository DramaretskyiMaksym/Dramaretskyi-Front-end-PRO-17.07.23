const dataRefusal = 'Шкода, що Ви не захотіли ввести свій(ю) дату народження';
const cityRefusal = 'Шкода, що Ви не захотіли ввести свій(ю) своє місце де знаходитесь';
const sportRefusal = 'Шкода, що Ви не захотіли ввести свій(ю) улюблений спорт';

const questionBoxing = 'Круто! Хочеш стати Майком Тайсоном?';
const questionFootball = 'Круто! Хочеш стати Криштiаном Рональдо?';
const questionBasketball = 'Круто! Хочеш стати Майклом Джорданом?';

let userBirth = +prompt('Твій рік народження?');
let currentYear = 2023 - userBirth;
let substituteYear = "Твій вiк " + currentYear;
switch(currentYear){
  case 2023:
    substituteYear = dataRefusal;
}

let userCity = prompt('В якому місті ти живеш?');
let substituteCity;
switch(userCity){
  case null:
    substituteCity = cityRefusal;
    break;
  case 'Лондон', 'лондон':
    substituteCity = "Ти живеш у столиці Англії";
    break;
  case 'Київ', 'київ':
    substituteCity = "Ти живеш у столиці України";
    break;
  case 'Вашингтон', 'вашингтон':
    substituteCity = "Ти живеш у столиці США";
    break;
  case '':
    substituteCity = sportRefusal;
    break;
  default:
    substituteCity = "Ти живеш у місті " + userCity;
}

let userSport = prompt('Який твій улюблений спорт?');
let substituteSport = "Твiй спорт";
switch(userSport){
  case null:
    substituteSport = sportRefusal;
    break;
  case '':
    substituteSport = sportRefusal;
    break;
  case 'Бокс', 'бокс':
    substituteSport = questionBoxing;
    break;
  case 'Футбол', 'футбол':
    substituteSport = questionFootball;
    break;
  case 'Баскетбол', 'баскетбол':
    substituteSport = questionBasketball;
    break;
  default:
    substituteSport = "Твiй спорт " + userSport;
}

switch (userCity){
  case 'Київ', 'київ':
    switch (userSport){
      case 'Бокс', 'бокс':
        alert(substituteYear + "\n" + "Ти живеш у столиці України" + "\n" + questionBoxing );
        break;
      case 'Футбол', 'футбол':
        alert(substituteYear + "\n" + "Ти живеш у столиці України" + "\n" + questionFootball );
        break;
      case 'Баскетбол', 'баскетбол':
        alert(substituteYear + "\n" + "Ти живеш у столиці України" + "\n" + questionBasketball );
        break;
      default:
        alert(substituteYear + "\n" + substituteCity + "\n" + substituteSport);
    }
    break;
  case 'Лондон', 'лондон':
    switch (userSport){
      case 'Бокс', 'бокс':
        alert(substituteYear + "\n" + "Ти живеш у столиці Англії" + "\n" + questionBoxing );
        break;
      case 'Футбол', 'футбол':
        alert(substituteYear  + "\n" + "Ти живеш у столиці Англії" + "\n" + questionFootball );
        break;
      case 'Баскетбол', 'баскетбол':
        alert(substituteYear + "\n" + "Ти живеш у столиці Англії" + "\n" + questionBasketball );
        break;
      default:
        alert(substituteYear + "\n" + substituteCity + "\n" + substituteSport);
    }
    break;
  case 'Вашингтон', 'вашингтон':
    switch (userSport){
      case 'Бокс', 'бокс':
        alert(substituteYear + "\n" + "Ти живеш у столиці США" + "\n" + questionBoxing );
        break;
      case 'Футбол', 'футбол':
        alert(substituteYear + "\n" + "Ти живеш у столиці США" + "\n" + questionFootball );
        break;
      case 'Баскетбол', 'баскетбол':
        alert(substituteYear+ "\n" + "Ти живеш у столиці США" + "\n" + questionBasketball );
        break;
    }
    break;
  default:
    alert(substituteYear + "\n"+ substituteCity + "\n" + substituteSport);
}