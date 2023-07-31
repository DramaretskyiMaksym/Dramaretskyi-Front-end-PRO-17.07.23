// const dataRefusal = 'Шкода, що Ви не захотіли ввести свій(ю) дату народження';
// const cityRefusal = 'Шкода, що Ви не захотіли ввести свій(ю) своє місце де знаходитесь';
// const sportRefusal = 'Шкода, що Ви не захотіли ввести свій(ю) улюблений спорт';

// const questionBoxing = 'Круто! Хочеш стати Майком Тайсоном?';
// const questionFootball = 'Круто! Хочеш стати Криштiаном Рональдо?';
// const questionBasketball = 'Круто! Хочеш стати Майклом Джорданом?';

// let userBirth = +prompt('Твій рік народження?');
// let currentYear = 2023 - userBirth;
// let substituteYear = "Твій вiк " + currentYear;

// switch(currentYear){
//   case 2023:
//     substituteYear = dataRefusal;
// }

// let userCity = prompt('В якому місті ти живеш?');
// let substituteCity;

// switch(userCity){
//   case null:
//     substituteCity = cityRefusal;
//     break;
//   case 'Лондон', 'лондон':
//     substituteCity = "Ти живеш у столиці Англії";
//     break;
//   case 'Київ', 'київ':
//     substituteCity = "Ти живеш у столиці України";
//     break;
//   case 'Вашингтон', 'вашингтон':
//     substituteCity = "Ти живеш у столиці США";
//     break;
//   case '':
//     substituteCity = sportRefusal;
//     break;
//   default:
//     substituteCity = "Ти живеш у місті " + userCity;
// }

// let userSport = prompt('Який твій улюблений спорт?');
// let substituteSport = "Твiй спорт";
// switch(userSport){
//   case null:
//     substituteSport = sportRefusal;
//     break;
//   case '':
//     substituteSport = sportRefusal;
//     break;
//   case 'Бокс', 'бокс':
//     substituteSport = questionBoxing;
//     break;
//   case 'Футбол', 'футбол':
//     substituteSport = questionFootball;
//     break;
//   case 'Баскетбол', 'баскетбол':
//     substituteSport = questionBasketball;
//     break;
//   default:
//     substituteSport = "Твiй спорт " + userSport;
// }

// alert(substituteYear + "\n" + substituteCity + "\n" + substituteSport);