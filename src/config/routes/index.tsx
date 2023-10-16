import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../../pages/auth/sign-up";
import SignIn from "../../pages/auth/sign-in";
import AdminDashboard from "../../pages/admin/dashboard";
import StudentDashboard from "../../pages/student/dashboard";
import NotFound from "../../pages/not-found";
import InstituteDashboard from "../../pages/institude/dashboard";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          {/* <Route path="sign-up" element={<Signup />} /> */}
          <Route path="sign-in" element={<SignIn />} />
          <Route path="admin-dashboard/*" element={<AdminDashboard />} />
          <Route path="institute-dashboard/*" element={<InstituteDashboard />} />
          <Route path="student-dashboard/*" element={<StudentDashboard />} />
          <Route path="*" element={< NotFound />} />
          {/* <Route path="/:ints/registration" element={< RegistrationForm />} />  // add short name here /: inst*/} 
        </Routes>
      </Router>
    </>
  );
}
