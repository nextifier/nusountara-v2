export default ({
  app
}, inject) => {
  inject('formatDate', (stringDate, withTime) => {
    const d = new Date(stringDate);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = days[d.getDay()];

    const months = [
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
    const monthName = months[d.getMonth()];

    const date = d.getDate();

    const year = d.getFullYear();

    const hours = d.getHours();
    const minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    const seconds = d.getSeconds();

    if (withTime) {
      let formatted = `${monthName} ${date}, ${year} | ${hours}:${minutes}`;
      return formatted;
    } else {
      let formatted = `${monthName} ${date}, ${year}`;
      return formatted;
    }
  });
}
