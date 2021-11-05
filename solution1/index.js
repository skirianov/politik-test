// using local proxy to prevent cors
// for prod environment change url to http://ws-old.parlament.ch/

const URL = 'http://localhost:8010/proxy/';

const getCouncillors = async (filter = null) => {
  
  if (filter) {
    const filterLower = filter.toLowerCase();
    switch (filterLower) {
      case 'id':
        await fetch(`${URL}councillors/basicdetails?format=json`)
        .then(response => response.json())
        .then(data => {
          let sorted = data.sort((a, b) => a.id - b.id);
          return sorted;
        });
      case 'name':
        await fetch(`${URL}councillors/basicdetails?format=json`)
        .then(response => response.json())
        .then(data => {
          let sorted = data.sort((a, b) => {
            if (a.lastName < b.lastName) {
              return -1;
            } else if (a.lastName > b.lastName) {
              return 1;
            }
            return 0;
          });
          return sorted;
        });
    }
  } else {
    await fetch(`${URL}/councillors/basicdetails?format=json`)
    .then(response => response.json())
    .then(data => { return data });
  }
}

getCouncillors(); //returns unsorted list of all Councillors

getCouncillors('id'); // returns sorted by id list of all Councillors

getCouncillors('name'); // returns sorted by Last Name list of all Councillors