import http from "../src/common.js";
class data {
    getAll() {
      return http.get("/data");
    }
    get(id) {
      return http.get(`/file/${id}`);
    }
    create(data) {
      return http.post("/login", data);
    }
    update(id, data) {
      return http.put(`/file/${id}`, data);
    }
    delete(id) {
      return http.delete(`/file/${id}`);
    }
    // deleteAll() {
    //   return http.delete(`/file`);
    // }
    // findByTitle(title) {
    //   return http.get(`/tutorials?title=${title}`);
    // }
  }
  export default new TutorialDataService();