import React from 'react';

import {
  getById,
  getByName,
  getByUpdated
} from './helpers/button-helpers';

const Button = ({ value, data }) => {

  //for local development environment to prevent cors
  // replace proxy with http://ws-old.parlament.ch/ for prod
  const proxy = 'http://localhost:8010/proxy/';

  //if data not provided fetch councillors by default
  const getCouncillors = async (filter = null, data = 'councillors') => {
    if (filter) {
      const filterLower = filter.toLowerCase();
      switch (filterLower) {
        case 'id':
          getById(proxy, data);
          break;
        case 'name':
          const nameType = data === 'councillors' ? 'lastName' : 'name';
          getByName(proxy, data, nameType);          
          break;
        case 'updated': 
          getByUpdated(proxy, data);
          break;
        default:
          return null;
      }
    } else {
      await fetch(`${proxy}${data}?format=json`)
        .then(response => response.json())
        .then(data => { return data });
    }
  }

  return (
    <button
      value={value}
      onClick={() => getCouncillors(value, data)}
    >
      Get {data || 'councillors'} {value ? `sorted by ${value}` : null}
    </button>
  )
}

export default Button;
