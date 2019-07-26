import React, { useState } from 'react';

const ActivityContext = React.createContext();

const bookClass = gymClass => {};

const ActivityProvider = props => {
  const bookClass = gymClass => {
    gymClass.booked = true;
    setState(...this.state, gymClass);
  };
  const [state, setState] = useState({
    gymClasses: [
      {
        name: 'Vinyasa Flow Yoga',
        booked: true
      },
      {
        name: 'Boxing',
        booked: false
      },
      {
        name: 'TRX Training',
        booked: false
      }
    ],
    personalTrainers: []
  });
  return (
    <ActivityContext.Provider value={[state, setState]}>
      {props.children}
    </ActivityContext.Provider>
  );
};

export { ActivityContext, ActivityProvider };
