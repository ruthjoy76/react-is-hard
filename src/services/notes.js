import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

function getAllNotes() {
  return axios.get(baseUrl);
}
