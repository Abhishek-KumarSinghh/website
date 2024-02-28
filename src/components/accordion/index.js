import React, { useState } from "react";
import "./style.css";
function CustomAccordion({
  title,
  children,
  index,
  expandedIndex,
  setExpandedIndex,
}) {
  const isExpanded = index === expandedIndex;
  console.log("isExpanded", isExpanded, title);
  const toggleAccordion = () => {
    setExpandedIndex(isExpanded ? null : index);
  };

  return (
    <div className="custom-accordion">
      <div
        className={`accordion-header ${isExpanded ? "expanded" : ""}`}
        onClick={toggleAccordion}
      >
        <div className="accordion-title">{title}</div>
        <div className={`accordion-icon ${isExpanded ? "expanded" : ""}`}>
          {isExpanded ? "-" : "+"}
        </div>
      </div>
      {/* {isExpanded && <div className="accordion-content">{children}</div>} */}
      {/* {isExpanded && ( */}
      <div className={`content-container ${isExpanded ? "expan" : ""}`}>
        <div className={`accordion-content `}>
          {/* <div className={`accordion-content ${isExpanded ? "expan" : ""}`}> */}
          {children}
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default CustomAccordion;
