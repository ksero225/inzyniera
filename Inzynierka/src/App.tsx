import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  HomePage,
  ProfilePage,
  Header,
  LoginModal,
  RegisterModal,
  AboutWebsite,
  CreateOfferForm,
} from "./components";
import { AuthProvider } from "./components/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <LoginModal />
        <RegisterModal />
        {/* Definicja tras */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/offerForm" element={<CreateOfferForm />} />
          <Route path="/aboutWebsite" element={<AboutWebsite />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
