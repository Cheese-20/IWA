const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

const createArray = (length) => {
  // for the days
  const result = [];

  for (let i = 1; i <= length; i++) {
    result.push(i);
  }

  return result;
};

const createData = () => {
  const current = new Date();
  current.setDate();

  const startDay = current.getDate();
  const daysInMonth = getDaysInMonth(current);
  const days = createArray(7);
  const weeks = createArray(5);
  const result = [];

  for (const weekIndex of weeks) {
    result.push({
      week: weekIndex,
      days: [],
    });
  }

  for (const dayIndex of days) {
    const day = dayIndex - startDay;
    const isValid = day > 0 && day <= daysInMonth;

    for (let j = 0; j <= result.length - 1; j++) {
      result[j].days.push({
        dayOfWeek: dayIndex,
        value: isValid ? day : "",
      });
    }
  }

  return result;
};
console.log(createData())


const addCell = (existing, classString, value) => {
  const result = `${existing}

        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>`;

  return result;
};

const createHtml = (data) => {
    let result = ''

    for (const { week,days} of data) {
        let inner = ""
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)

        for (const { dayOfWeek, value } of days) { 
            let classString = 'table__cell'
            const isToday = new Date().getDate() === value;
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6 ; 
            const isAlternate = week % 2 === 0

            if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString = `${classString} table__cell_weekend`
            if (isAlternate) classString = `${classString} table__cell_alternate`
            inner = addCell(inner,classString,value)
        }

        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }

    return result
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)
