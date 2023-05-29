import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "Custom-Header": "Your custom header value",
};

// 1
export const GetActiveCourses = async () => {
  const res = await axios.get(
    "https://shivayshaktibackend.onrender.com/course/activeCourses",
    {
      headers: headers,
      mode: "cors",
    }
  );
  return res.data;
};

// 2
export const fetchLogs = async (apiDate) => {
  const res = await axios.get(
    `https://shivayshaktibackend.onrender.com/logs/${apiDate}`
  );
  return res.data;
};

// 3
export const fetchTrainers = async () => {
  const res = await axios.get(
    "https://shivayshaktibackend.onrender.com/trainer"
  );
  return res.data;
};

// 4
export const deleteTrainers = async (trainerID) => {
  const res = await axios.delete(
    "https://shivayshaktibackend.onrender.com/trainer/" + trainerID
  );
  return res;
};

// 5
export const getfetchUser = async () => {
  const res = await axios.get(
    `https://shivayshaktibackend.onrender.com/trainee`
  );

  return res.data;
};

// 6
export const getfetchAllCourses = async () => {
  const res = await axios.get(
    `https://shivayshaktibackend.onrender.com/course/getCourses`
  );
  return res.data;
};

// 7
// deleteapi
export const deleteapi = "https://shivayshaktibackend.onrender.com/trainer/";

// 8
export const getCourseone = async () => {
  const response = await axios.get(
    "https://shivayshaktibackend.onrender.com/course1",
    {
      method: "GET",
      headers: headers,
      mode: "cors",
    }
  );
  return response.data;
};

// 9
export const getAllOffers = async () => {
  const res = await axios.get(
    "https://shivayshaktibackend.onrender.com/offers"
  );
  return res.data;
};

export const fetchUerByCourseName = async (select) => {
  if (select) {
    const res = await axios.get(
      `https://shivayshaktibackend.onrender.com/trainee/Course/${select}`
    );
    return res;
  }
};
