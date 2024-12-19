import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader: React.FC = () => {
  const progress = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.loaded !== 0
          ? `${progress.loaded.toFixed(2)}%`
          : "Loading..."}
      </p>
      <progress value={progress.loaded} max={progress.total} />
    </Html>
  );
};

export default CanvasLoader;
