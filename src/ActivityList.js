import React, { useContext } from 'react';

import { ActivityContext, bookClass } from './ActivityContext';

const x = {
  gymClasses: [
    {
      name: 'hahahahahahaha',
      booked: false
    },
    {
      name: 'Hack',
      booked: false
    },
    {
      name: 'TRX Full Train',
      booked: false
    }
  ]
};

const ActivityList = () => {
  const [state, setState] = useContext(ActivityContext);
  console.log('list: ', state);
  return (
    <>
      {state.gymClasses.map((gymClass, index) => (
        <div className='box' key={index}>
          <div className='class-title' key={index}>
            {gymClass.name}
            <button
              onClick={() => {
                state.gymClasses[index].booked = true;
                setState(...state, { ...state.gymClasses, gymClass });
                // const updatedState = [...state, ];
                // console.log(state[index]);
                // state[index].booked = true;
                // bookClass(gymClass);
                setState(x);
              }}
            >
              {gymClass.booked ? 'Booked' : 'Book'}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ActivityList;
