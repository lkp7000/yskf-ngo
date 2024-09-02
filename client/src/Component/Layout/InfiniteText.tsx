import React, { useEffect, useRef } from 'react';
// import './YourComponent.css';
import "./Style.css"

const InfiniteText = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const text = marquee.innerHTML;
    marquee.innerHTML += text;
  }, []);

  return (
    <div className="marquee-container text-[#ff4c86] pt-1">
      <div className="marquee" ref={marqueeRef}>
        <span className="marquee-text font-hindi text-[20px]">
          ॥ कृष्णं सदा सहायते ॥ &nbsp;&nbsp;॥ कृष्णं सदा सहायते ॥
        </span>
        <span className="marquee-text font-hindi text-[20px]">
          ॥ कृष्णं सदा सहायते ॥ &nbsp;&nbsp;॥ कृष्णं सदा सहायते ॥
        </span>
      </div>
    </div>
  );
};

export default InfiniteText;
