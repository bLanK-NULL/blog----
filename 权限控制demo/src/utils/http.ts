import axios from "axios";
import { baseURL } from "./baseURL";
const http = axios.create({
  baseURL: baseURL + "/api",
});

export {
    http
}
