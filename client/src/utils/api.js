import axios from "axios";

export default {
  // Gets all books
  getPeopleList: function() {
    return axios.get("/api/peoplelist");
  }
};


//ADD a post