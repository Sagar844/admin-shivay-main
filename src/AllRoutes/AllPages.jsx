import React from "react";

import Home from "../pages/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import Account from "../pages/Accounts/Account";
import Courses from "../pages/Courses/Courses";
import Login from "../pages/Auth/Login";
import GroupSessionForm from "../pages/GroupSessionForm";
import OneOnOne from "../pages/OneOnOne";
import Offers from "../pages/AddOffers/Offers";
import AuthRoute from "../components/AuthRoute";
import TrainerForm from "../pages/TrainerFroms/TrainerForm";
import { withUserToken } from "../withProvider/withProvider";

const AllPages = ({ token }) => {
  console.log(token)
  return (
    <div>
      <Routes>
        <Route
          path="*"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />

        {token && (
          <>
            <Route path="/" element={<Home />}></Route>
            <Route path="/offers" element={<Offers />}></Route>

            <Route path="/Trainers" element={<Account />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route
              path="/courses/add-new-course/group-session"
              element={<GroupSessionForm />}
            ></Route>
            <Route
              path="/courses/add-new-course/one-on-one"
              element={<OneOnOne />}
            ></Route>
            <Route
              path="/trainer/add-new-trainer"
              element={<TrainerForm />}
            ></Route>
          </>
        )}
      </Routes>
    </div>
  );
};

export default withUserToken(AllPages);
