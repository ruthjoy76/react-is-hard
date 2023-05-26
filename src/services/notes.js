import axios from "axios";
const baseUrl = "https://backend-s1n9.onrender.com";

function getAllNotes() {
  return axios.get(baseUrl);
}

function createNote(newNote) {
  return axios.post(baseUrl, newNote);
}

function updateNote(id, newNote) {
  return axios.put(`${baseUrl}/${id}`, newNote);
}

function deleteNote(id) {
  return axios.delete(`${baseUrl}/${id}`);
}

export default {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};
