import { useState, useEffect } from "react";
import "./countdown.css";

export const COUNTDOWN_TARGET = new Date("2025-03-23T16:00:00");

const getTimeLeft = () => {
  // @ts-ignore
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const labels = [
  { name: "days", value: "DÍAS" },
  { name: "hours", value: "HORAS" },
  { name: "minutes", value: "MINUTOS" },
  { name: "seconds", value: "SEGUNDOS" },
];

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdown">
      <div className="content">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div className="box" key={label}>
              <div className="value">
                <span>{value}</span>
              </div>
              <span className="label">
                {" "}
                {labels.find(({ name }) => name === label)?.value}{" "}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;
