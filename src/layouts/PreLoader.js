import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  });

  return (
    <div className={`preloader ${loaded ? "loaded" : ""}`}>
      <div className="preloader-container">
        <h1>joel</h1>
        <div id="progress-line-container">
          <div className="progress-line" />
        </div>
        <h1>otic</h1>
      </div>
    </div>
  );
};
export default PreLoader;
// loaded
