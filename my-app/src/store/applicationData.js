const initialState = {
  applications: [],
};

export function changeApplications(applications) {
  return {
    type: "CHANGE_APPLICATIONS",
    payload: applications,
  };
}

export default function applicationsDataReducer(applicationsData = initialState, action) {
  switch (action.type) {
    case "CHANGE_APPLICATIONS":
      return {
        ...applicationsData,
        applications: action.payload,
      };
    default:
      return applicationsData;
  }
}
