const companies = [
  {
    name: "Vodafone",
    logo: (
      <div className="flex items-center gap-2">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="13" stroke="#c5c5c5" strokeWidth="2.5" fill="none" />
          <path
            d="M14 7 C14 7, 20 10, 20 16 C20 20, 17 22, 14 22 C11 22, 8 20, 8 16 C8 10, 14 7, 14 7Z"
            fill="none"
            stroke="#c5c5c5"
            strokeWidth="2"
          />
        </svg>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: "20px", color: "#c5c5c5", fontWeight: 400 }}>
          vodafone
        </span>
      </div>
    ),
  },
  {
    name: "Intel",
    logo: (
      <span style={{ fontFamily: "'Arial', sans-serif", fontSize: "26px", color: "#c5c5c5", fontWeight: 300, letterSpacing: "-0.02em" }}>
        intel.
      </span>
    ),
  },
  {
    name: "Tesla",
    logo: (
      <span style={{ fontFamily: "'Arial Narrow', 'Arial', sans-serif", fontSize: "22px", color: "#c5c5c5", fontWeight: 700, letterSpacing: "0.25em" }}>
        T E S L A
      </span>
    ),
  },
  {
    name: "AMD",
    logo: (
      <span style={{ fontFamily: "'Arial Black', 'Arial', sans-serif", fontSize: "24px", color: "#c5c5c5", fontWeight: 900 }}>
        AMD<span style={{ fontSize: "18px" }}>⌐</span>
      </span>
    ),
  },
  {
    name: "Talkit",
    logo: (
      <span style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "22px", color: "#c5c5c5", fontWeight: 700, fontStyle: "italic" }}>
        Talkit
      </span>
    ),
  },
];

export default function CompanyLogos() {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-400 mb-6" style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}>
          Companies we helped grow
        </p>
        <div className="flex flex-wrap items-center justify-between gap-y-6 gap-x-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center opacity-60 hover:opacity-90 transition-opacity duration-200 cursor-pointer"
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}