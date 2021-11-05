import React from 'react';

import Button from './components/button/Button';

const App = () => {

    return (
    <div>
      <Button value="" />
      <Button value="id" data="cantons" />
      <Button value="updated" data="affairs/states" /> {/*//Affairs does not provide any Date, so was choosen affair states */}
    </div>
  )
}

export default App;
