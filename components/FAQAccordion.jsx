'use client';

import { useState } from 'react';

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <div
          key={index}
          className={`faq-item${openIndex === index ? ' open' : ''}`}
        >
          <button
            className="faq-question"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </button>
          <div className="faq-answer" role="region">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
