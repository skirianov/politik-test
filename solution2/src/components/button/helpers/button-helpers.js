export const getById = async (proxy, data) => {
  return await fetch(`${proxy}${data}?format=json`)
    .then(response => response.json())
    .then(data => {
      let sorted = data.sort((a, b) => a.id - b.id);
      return sorted;
    });
};

export const getByName = async (proxy, data, nameType) => {
  return await fetch(`${proxy}${data}?format=json`)
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
}

export const getByUpdated = async (proxy, data) => {
  return await fetch(`${proxy}${data}?format=json`)
    .then(response => response.json())
    .then(data => {
      let sorted = data.sort((a, b) => a.updated - b.updated);
      return sorted;
    })
}