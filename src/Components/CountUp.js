import React, { useEffect, useRef, useState } from "react";


function CountUp() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();
  const startTimer = () => {
    const countFrom = new Date("Jan 1, 2000 12:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime;
      const timeDifference = now - countFrom;
      const secondsInADay = 60 * 60 * 1000 * 24,
       secondsInAHour = 60 * 60 * 1000;
    

    const days = Math.floor((timeDifference / secondsInADay) * 1);
    const hours = Math.floor(((timeDifference % secondsInADay) / secondsInAHour) * 1);
    const minutes = Math.floor((((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1);
    const seconds = Math.floor(((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) / 1000) * 1);

    if (timeDifference < 0) {

        clearInterval(interval.current);

    } else {

    setTimerDays(days);
    setTimerHours(hours);
    setTimerMinutes(minutes);
    setTimerSeconds(seconds);

    }

      
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="countup-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calandar-clock timer-icon"></span>
          <h2>Countdown Timer</h2>
          <p>Since The Year 2000</p>
        </div>

        <div>
          <section>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>

          <section>
            <p>{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>

          <section>
            <p>{timerMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>

          <section>
            <p>{timerSeconds}</p>
            <p>
              <small>seconds</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}

export default CountUp;
