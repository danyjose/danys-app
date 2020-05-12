import React, {useState} from 'react';
import axios from 'axios';

function useFetchData(url, param) {

  const [data, setData] = useState({
    responseData: null,
    errorMessage: null,
    isError: false,
    isInProgress: false,
    isDone: false,
    isSuccesfull: false,
  });

    React.useEffect(() => {
      const fetchData = async () => {
        setData({
          ...data,
          isInProgress: true,
        });
        try {
          const result = await axios.get(`${url}${param}`);
          setData({
            ...data,
            responseData: result.data,
            isSuccesfull: true,
            isInProgress: false,
            isDone: true
          });
        } catch (e) {
          setData({
            ...data,
            isError: true,
            errorMessage: e,
            isInProgress: false,
            isDone: true
          });
        }
      }
      fetchData()
    },[param]);

return data;
}

export default useFetchData;