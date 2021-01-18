import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 2tjjLQt-Pl_qekpAUbYaZcdBP-nej_gNhp-rA78o_TQ",
  },
});
