import React from "react";
import Feedback from "./Feedback/Feedback";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        marginLeft: 20,
      }}
    >
      <Feedback />
    </div>
    
  );
};
