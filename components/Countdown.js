var moment = require('moment');
moment.locale('nb');

// Countdowm to next camp or signup deadline?
 
const Countdown = () => {
    var eventDate = moment("2019-11-24"); 
    var todaysDate = moment();
    var daysRemaining = eventDate.to(todaysDate, true);

    return (
        <h3 className="ttu f4 white">
            <span>{daysRemaining}</span> til neste parti
        </h3>
    );
};

export default Countdown;
