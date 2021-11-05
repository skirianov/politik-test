import React from 'react';
import { useDispatch } from 'react-redux';
import { storeData } from './buttonSlice';
import { Button } from '@chakra-ui/react';

import {
  getById,
  getByName,
  getByUpdated
} from './helpers/button-helpers';

const ButtonComp = ({ value, data }) => {

  const dispatch = useDispatch();

  const placeholder = `${value ? `sorted by ${value}` : ''}`;

  //for local development environment to prevent cors
  // replace proxy with http://ws-old.parlament.ch/ for prod
  const proxy = 'http://localhost:8010/proxy/';

  //if data not provided fetch councillors by default
  const getCouncillors = async (filter = null, data = 'councillors') => {
    if (filter) {
      const filterLower = filter.toLowerCase();
      switch (filterLower) {
        case 'id':
          const dataSortedById = await getById(proxy, data)
          dispatch(storeData({
            name: `${data} ${placeholder}`,
            data: dataSortedById,
          }));
          break;
        case 'name':
          const nameType = data === 'councillors' ? 'lastName' : 'name';
          let sortedByName = await getByName(proxy, data, nameType);
          dispatch(storeData({
            name: `${data} ${placeholder}`,
            data: sortedByName,
          }));          
          break;
        case 'updated': 
          const sortedByDate = await getByUpdated(proxy, data);
          dispatch(storeData({
            name: `${data} ${placeholder}`,
            data: sortedByDate,
          })); 
          break;
        default:
          return null;
      }
    } else {
      const returnedData = await fetch(`${proxy}${data}?format=json`)
        .then(response => response.json())
        .then(data => { return data });
      dispatch(storeData({
        name: `${data} ${placeholder}`,
        data: returnedData,
      }));
    }
  }

  return (
    <Button
      colorScheme='teal'
      mx="2"
      value={value}
      onClick={() => getCouncillors(value, data)}
    >
      Get {data || 'councillors'} {placeholder}
    </Button>
  )
}

export default ButtonComp;
