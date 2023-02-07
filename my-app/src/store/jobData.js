const initialState = {
  jobs: []
};

export function changeJobs(jobs) {
  return {
    type: "CHANGE_JOBS",
    payload: jobs,
  };
}

export default function jobDataReducer(jobData = initialState, action) {
  switch (action.type) {
    case "CHANGE_JOBS":
      return {
        ...jobData,
        jobs: action.payload,
      };
    default:
      return jobData;
  }
}
