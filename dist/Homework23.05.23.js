/*
Задание 1
Создать объект, описывающий автомобиль (производитель,
модель, год выпуска, средняя скорость), и следующие функции
для работы с этим объектом.
1. Функция для вывода на экран информации об автомобиле.
2. Функция для подсчета необходимого времени для пре-
одоления переданного расстояния со средней скоростью.
Учтите, что через каждые 4 часа дороги водителю необхо-
димо делать перерыв на 1 час.
*/
var myCar = {
    manufacturer: 'Honda',
    model: 'Pilot',
    yearOfRelease: 2008,
    averageSpeed: 95
};
alert("\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: " + myCar.manufacturer + "  \u043C\u043E\u0434\u0435\u043B\u044C: " + myCar.model + "  \u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: " + myCar.yearOfRelease + "  C\u0440\u0435\u0434\u043D\u044F\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C: " + myCar.averageSpeed + "\u043A\u043C/\u0447 ");
document.write("<p>\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: " + myCar.manufacturer + "</p><p> \u043C\u043E\u0434\u0435\u043B\u044C: " + myCar.model + "</p><p> \u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: " + myCar.yearOfRelease + "</p><p> C\u0440\u0435\u0434\u043D\u044F\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C: " + myCar.averageSpeed + "\u043A\u043C/\u0447</p> ");
function calculationOfTravelTime(km) {
    if (km == 0) {
        return 0;
    }
    var h;
    var m;
    var s;
    var r;
    for (h = 0; km >= myCar.averageSpeed; h++) {
        km = km - myCar.averageSpeed;
    }
    var f = h;
    for (r = 0; f >= 4; r++) {
        f = f - 4;
    }
    for (m = 0; km >= (myCar.averageSpeed / 60); m++) {
        km = km - (myCar.averageSpeed / 60);
    }
    for (s = 0; km >= (myCar.averageSpeed / 3600); s++) {
        km = km - (myCar.averageSpeed / 3600);
    }
    if (m == 0 && s == 0) {
        h = h + r - 1;
    }
    else {
        h = h + r;
    }
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    if (r == 0) {
        return 'Ваше время в пути составит: ' + h + ':' + m + ':' + s;
    }
    else {
        return 'Ваше время в пути с учётом отдыха каждый пятый час составит: ' + h + ':' + m + ':' + s;
    }
}
var timeToOvercome = +prompt('Введите расстояние в км');
// @ts-ignore
document.write(calculationOfTravelTime(timeToOvercome));
var fraction1 = {
    numerator: 2,
    denominator: 5
};
var fraction2 = {
    numerator: 2,
    denominator: 8
};
console.log(fraction1.numerator + "/" + fraction1.denominator + " and " + fraction2.numerator + "/" + fraction2.denominator);
function maxDenominator(f) {
    var min = f.numerator < f.denominator ? f.numerator : f.denominator;
    for (var i = min; i > 1; i--) {
        if (f.numerator % i == 0 && f.denominator % i == 0)
            return i;
    }
    return 1;
}
function fractionReduction(f) {
    var denominator = maxDenominator(f);
    f.numerator /= denominator;
    f.denominator /= denominator;
    return f;
}
function fractionSubtraction(f1, f2) {
    var ajusted = fractionAjust(f1, f2);
    var sub = {
        numerator: ajusted.f1.numerator - ajusted.f2.numerator,
        denominator: f1.denominator
    };
    return fractionReduction(sub);
}
function fractionAjust(f1, f2) {
    var f1D = f1.denominator;
    var f2D = f2.denominator;
    f1.numerator *= f2D;
    f1.denominator *= f2D;
    f2.numerator *= f1D;
    f2.denominator *= f1D;
    return { f1: f1, f2: f2 };
}
function fractionMultiplication(f1, f2) {
    var mult = {
        numerator: f1.numerator * f2.numerator,
        denominator: f1.denominator * f2.denominator
    };
    return fractionReduction(mult);
}
function fractionDivision(f1, f2) {
    var div = {
        numerator: f1.numerator * f2.denominator,
        denominator: f1.denominator * f2.numerator
    };
    return fractionReduction(div);
}
function fractionSum(f1, f2) {
    var ajusted = fractionAjust(f1, f2);
    var sum = {
        numerator: ajusted.f1.numerator + ajusted.f2.numerator,
        denominator: ajusted.f1.denominator
    };
    return fractionReduction(sum);
}
var sumResult = fractionSum(fraction1, fraction2);
var subResult = fractionSubtraction(fraction1, fraction2);
var multResult = fractionMultiplication(fraction1, fraction2);
var divResult = fractionDivision(fraction1, fraction2);
document.write("<p> sum = " + sumResult.numerator + "/" + sumResult.denominator + " </p>");
document.write("<p> sub = " + subResult.numerator + "/" + subResult.denominator + " </p>");
document.write("<p> mult = " + multResult.numerator + "/" + multResult.denominator + " </p>");
document.write("<p> div = " + divResult.numerator + "/" + divResult.denominator + " </p>");
//================================================================================================================
/*
  Задание 3
Создать объект, описывающий время (часы, минуты, секун-
ды), и следующие функции для работы с этим объектом.
1. Функция вывода времени на экран.
2. Функция изменения времени на переданное количество
секунд.
3. Функция изменения времени на переданное количество
минут.
4. Функция изменения времени на переданное количество
часов.
Учтите, что в последних 3-х функциях, при изменении одной
части времени, может измениться и другая. Например: если ко
времени «20:30:45» добавить 30 секунд, то должно получиться
«20:31:15», а не «20:30:75».
 */
