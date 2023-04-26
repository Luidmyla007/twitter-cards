import axios from "axios";
axios.defaults.baseURL = axios.defaults.baseURL = 'https://644268a633997d3ef90f6160.mockapi.io/';

export const fetchUsers = async (page,per_page) => {
    try {
        if (page && per_page) {
        return await axios
          .get(`users/?page=${page}&limit=${per_page}`)
            .then(({ data }) => {               
            return data;
          });
      }
      return await axios.get(`users/`).then( ({ data }) => {
           return data;
      });
    }
    catch(err) {
        console.log(err);
    }
  };

  export const refreshUsers = async(id,body)=>{
   try{
    await axios.put(`users/${id}`, {...body}).then( ({ data }) => {
     return data;
    })}
    catch(err) {
        console.log(err);
    }
  }