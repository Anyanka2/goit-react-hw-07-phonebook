import axios from 'axios';

const BASEURL = 'https://64fef441f8b9eeca9e295705.mockapi.io';

export const contactAPI = axios.create({
  BaseURL: 'https://64fef441f8b9eeca9e295705.mockapi.io/api/v1/',
});

export const getContacts = async () => {
  const { data } = await contactAPI.get(`${BASEURL}/contacts`);
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactAPI.post(`${BASEURL}/contacts`, contact);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await contactAPI.delete(`${BASEURL}/contacts/${id}`);
  return data;
};
// axios.defaults.baseURL = 'https://64fef441f8b9eeca9e295705.mockapi.io/api/v1/';

// // export const contactAPI = axios.create({
// //   baseURL: 'https://664fef441f8b9eeca9e295705.mockapi.io/api/v1/',
// // });

// export const getContacts = async () => {
//   const { data } = await axios.get(`/contacts`);
//   return data;
// };

// export const addContacts = async contact => {
//   const { data } = await axios.post(`/contacts`, contact);
//   return data;
// };

// export const deleteContacts = async id => {
//   const { data } = await axios.delete(`/contacts/${id}`);
//   return data;
// };
