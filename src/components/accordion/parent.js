import React, { useState } from "react";
import CustomAccordion from "./index";
import "./style.css";

function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="accrodion-parent">
      <CustomAccordion
        title="Where can I get analytics help?"
        index={1}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
      >
        <p>
          Dramatically disseminate real-time portals rather than top-line action
          items. Uniquely provide access to low-risk high-yield products without
          dynamic products. Progressively re-engineer low-risk high-yield ideas
          rather than emerging alignments.
        </p>
      </CustomAccordion>
      <CustomAccordion
        title="How long should a business plan be?"
        index={2}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
      >
        <p>
          Dramatically disseminate real-time portals rather than top-line action
          items. Uniquely provide access to low-risk high-yield products without
          dynamic products. Progressively re-engineer low-risk high-yield ideas
          rather than emerging alignments.
        </p>
      </CustomAccordion>
      <CustomAccordion
        title="Do I need a business plan?"
        index={3}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
      >
        <p>
          Dramatically disseminate real-time portals rather than top-line action
          items. Uniquely provide access to low-risk high-yield products without
          dynamic products. Progressively re-engineer low-risk high-yield ideas
          rather than emerging alignments.
        </p>
      </CustomAccordion>
    </div>
  );
}

export default App;
