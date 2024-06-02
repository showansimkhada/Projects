export function formatDate(date: string) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = '' + d.getFullYear();
      
      if (month.length < 2) {
          month = '0' + month;
      }
      if (day.length < 2) {
          day = '0' + day;
      }
      return [year, month, day].join('-');
}

export function getWeekNumber(date: string) {
  let cD = new Date(date);
  let sD = new Date(cD.getFullYear(), 0, 1);
  var days = Math.floor((cD.getTime() - sD.getTime()) / (24 * 60 * 60 * 1000));
  var num = Math.ceil(days / 7);
  return num;
}

export function getWeekday(date: string) {
  let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekDays[new Date(date).getDay()];
}

export function getStartDate(d: string) {
  const date = new Date(d);
  const day = date.getDay(); // 👉️ get day of week

  // 👇️ day of month - day of week (-7 if Sunday), otherwise +1
  const diff = date.getDate() - day + (day === 0 ? -7 : 1);
  const startDate = formatDate(String(new Date(date.setDate(diff))));
  return startDate;
}

export function getYear(date: string) {
  let x = date.split('-');
  return x[0]
}

// Separate the string and create array then add all the items from array
export function sumAmt(str: string) {
  let x = str.split(',')
  let sum = 0
  for (let i = 0; i < x.length; i++) {
    // check if it got other expression
    if (!x[i].match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/) || !x[i]) {
    } else {
      sum += parseFloat(x[i])
    }
  }
  return sum.toFixed(2)
}

// Convert the string into addition expression
export function stringAmt(str: string) {
  let sum = sumAmt(str)
  let x = str.replace(/,/g, '+')
  if (x[x.length-1] === '+') {
    x = x.substring(0, x.length - 1)
  } else {
    x = x.substring(0, x.length) + ' = ' + sum
  }
  return x
}