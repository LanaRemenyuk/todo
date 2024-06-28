import httpService from "../http.service";

const tasksEndpoint = "/tasks";

const tasksService = {
  get: async () => {
    const { data } = await httpService.get(tasksEndpoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.post(tasksEndpoint + "/create", payload);
    return data;
  },
  remove: async (taskId) => {
    const { data } = await httpService.delete(tasksEndpoint + "/" + taskId);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      tasksEndpoint + "/" + payload._id + "/edit",
      payload
    );

    return data;
  }
};
export default tasksService;
