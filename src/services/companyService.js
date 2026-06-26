import api from "../api/axios";
import endpoints from "../api/endpoints";

const companyService = {
  getDashboard: async () => {
  const response = await api.get(
    endpoints.companyDashboard
  );

  return response.data.data;
},

createJob: async (payload) => {
  const response = await api.post(
    endpoints.companyCreateJob,
    payload
  );

  return response.data;
},

  getCandidates: async () => {
    const response = await api.get(
      endpoints.companyCandidates
    );

    return response.data;
  },

  getJobs: async () => {
    const response = await api.get(
      endpoints.companyJobs
    );

    return response.data;
  },
};

export default companyService;