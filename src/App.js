import React from 'react';

import ActivityList from './ActivityList';
import { ActivityProvider } from './ActivityContext';

const App = () => {
  return (
    <ActivityProvider>
      <div className='container'>
        <ActivityList />
      </div>
    </ActivityProvider>
  );
};

export default App;
