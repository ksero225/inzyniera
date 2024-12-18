import { OfferList, Search } from "..";

export const HomePage = () => {
  return (
    <>
      <Search />
      <div className="container-xxl py-3 px-3">
        <OfferList />
      </div>
    </>
  );
};
