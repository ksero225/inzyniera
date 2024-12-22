type Tabs =
  | "details"
  | "interests"
  | "tech"
  | "expierience"
  | "links"
  | "about";

type TabButtonsProps = {
  activeTab: Tabs;
  setActiveTab: (tab: Tabs) => void;
};

export const TabButtons: React.FC<TabButtonsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="text-center">
      <div className="btn-group mt-3 mb-3">
        <button
          className={`btn ${
            activeTab === "details" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab("details")}
        >
          Dane użytkownika
        </button>
        <button
          className={`btn ${
            activeTab === "expierience" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab("expierience")}
        >
          Doświadczenie
        </button>
        <button
          className={`btn ${
            activeTab === "interests" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab("interests")}
        >
          Zainteresowania
        </button>
        <button
          className={`btn ${
            activeTab === "tech" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab("tech")}
        >
          Technologie
        </button>
        <button
          className={`btn ${
            activeTab === "links" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab("links")}
        >
          Linki
        </button>
        <button
          className={`btn ${
            activeTab === "about" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab("about")}
        >
          O mnie
        </button>
      </div>
    </div>
  );
};
