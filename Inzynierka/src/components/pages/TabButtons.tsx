type TabButtonsProps = {
  activeTab: number;
  setActiveTab: (tab: number) => void;
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
            activeTab === 1 ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Dane użytkownika
        </button>
        <button
          className={`btn ${
            activeTab === 2 ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Doświadczenie
        </button>
        <button
          className={`btn ${
            activeTab === 6 ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab(6)}
        >
          Zainteresowania
        </button>
        <button
          className={`btn ${
            activeTab === 3 ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab(3)}
        >
          Technologie
        </button>
        <button
          className={`btn ${
            activeTab === 4 ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab(4)}
        >
          Linki
        </button>
        <button
          className={`btn ${
            activeTab === 5 ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setActiveTab(5)}
        >
          O mnie
        </button>
      </div>
    </div>
  );
};
