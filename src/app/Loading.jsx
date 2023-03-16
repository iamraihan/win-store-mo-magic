import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "99",
      }}
    >
      <iframe
        src="https://giphy.com/embed/ZO9b1ntYVJmjZlsWlm"
        width="480"
        height="360"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Loading;
