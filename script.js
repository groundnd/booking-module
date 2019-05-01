const http = require("k6/http");
// import { sleep } from "k6";

export const options = {
  vus: 100,
  duration: "3m"
};

export default function() {
  http.get(`http://localhost:3000/bookings/${Math.floor(Math.random() * 100)}`);
  // sleep(1);
};