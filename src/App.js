import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { dashboardTheme } from "./dashboardTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import PageRoutes from "./PageRoutes";
import LoginGeneralUser from "./pages/LoginGeneralUser/LoginGeneralUser";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import LoginBusEmployee from "./pages/LoginBusEmployee/LoginBusEmployee";
import GeneralUserProfile from "./pages/GeneralUserProfile/GeneralUserProfile";
import FormEditEmployee from "./pages/FormEditEmployee/FormEditEmployee";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import EmailVerificationSend from "./pages/EmailVerificationSend/EmailVerificationSend";
import EmailVerificationResult from "./pages/EmailVerificationResult/EmailVerificationResult";
import SuccessComponent from "./pages/EmailVerificationResult/SuccessComponent";
import FailComponent from "./pages/EmailVerificationResult/FailComponenet";
import NewPassword from "./pages/NewPassword/NewPassword";
import CRUDtablePackage from "./components/CRUDtablePackage/CRUDtablePackage";
import RouteManagement from "./pages/Package/Package";

import ReviewRating from "./pages/ReviewRating/ReviewRating";
import ConductorPage from "./pages/ConductorPage/ConductorPage";
import MyLayout from "./components/MyLayout";
import ActivityHistory from "./pages/ActivityHistory/AvtivityHistory";
import Dummy from "./dummy";
import EditCommentBox from "./components/ReviewPage/EditCommentBox";
import FormAddAdmin from "./pages/FormAddAdmin/FormAddAdmin.js";
import FormAdminSignIn from "./pages/FormAdminSignIn/FormAdminSignIn.js";
import PasswordVerificationPage from "./pages/PasswordVerificationPage/PasswordVerificationPage.js";
function App() {
  return (
    <ThemeProvider theme={dashboardTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/*" element={<PageRoutes />} />
          <Route path="/signin" element={<LoginGeneralUser />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signin-employee" element={<LoginBusEmployee />} />

          <Route path="/location" element={<ConductorPage />} />

          <Route path="/reviews/:busID" element={<ReviewRating />} />
          <Route path="/reviewsedit/:id" element={<EditCommentBox />} />

          <Route path="/LoginBusEmployee" element={<LoginBusEmployee />} />
          <Route path="/LoginGeneralUser" element={<LoginGeneralUser />} />

          <Route path="/ActivityHistory" element={<ActivityHistory />} />
          <Route path="/GeneralUserProfile" element={<GeneralUserProfile />} />
          <Route path="/edituser/:id" element={<FormEditEmployee />} />
          <Route path="/verifyEmail" element={<EmailVerificationSend />} />
          <Route path="/verify-email" element={<EmailVerificationResult />} />
          <Route path="/SuccessComponent" element={<SuccessComponent />} />
          <Route path="/FailComponent" element={<FailComponent />} />
          <Route path="/NewPassword/:email" element={<NewPassword />} />
          <Route
            path="/PasswordVerification"
            element={<PasswordVerificationPage />}
          />
          <Route
            path="/otpVerification/:email"
            element={<EmailVerification />}
          />

          <Route path="/reviews" element={<MyLayout />} />

          <Route path="/profile" element={<GeneralUserProfile />} />
          <Route path="/activityhistory" element={<ActivityHistory />} />
          <Route path="/dummy" element={<Dummy />} />
          <Route path="/adminAdd" element={<FormAddAdmin />} />
          <Route path="/adminSignin" element={<FormAdminSignIn />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
