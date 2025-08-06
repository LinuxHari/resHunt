import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

const Icon = () => {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: `${size.width}px`,
          height: `${size.height}px`,
          padding: "0.5rem",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0.5rem",
          backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
          color: "white",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-file-text-icon lucide-file-text"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      </div>
    ),
    {
      ...size,
    },
  );
};

export default Icon;
