'use strict';

(function() {
  const VARIANTES_RES = ['Камень', 'Ножницы', 'Бумага'];

  // const repeatTest = () => {
    // Получили данные от пользователя

    const checkInfo = () => {
      const userVar =
      prompt('Камень, ножницы или бумага? Введите вариант ответа');
      let newUserVar = '';

      switch (userVar) {
        case 0:
          alert('Числа вводить нельзя');
          checkInfo();
          break;

        case '':
          alert('Строка не должна быть пустой');
          checkInfo();
          break;

        case null:
          alert('До встречи в следующий раз');
          newUserVar = 'Exit';
          break;

        default:
          if (typeof userVar === 'string') {
            newUserVar = userVar;
          }
          if (userVar === null) {
            newUserVar = 'Exit';
          }
          break;
      }


      return newUserVar;
    };


    const resUserNumber = checkInfo();
    console.log(typeof resUserNumber);

    let ex = '';

    if (resUserNumber === '') {
      ex = 'Exit';
    }

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


    if (resStr === 'Exit') {
      ex = resStr;
    } else {
      resStr;
    }

    // console.log(resStr);

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
    const resMaxArrElement =
    resArrLengs.sort((a, b) => b - a).slice(0, 1).join();
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
        if (resUserPush === 'Exit') {
          console.log(resStr);
        }

        sortArr(array.slice(1));
      }
    };

    sortArr(resSlice);
    // console.log(resUserPush);

    if (ex === 'Exit') {
      console.log('Game over');
    } else {
      switch (resUserPush) {
        case 'Камень' || 'Ножницы' || 'Бумага':
          resUserPush;
          break;

        case 'Exit' || 'string':
          console.log('Game over');
          break;

        default:
          alert('Данные введены неверно. Строка не должна содержать чисел, символов, каких либо наборов букв. Повторите попытку');
          repeatTest();
          break;
      }
    }
    return resUserPush;
  };
  const userResult = repeatTest();
  console.log(userResult);

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

  const game = () => {
    const resultGame = {
      player: 0,
      computer: 0,
    };

    return function start() {
      checkInfo();
    };
  };
})();

