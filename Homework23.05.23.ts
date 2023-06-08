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

const myCar = {
    manufacturer: 'Honda',
    model: 'Pilot',
    yearOfRelease: 2008,
    averageSpeed: 95,
}
alert (`Производитель: ${myCar.manufacturer}  модель: ${myCar.model}  Год выпуска: ${myCar.yearOfRelease}  Cредняя скорость: ${myCar.averageSpeed}км/ч ` ) 

document.write (`<p>Производитель: ${myCar.manufacturer}</p><p> модель: ${myCar.model}</p><p> Год выпуска: ${myCar.yearOfRelease}</p><p> Cредняя скорость: ${myCar.averageSpeed}км/ч</p> ` )

function calculationOfTravelTime ( km: any ) {
    if (km == 0) {
        return 0
    }
    let h 
    let m 
    let s 
    let r
   
    for ( h = 0; km >= myCar.averageSpeed; h ++ ) {
        km = km - myCar.averageSpeed
    }
    let f = h
    for (r = 0; f >=4; r ++) {
        f=f-4
    }
    for ( m =0; km >= (myCar.averageSpeed/60); m ++) {
        km = km - (myCar.averageSpeed/60)
    }
    for (s = 0; km >= (myCar.averageSpeed/3600); s ++) {
        km = km - (myCar.averageSpeed/3600)
    }
    if (m == 0 && s == 0){
        h = h + r - 1
    }else {
        h = h + r
    }
    if (h<10){
        h= '0'+h
    }
    if (m<10){
        m= '0'+m
    }
    if (s<10){
        s='0'+s
    }
    if (r == 0 ) {
        return 'Ваше время в пути составит: '+h +':'+ m +':'+ s
    }else{
        return 'Ваше время в пути с учётом отдыха каждый пятый час составит: '+h +':'+ m +':'+ s
    }
}
let timeToOvercome = +(prompt ('Введите расстояние в км')as string)
// @ts-ignore
document.write (calculationOfTravelTime(timeToOvercome))


//====================================================================================================================



/*
Задание 2
Создать объект, хранящий в себе отдельно числитель и зна-
менатель дроби, и следующие функции для работы с этим объ-
ектом.
1. Функция сложения 2-х объектов-дробей.
2. Функция вычитания 2-х объектов-дробей.
3. Функция умножения 2-х объектов-дробей.
4. Функция деления 2-х объектов-дробей.
5. Функция сокращения объекта-дроби.
*/

type Fraction = {
    numerator: number,
    denominator: number
  }
  
  const fraction1:Fraction = {
    numerator: 2,
    denominator: 5
  }
  const fraction2: Fraction = {
    numerator: 2,
    denominator: 8
  }
  
  console.log(`${fraction1.numerator}/${fraction1.denominator} and ${fraction2.numerator}/${fraction2.denominator}`)
  
  function maxDenominator(f: Fraction) {
    const min = f.numerator < f.denominator ? f.numerator : f.denominator
    for (let i = min; i > 1; i--) {
      if (f.numerator % i == 0 && f.denominator % i == 0) return i
    }
    return 1
  }
  
  function fractionReduction(f: Fraction) {
    const denominator = maxDenominator(f)
    f.numerator /= denominator 
    f.denominator /= denominator
    return f
  }
  
  function fractionSubtraction(f1: Fraction, f2: Fraction) {
    const ajusted = fractionAjust(f1, f2)
    const sub = {
      numerator: ajusted.f1.numerator - ajusted.f2.numerator,
      denominator: f1.denominator,
    }
    return fractionReduction(sub)
  }
  
  function fractionAjust(f1: Fraction, f2: Fraction) {
    const f1D = f1.denominator
    const f2D = f2.denominator
    f1.numerator *= f2D
    f1.denominator *= f2D
    f2.numerator *= f1D
    f2.denominator *= f1D
    return {f1, f2}
  }
  
  function fractionMultiplication(f1: Fraction, f2: Fraction) {
    const mult = {
      numerator: f1.numerator * f2.numerator,
      denominator: f1.denominator * f2.denominator,
    }
    return fractionReduction(mult)
  }
  
  function fractionDivision(f1: Fraction, f2: Fraction) {
    const div = {
      numerator: f1.numerator * f2.denominator,
      denominator: f1.denominator * f2.numerator,
    }
    return fractionReduction(div)
  }
  
  function fractionSum(f1: Fraction, f2: Fraction) {
    const ajusted = fractionAjust(f1, f2)
    const sum = {
      numerator: ajusted.f1.numerator + ajusted.f2.numerator,
      denominator: ajusted.f1.denominator
    }
    return fractionReduction(sum)
  }
  
  const sumResult = fractionSum(fraction1, fraction2)
  const subResult = fractionSubtraction(fraction1, fraction2)
  const multResult = fractionMultiplication(fraction1, fraction2)
  const divResult = fractionDivision(fraction1, fraction2)
  document.write(`<p> sum = ${sumResult.numerator}/${sumResult.denominator} </p>`) 
  document.write(`<p> sub = ${subResult.numerator}/${subResult.denominator} </p>`) 
  document.write(`<p> mult = ${multResult.numerator}/${multResult.denominator} </p>`) 
  document.write(`<p> div = ${divResult.numerator}/${divResult.denominator} </p>`) 

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

