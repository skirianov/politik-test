import React from 'react';

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
          await fetch(`${proxy}${data}?format=json`)
            .then(response => response.json())
            .then(data => {
              let sorted = data.sort((a, b) => a.id - b.id);
              return sorted;
            });
          break;
        case 'name':
          const nameType = data === 'councillors' ? 'lastName' : 'name';

          await fetch(`${proxy}${data}?format=json`)
            .then(response => response.json())
            .then(data => {
              let sorted = data.sort((a, b) => {
                if (a[nameType] < b[nameType]) {
                  return -1;
                } else if (a[nameType] > b[nameType]) {
                  return 1;
                }
                return 0;
              });
              return sorted;
            });
          break;
        case 'updated': 
          await fetch(`${proxy}${data}?format=json`)
            .then(response => response.json())
            .then(data => {
              let sorted = data.sort((a, b) => a - b);
              console.log(sorted);
              return sorted;
            })
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