//==================================================================================
// Вариант 1
var number_of_hours = +prompt('Введите на сколько часов хотите изменить время');
var number_of_minuten = +prompt('Введите на сколько минут хотите изменить время');
var number_of_seconds = +prompt('Введите на сколько секунд хотите изменить время');
var date = new Date();
document.write("<p> \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F: " + date.toLocaleTimeString("ru-RU") + "</p>");
function changingTheSeconds(number_of_seconds) {
    var date1 = new Date();
    date1.setSeconds(date1.getSeconds() + number_of_seconds);
    return (date1.toLocaleTimeString("ru-RU"));
}
document.write("<p>\u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0435 \u043A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0435\u043A\u0443\u043D\u0434: " + changingTheSeconds(number_of_seconds) + "</p>");
function changingTheMinutes(number_of_minuten) {
    var date2 = new Date();
    date2.setMinutes(date2.getMinutes() + number_of_minuten);
    return (date2.toLocaleTimeString("ru-RU"));
}
document.write("<p>\u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0435 \u043A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0438\u043D\u0443\u0442: " + changingTheMinutes(number_of_minuten) + "</p>");
function changingTheHours(number_of_hours) {
    var date3 = new Date();
    date3.setHours(date3.getHours() + number_of_hours);
    return (date3.toLocaleTimeString("ru-RU"));
}
document.write("<p>\u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0435 \u043A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0447\u0430\u0441\u043E\u0432: " + changingTheHours(number_of_hours) + "</p>");
function changeThreeTimeParameters(number_of_hours, number_of_minuten, number_of_seconds) {
    var date4 = new Date();
    date4.setSeconds(date4.getSeconds() + number_of_seconds);
    date4.setMinutes(date4.getMinutes() + number_of_minuten);
    date4.setHours(date4.getHours() + number_of_hours);
    return (date4.toLocaleTimeString("ru-RU"));
}
document.write("<p>\u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0435 \u043A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0447\u0430\u0441\u043E\u0432, \u043C\u0438\u043D\u0443\u0442 \u0438 \u0441\u0435\u043A\u0443\u043D\u0434: " + changeThreeTimeParameters(number_of_hours, number_of_minuten, number_of_seconds) + "</p>");
//==========================================================================
//Вариант 2
var h;
var m;
var s;
function printTheTime(d) {
    s = d.getSeconds();
    m = d.getMinutes();
    h = d.getHours();
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    return h + ':' + m + ':' + s;
}
document.write('настоящее время ' + printTheTime(new Date()));
console.log(h, m, s);
function countingTheTime(h, m, s, differenceHours, differenceMinutes, differenceSeconds) {
    var time = h * 3600 + m * 60 + s;
    var differenceTime = differenceHours * 3600 + differenceMinutes * 60 + differenceSeconds;
    var sumTime = time + differenceTime;
    var h1;
    var m1;
    var s1;
    h1 = Math.floor((sumTime / 3600)) % 24;
    m1 = Math.floor((sumTime % 3600) / 60);
    s1 = (sumTime % 3600) % 60;
    if (h1 < 10) {
        h1 = '0' + h1;
    }
    if (m1 < 10) {
        m1 = '0' + m1;
    }
    if (s1 < 10) {
        s1 = '0' + s1;
    }
    return h1 + ':' + m1 + ':' + s1;
}
var differenceHours = 13;
document.write("<p>\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0447\u0430\u0441\u043E\u0432 \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u0438: " + differenceHours + "</p>");
document.write("<p>\u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u0447\u0430\u0441\u044B: " + countingTheTime(h, m, s, differenceHours, 0, 0) + " </p>");
var differenceMinutes = 85;
document.write("<p>\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0438\u043D\u0443\u0442 \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u0438: " + differenceMinutes + "</p>");
document.write("<p>\u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u043C\u0438\u043D\u0443\u0442\u044B: " + countingTheTime(h, m, s, 0, differenceMinutes, 0) + " </p>");
var differenceSeconds = 420;
document.write("<p>\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0435\u043A\u0443\u043D\u0434 \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u0438: " + differenceSeconds + "</p>");
document.write("<p>\u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u044B: " + countingTheTime(h, m, s, 0, 0, differenceSeconds) + " </p>");
document.write("<p>\u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u0442\u0440\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430: " + countingTheTime(h, m, s, differenceHours, differenceMinutes, differenceSeconds) + " </p>");
