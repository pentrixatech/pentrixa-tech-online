import React from 'react';

export default function CapabilityStrip() {
  const capabilities = [
    "WEB",
    "SOFTWARE",
    "MOBILE",
    "AI",
    "DATA",
    "AUTOMATION"
  ];

  return (
    <section className="capability-strip" aria-label="Core Capabilities">
      <div className="container capability-container">
        {capabilities.map((item, index) => (
          <React.Fragment key={item}>
            <span className="capability-item">{item}</span>
            {index < capabilities.length - 1 && (
              <span className="capability-separator" aria-hidden="true">◆</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}