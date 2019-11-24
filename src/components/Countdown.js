const moment = require("moment");
moment.locale("nb");

// Countdowm to next camp or signup deadline?

const Countdown = () => {
  const eventDate = moment("2019-12-24");
  const todaysDate = moment();
  const daysRemaining = eventDate.to(todaysDate, true);

  return (
    <h3 className="ttu f4 white">
      <span>{daysRemaining}</span> til julaften!
    </h3>
  );
};

export default Countdown;
