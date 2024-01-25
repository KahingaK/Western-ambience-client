import React, { useState, useEffect } from "react";
import { services } from "../data";
import "../style.css";

const ServiceCard = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const [activeService, setActiveService] = useState(
    services.find((service) => service.id === activeTab)
  );

  const shiftTabs = (linkId) => {
    const tabContentWrapper = document.querySelector(".tab-content-wrapper");
    const allTabs = document.querySelectorAll(".tab-content");

    allTabs.forEach((tab, i) => {
      if (tab.id.includes(linkId)) {
        allTabs.forEach((tabItem) => {
          tabItem.style = `transform: translateY(-${i * 300}px);`;
        });
      }
    });
  };

  const handleTabClick = (e, linkId) => {
    e.preventDefault();
    setActiveTab(linkId);
    shiftTabs(linkId);
  };

  useEffect(() => {
    const currentHash = window.location.hash;
    let activeLink = document.querySelector(".tabs a");

    if (currentHash) {
      const visibleHash = document.getElementById(currentHash.replace("#", ""));

      if (visibleHash) {
        activeLink = visibleHash;
      }
    }

    activeLink.classList.toggle("active");
    shiftTabs(activeLink.id);

    // Cleanup event listener on component unmount
    return () => {
      allLinks.forEach((elem) => {
        elem.removeEventListener("click", handleTabClick);
      });
    };
  }, []);

  useEffect(() => {
    setActiveService(services.find((service) => service.id === activeTab));
  }, [activeTab]);

  const allLinks = document.querySelectorAll(".tabs a");

  return (
    <div>
      <div className="tabs-container">
        <div>
          <img
            className="h-24"
            src={activeService.image}
            alt={activeService.name}
          />
        </div>
      </div>
      <div className="tabs-container">
        <ul className="tabs font-tertiary uppercase text-xl">
          {services.map((tab) => (
            <li key={tab.id}>
              <a
                id={tab.id}
                title={tab.name}
                href={`#${tab.id}`}
                onClick={(e) => handleTabClick(e, tab.id)}
                className={activeTab === tab.id ? "active " : ""}
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="tab-content-wrapper ">
          {services.map((tab) => (
            <section
              key={`${tab.id}-content`}
              id={`${tab.id}-content`}
              className={`tab-content ${activeTab === tab.id ? "active" : ""}`}
            >
              <h2 className="font-tertiary text-2xl uppercase font-medium ">
                {tab.name}
              </h2>
              <p className="font-primary text-md ">{tab.description}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
