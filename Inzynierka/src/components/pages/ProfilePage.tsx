import { useState } from "react";

import {
  UserInformationTable,
  UserInterestsTable,
  UserTechnologiesTable,
  UserLinksTable,
  UserAboutMeTable,
  UserExperianceTable,
} from "./profileTables";
import { TabButtons } from "./TabButtons";

type Tabs =
  | "details"
  | "interests"
  | "tech"
  | "expierience"
  | "links"
  | "about";

export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<Tabs>("details");
  // 1: Dane użytkownika, 2: Zainteresowania, 3: Technologie, 4: Linki, 5: Krótki opis? O mnie?

  return (
    <>
      <div className="container-xxl py-3 px-3 mt-5">
        <div className="row justify-content-center">
          {/* Zdjęcie profilowe */}
          <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Zdjęcie profilowe"
              className="rounded-circle mb-3"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <br />
            <button className="btn btn-sm btn-primary">Zmień zdjęcie</button>
          </div>
          {/* Przełączniki tabel */}
          <div className="col-md-8">
            <h2 className="text-center">Twój Profil</h2>
            <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* Tabele w zależności od aktywnej zakładki */}
            <div
              //PRZENIEŚ DO DO JAKICHŚ STYLÓW !!!
              style={{
                minHeight: "400px", // Ustaw minimalną wysokość
                transition: "0.3s ease-in-out", // Opcjonalna animacja
              }}
            >
              {activeTab === "details" && <UserInformationTable />}
              {activeTab === "expierience" && <UserExperianceTable />}
              {activeTab === "tech" && <UserTechnologiesTable />}
              {activeTab === "links" && <UserLinksTable />}
              {activeTab === "about" && <UserAboutMeTable />}
              {activeTab === "interests" && <UserInterestsTable />}
            </div>
          </div>
        </div>
        {/* Sekcja CV */}
        <div className="row mt-5">
          <div className="col-md-12">
            <h3>Twoje CV</h3>
            <p>Prześlij lub zaktualizuj swoje CV w formacie PDF:</p>
            <input type="file" accept=".pdf" className="form-control mb-3" />
            <button className="btn btn-success">Prześlij CV</button>
          </div>
        </div>
        {/* Statystyki */}
        <div className="row mt-5">
          <div className="col-md-4 text-center">
            <h5>Złożone aplikacje</h5>
            <p className="display-6">12</p>
          </div>
          <div className="col-md-4 text-center">
            <h5>Zapisane oferty</h5>
            <p className="display-6">5</p>
          </div>
          <div className="col-md-4 text-center">
            <h5>Otrzymane odpowiedzi</h5>
            <p className="display-6">3</p>
          </div>
        </div>
      </div>
    </>
  );
};
