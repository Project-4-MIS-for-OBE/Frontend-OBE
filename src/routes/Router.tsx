// import { useEffect, useState } from "react";
// import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PROTECTED_PATH } from "../constants/path.route";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={PROTECTED_PATH.INSTRUCTOR_SUBJECT} />
          <Route path={PROTECTED_PATH.EDIT_POINT} />
          <Route path={PROTECTED_PATH.INSTRUCTOR_CONCLUDE} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
