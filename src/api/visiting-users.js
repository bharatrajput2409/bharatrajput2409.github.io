import axios from "axios";
import { backend, header } from "./constants";

const baseUrl = backend + "/v1/visiting-user";
export default class VisitingUser {
  static async getVisitedUsers() {
    try {
      var res = await axios.get(baseUrl);
    } catch (err) {
      console.log(err);
    }
    return res;
  }
  static async postIpAddress() {
    try {
      var res = await axios.get("https://geolocation-db.com/json/");
      let backendRes = await axios.post(baseUrl, res.data, { headers: header });
    } catch (err) {
      console.log(err, err.response);
    }
  }
}
