import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { OfferType } from "../utilities/OfferTypes";
import Offer from "./Offer";
import { Search } from "./Search";

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
        pageCount={pageCount === 0 ? pageCount + 1 : pageCount}
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
  const [offers, setOffers] = useState<OfferType[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    userInput: "",
    operatingMode: "",
    employmentType: "",
    jobLocation: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchOffers = async (page: number, appliedFilters: any) => {
    setIsLoading(true); // Rozpoczęcie ładowania
    setError(""); // Reset błędu
    try {
      const queryParams = new URLSearchParams({
        page: (page - 1).toString(),
        size: PAGE_SIZE.toString(),
        ...appliedFilters,
      });

      const response = await fetch(
        `http://localhost:8080/api/offer/list?${queryParams.toString()}`
      );
      if (!response.ok) {
        throw new Error("Nie udało się pobrać ofert.");
      }

      const data = await response.json();
      setOffers(data.content); // Aktualizacja stanu z nowymi ofertami
      setTotalPages(data.totalPages); // Aktualizacja liczby stron
    } catch (error: any) {
      setError(error.message || "Wystąpił błąd podczas ładowania ofert.");
    } finally {
      setIsLoading(false); // Koniec ładowania
    }
  };

  useEffect(() => {
    fetchOffers(currentPage, filters);
  }, [currentPage, filters]);

  const handlePageChange = (selected: { selected: number }) => {
    const newPage = selected.selected + 1;
    setCurrentPage(newPage);
  };

  const handleSearch = (appliedFilters: any) => {
    setFilters(appliedFilters);
    setCurrentPage(1);
  };

  return (
    <div className="container-xxl py-3 px-3">
      {/* Formularz wyszukiwania */}
      <Search onSearch={handleSearch} />

      {/* Loader lub komunikat błędu */}
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Ładowanie...</span>
          </div>
        </div>
      ) : error ? (
        <div className="text-center text-danger py-3">
          <p>Błąd z połączeniem się z serwerem</p>
        </div>
      ) : (
        <>
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
            <p className="text-center">Brak dostępnych ofert</p>
          )}

          {/* Paginacja na dole */}
          <Pagination
            pageCount={totalPages}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};
