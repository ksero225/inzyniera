import {
  LoginModal,
  OfferList,
  RegisterModal,
  Search,
  Header,
} from "./components";

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
