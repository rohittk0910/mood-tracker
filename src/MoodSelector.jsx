import React from "react";

const moods = ["happy", "sad", "angry", "neutral"];

const MoodSelector = ({ onSelect, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Select Mood</h3>
        {moods.map((mood) => (
          <button key={mood} onClick={() => onSelect(mood)}>
            {mood} {mood === "happy" ? "😊" :
                    mood === "sad" ? "😢" :
                    mood === "angry" ? "😠" : "😐"}
          </button>
        ))}
        <button className="close-btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default MoodSelector;
