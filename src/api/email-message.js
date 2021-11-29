import axios from "axios";

export default class EmailMessage {
  static async sendMessage(data) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data._replyto)) {
      return "Invalid email";
    }
    if (data.message === "") {
      return "Message can't be empty";
    }
    try {
      var res = await axios.post("https://formspree.io/f/myyogpwb", data);
      return "Message sent";
    } catch (err) {
      console.log(err, err.response);
      if (err.response.error === "Validation errors") {
        return "Invalid email";
      }
      return "Something went wrong";
    }
  }
}
