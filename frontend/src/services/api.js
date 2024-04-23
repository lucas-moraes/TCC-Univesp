import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });
  }

  async get(endpoint) {
    return this.api.get(endpoint);
  }

  async post(endpoint, data) {
    return this.api.post(endpoint, data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  }

  async put(endpoint, data) {
    return this.api.put(endpoint, data);
  }

  async delete(endpoint) {
    return this.api.delete(endpoint);
  }
}

export default new Api();
