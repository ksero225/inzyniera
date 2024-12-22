import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { OfferType } from "../utilities/OfferTypes";
import Offer from "./Offer";

const PAGE_SIZE: number = 10;

type PaginationProps = {
  pageCount: number;
  onPageChange: (selected: { selected: number }) => void;
  currentPage: number;
};

const Pagination = ({
  pageCount,
  onPageChange,
  currentPage,
}: PaginationProps) => {
  // Ustawienie forcePage tylko, jeśli totalPages > 0
  const forcePage = pageCount > 0 ? currentPage - 1 : 0;

  return (
    <div className="d-flex justify-content-center">
      <ReactPaginate
        pageCount={pageCount == 0 ? pageCount + 1 : pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={onPageChange}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item disabled"
        breakLinkClassName="page-link"
        activeClassName="active"
        activeLinkClassName="bg-primary text-white"
        forcePage={forcePage}
      />
    </div>
  );
};

export const OfferList = () => {
  const [offers, setOffers] = useState<OfferType[]>([]); // Domyślnie pusta tablica
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchOffers = async (page: number) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/offer/list?page=${
          page - 1
        }&size=${PAGE_SIZE}`
      );
      const data = await response.json();
      setOffers(data.content); // Aktualizacja stanu z nowymi ofertami
      setTotalPages(data.totalPages); // Aktualizacja liczby stron
    } catch (error) {
      console.error("Błąd podczas pobierania ofert:", error);
    }
  };

  useEffect(() => {
    fetchOffers(currentPage);
  }, [currentPage]);

  const handlePageChange = (selected: { selected: number }) => {
    const newPage = selected.selected + 1;
    setCurrentPage(newPage); // Ustawiamy nową stronę w stanie
  };

  return (
    <div className="container-xxl py-3 px-3">
      {/* Paginacja na górze */}
      <Pagination
        pageCount={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />

      {/* Sprawdzamy, czy offers nie jest undefined lub null */}
      {offers && offers.length > 0 ? (
        offers.map((offer) => <Offer key={offer.offerId} offer={offer} />)
      ) : (
        <p>No offers available</p> // Komunikat, jeśli nie ma ofert
      )}

      {/* Paginacja na dole */}
      <Pagination
        pageCount={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};
