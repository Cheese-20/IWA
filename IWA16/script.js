const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const createHtml = (athlete) => {
  const { firstName, surname, id, races } = athlete; // deconstructing from athlete
  const [latestRace] = races.reverse(); // getting the last race

  const lastRaceDate = new Date(latestRace.date); // getting the date of the last date

  const date = lastRaceDate.getDate();
  const month = MONTHS[lastRaceDate.getMonth()];
  const year = lastRaceDate.getFullYear();
  const  [first , second , third , fourth] = latestRace.time;
  let total = first + second + third + fourth;

  const TimeFormatted = `${String(Math.floor(total / 60)).padStart(
    2,
    "0"
  )}:${String(total % 60).padStart(2, "0")}`; 

  const inner = document.querySelector(`[data-athlete="${id}"]`);
  inner.innerHTML = `
      <h2>Athlete: ${id}</h2>
      <dl>
        <dt>Full name</dt>
        <dd>${firstName} ${surname}</dd>
        <dt>Total Races</dt>
        <dd>${races.length}</dd> 
        <dt>Event Date (Latest)</dt>
        <dd>${date} ${month} ${year}</dd>
        <dt>Total Time (Latest)</dt>
        <dd>${TimeFormatted}</dd>
      </dl>
    `;
}; // displaying on the html

createHtml(data.response.data.NM372);
createHtml(data.response.data.SV782);
