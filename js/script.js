'use strict';

(function() {
  const VARIANTES_RES = ['Камень', 'Ножницы', 'Бумага'];

  // Получили данные от пользователя
  const checkInfo = () => {
    const userVar = prompt('Go info');
    let newUserVar = '';

    switch (userVar) {
      case 0:
        alert('Введите ваш вариант');
        checkInfo();
        break;

      case '':
        alert('Введите ваш вариант');
        checkInfo();
        break;

      case null:
        alert('До встречи в следующий раз');
        break;

      default:
        newUserVar = userVar;
        break;
    }

    return newUserVar;
  };
  const resUserNumber = checkInfo();
  console.log(typeof resUserNumber);

  // Строка с большой буквы

  const constructorStr = () => {
    let newStr = '';

    if (resUserNumber === '') {
      console.log('game over');
    } else {
      newStr = resUserNumber[0].toUpperCase() +
      resUserNumber.slice(1).toLocaleLowerCase();
    }

    return newStr;
  };
  const resStr = constructorStr();
  console.log(resStr);

  // Получили длину строки

  const getStrLeng = () => {
    let strLeng = '';

    if (resStr.length > 0) {
      strLeng = resStr.length;
    }

    return strLeng;
  };
  const resStrLeng = getStrLeng();
  console.log(resStrLeng);

  // Получили массив с длиной каждого символа в основном массиве

  const resArrLengs = [];

  const getArrLengthElement = (array) => {
    if (array.length > 0) {
      resArrLengs.push(array[0].length);
      getArrLengthElement(array.slice(1));
    }
  };
  getArrLengthElement(VARIANTES_RES);
  console.log(resArrLengs);

  // Самый длинный элемент массива
  const resMaxArrElement = resArrLengs.sort((a, b) => b - a).slice(0, 1).join();
  console.log(resMaxArrElement);

  // Перебор массива

  const resSlice = [];

  const recursArr = (array) => {
    if (array.length > 0) {
      resSlice.push(array[0].slice(0, resStrLeng));
      recursArr(array.slice(1));
    }
  };
  recursArr(VARIANTES_RES);
  console.log(resSlice);

  let resUserPush = '';

  const sortArr = (array) => {
    if (array.length > 0) {
      if (array[0] === resStr && resStr[0] === 'К') {
        resUserPush = 'Камень';
      }
      if (array[0] === resStr && resStr[0] === 'Н') {
        resUserPush = 'Ножницы';
      }
      if (array[0] === resStr && resStr[0] === 'Б') {
        resUserPush = 'Бумага';
      }

      sortArr(array.slice(1));
    }
  };
  sortArr(resSlice);
  console.log(resUserPush);

  let strNumber = 0;

  // ------------ Генерация числа ботом -------------

  const getRandomIntInclusive = () => {
    const min = 1;
    const max = 3;
    const randNum = Math.floor(Math.random() * (max - min + 1) + min);

    const getRandomStr = () => {
      let resStrBot = '';

      switch (randNum) {
        case 1:
          resStrBot = 'Камень';
          // console.log(resStr);
          break;

        case 2:
          resStrBot = 'Ножницы';
          // console.log(resStr);
          break;

        case 3:
          resStrBot = 'Бумага';
          // console.log(resStr);
          break;

        default:
          console.log('Сбой программы');
      }
      return resStrBot;
    };

    return getRandomStr();
  };

  const resRandom = getRandomIntInclusive();
  console.log(resRandom);

  // -------------------------------------

  // const game = () => {
  //   const resultGame = {
  //     player: 0,
  //     computer: 0,
  //   };

  //   return function start() {
  //     checkInfo();

      

  //   };
  // };

})();

