import axios from 'axios';

//http://localhost:5000/api/v1/graydz/signup
const API = axios.create({ baseURL: 'http://localhost:5000/api/v1/graydz' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const getPeople = (email, turma, _id) => API.get(`/people?turma=${turma}&email=${email}&_id=${_id}`);

export const fetchPosts = (filters) => API.get(`/activities?email=${filters.email}&turma=${filters.turma}`);
export const createPost = (newPost) => API.post('/posts', newPost);
// export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/signin', formData);
export const signUp = (formData) => API.post('/signup', formData);