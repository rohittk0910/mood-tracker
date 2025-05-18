import React from "react";

const moods = ["happy", "sad", "angry", "neutral"];

const emojiMap = {
  happy: "😊",
  sad: "😢",
  angry: "😠",
  neutral: "😐",
};

const MoodSelector = ({ onSelect, onClose }) => {
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-content">
        <h3>Select Mood</h3>
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => onSelect(mood)}
            aria-label={`Select ${mood}`}
          >
            {mood.charAt(0).toUpperCase() + mood.slice(1)} {emojiMap[mood]}
          </button>
        ))}
        <button className="close-btn" onClick={onClose} aria-label="Cancel">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MoodSelector;
