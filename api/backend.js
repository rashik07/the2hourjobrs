// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

let baseUrl;
if (typeof window == "undefined") {
  baseUrl = "http://127.0.0.1:8000/api/";
}
else if (window.location.origin === "http://localhost:3000") {
  baseUrl = "http://127.0.0.1:8000/api/";
} else {
  baseUrl = window.location.origin + "/api/";
}
export default axios.create({
  baseURL: baseUrl,
});