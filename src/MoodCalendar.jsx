import React, { useState } from "react";
import MoodSelector from "./MoodSelector";

const moods = {
  happy: "😊",
  sad: "😢",
  angry: "😠",
  neutral: "😐",
};

const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

const MoodCalendar = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [moodData, setMoodData] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);

  const handleMoodSelect = (mood) => {
    setMoodData((prev) => ({
      ...prev,
      [`${year}-${month + 1}-${selectedDate}`]: mood,
    }));
    setSelectedDate(null);
  };

  const getMood = (day) => moodData[`${year}-${month + 1}-${day}`];

  const blankDays = Array.from({ length: firstDay }, (_, i) => <div key={`b${i}`} className="day empty" />);

  const dayCells = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const mood = getMood(day);
    return (
      <div
        key={day}
        className="day"
        onClick={() => setSelectedDate(day)}
        style={{
          backgroundColor:
            mood === "happy" ? "#d4fdd4" :
            mood === "sad" ? "#d4e7fd" :
            mood === "angry" ? "#fdd4d4" :
            mood === "neutral" ? "#eeeeee" : "#fff"
        }}
      >
        <div className="date">{day}</div>
        <div className="emoji">{moods[mood]}</div>
      </div>
    );
  });

  return (
    <div className="calendar-container">
      <div className="controls">
        <button onClick={handlePrevMonth}>⬅️</button>
        <h3>{new Date(year, month).toLocaleString("default", { month: "long", year: "numeric" })}</h3>
        <button onClick={handleNextMonth}>➡️</button>
      </div>
      <div className="weekdays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="weekday">{d}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {blankDays}
        {dayCells}
      </div>
      {selectedDate && (
        <MoodSelector
          onSelect={handleMoodSelect}
          onClose={() => setSelectedDate(null)}
        />
      )}
    </div>
  );
};

export default MoodCalendar;