let number_of_hours = +(prompt ('Введите на сколько часов хотите изменить время')as string)
let number_of_minuten = +(prompt ('Введите на сколько минут хотите изменить время')as string)
let number_of_seconds = +(prompt ('Введите на сколько секунд хотите изменить время')as string)




let date = new Date()

document.write (`<p> Настоящее время: ${date.toLocaleTimeString("ru-RU")}</p>`)

function changingTheSeconds (number_of_seconds) {
    let date1 = new Date()
    date1.setSeconds(date1.getSeconds() + number_of_seconds)
    return (date1.toLocaleTimeString("ru-RU"))
}
document.write (`<p>Изменённое время на желаемое колличество секунд: ${changingTheSeconds (number_of_seconds)}</p>`)


function changingTheMinutes (number_of_minuten) {
    let date2 = new Date()
    date2.setMinutes(date2.getMinutes() + number_of_minuten)
    return (date2.toLocaleTimeString("ru-RU"))
}
document.write (`<p>Изменённое время на желаемое колличество минут: ${changingTheMinutes (number_of_minuten)}</p>`)



function changingTheHours (number_of_hours) {
    let date3 = new Date()
    date3.setHours(date3.getHours() + number_of_hours)
    return (date3.toLocaleTimeString("ru-RU"))
}
document.write (`<p>Изменённое время на желаемое колличество часов: ${changingTheHours (number_of_hours)}</p>`)


function changeThreeTimeParameters (number_of_hours, number_of_minuten, number_of_seconds){
    let date4 = new Date() 
    date4.setSeconds(date4.getSeconds() + number_of_seconds)
    date4.setMinutes(date4.getMinutes() + number_of_minuten)
    date4.setHours(date4.getHours() + number_of_hours)
    return (date4.toLocaleTimeString("ru-RU"))

}
document.write (`<p>Изменённое время на желаемое колличество часов, минут и секунд: ${changeThreeTimeParameters (number_of_hours, number_of_minuten, number_of_seconds)}</p>`)
//==========================================================================

//Вариант 2

let h
let m
let s


function printTheTime (d) {
     s =d.getSeconds()
     m =d.getMinutes()
     h =d.getHours()
    if (h<10){
        h= '0'+h
    }
    if (m<10){
        m= '0'+m
    }
    if (s<10){
        s='0'+s
    }
    return h +':'+ m +':'+ s
}
document.write ('настоящее время ' + printTheTime(new Date ()))
console.log (h,m,s)


function countingTheTime (h,m,s,differenceHours, differenceMinutes, differenceSeconds) {
    let time = h*3600 + m*60 + s
    let differenceTime = differenceHours*3600 + differenceMinutes*60 + differenceSeconds
    let sumTime = time + differenceTime
    let h1
    let m1
    let s1
    h1 =Math.floor((sumTime/3600))%24
    m1 =Math.floor((sumTime%3600)/60)
    s1 =(sumTime%3600)%60
   if (h1<10){
       h1= '0'+h1
    }
   if (m1<10){
       m1 = '0'+m1
   }
   if (s1<10){
       s1='0'+s1
   }
   return h1+':'+m1+':'+s1
}

const differenceHours = 13
document.write (`<p>Колличество часов для изменения времени: ${differenceHours}</p>`)
document.write (`<p>Изменённое время на часы: ${countingTheTime(h,m,s,differenceHours,0,0)} </p>`)

const differenceMinutes = 85
document.write (`<p>Колличество минут для изменения времени: ${differenceMinutes}</p>`)
document.write (`<p>Изменённое время на минуты: ${countingTheTime(h,m,s,0,differenceMinutes,0)} </p>`)

const differenceSeconds = 420
document.write (`<p>Колличество секунд для изменения времени: ${differenceSeconds}</p>`)
document.write (`<p>Изменённое время на секунды: ${countingTheTime(h,m,s,0,0,differenceSeconds)} </p>`)

document.write (`<p>Изменённое время на три параметра: ${countingTheTime(h,m,s,differenceHours,differenceMinutes,differenceSeconds)} </p>`)