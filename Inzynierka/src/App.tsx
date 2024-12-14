import { OfferList } from "./components/OfferList";
import Header from "./components/Header";
import { LoginModal } from "./components/LoginModal";
import { RegisterModal } from "./components/RegisterModal";
import { Search } from "./components/Search";

function App() {
  return (
    <>
      <Header />
      <LoginModal />
      <RegisterModal />
      <Search />
      <div className="container-xxl py-3 px-3">
        <OfferList />
      </div>
    </>
  );
}

export default App;
