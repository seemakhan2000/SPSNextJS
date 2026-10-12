// src/features/home/components/ServiceTabs.jsx
"use client";

const tabs = [
  { slug: "cybersecurity", name: "Cybersecurity", icon: "fa-solid fa-shield-halved" },
  { slug: "cloud", name: "Cloud", icon: "fa-solid fa-cloud" },
  { slug: "ai-automation", name: "AI & Automation", icon: "fa-solid fa-robot" },
  { slug: "collaboration", name: "Collaboration", icon: "fa-solid fa-users" },
];

export default function ServiceTabs({ activeFamily, onFamilyChange }) {
  return (
    <ul className="flex flex-wrap justify-center">
      {tabs.map((tab) => {
        const isActive = activeFamily === tab.slug;

        return (
          // NOTE: "tab-title" / "tab-underline" classes yahan jaan bujh kar nahi hain.
          // Template ka global JS un classes par click pakad kar content hide kar deta tha.
          <li
            key={tab.slug}
            style={{
              border: "1px solid #416482",
              marginLeft: "5px",
              borderRadius: "10px",
            }}
          >
            <button
              type="button"
              onClick={() => onFamilyChange(tab.slug)}
              className={`py-2.5 px-5 font-medium -mb-0.5 rounded-2lg cursor-pointer relative duration-500 ${
                isActive ? "bg-primary !text-white" : "text-secondary"
              }`}
            >
              <i className={`${tab.icon} me-2`} /> {tab.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}