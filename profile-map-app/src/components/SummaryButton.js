import React from 'react';

const SummaryButton = ({ profile, onClick }) => {
  return (
    <button className="summary-button" onClick={() => onClick(profile)}>
      Summary
    </button>
  );
};

export default SummaryButton;