import axiosInstance from '@/interceptors/axios';

const endPoint = '/api/';

const formService = {
  submit: formData => axiosInstance.post(`${endPoint}post`, formData),
  generateText: prompt => axiosInstance.post(`${endPoint}generate`, { prompt }),
};

export default formService;
