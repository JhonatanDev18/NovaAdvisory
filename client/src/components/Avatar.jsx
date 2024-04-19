import { useEffect } from 'react';

const AvatarHTML = () => {
  useEffect(() => {
    const host = "https://app.heygen.com";
    const url = host + "/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJBbm5hX3B1YmxpY18zXzIwMjQwMTA4Iiwi%0D%0Adm9pY2UiOnsidm9pY2VfaWQiOiJhYTgxNWI5YTgwNTM0ZDkyODYzNGNiN2RmNGY5OTc1NCJ9LCJw%0D%0AcmV2aWV3SW1nIjoiaHR0cHM6Ly9maWxlcy5oZXlnZW4uYWkvYXZhdGFyL3YzLzNjNDI3ZDhjODE0%0D%0AMTQzNTViMDRjMmIyNWExZTc4NzNhXzEzMjE2L3ByZXZpZXdfdGFsa18zLndlYnAiLCJuZWVkUmVt%0D%0Ab3ZlQmFja2dyb3VuZCI6dHJ1ZSwidXNlcm5hbWUiOiI0YmI4NTJmMjA1ZDE0NWMxYjk4ZmI5MWNj%0D%0AMzliYjE3MiJ9&inIFrame=1";
    const clientWidth = document.body.clientWidth;
    const wrapDiv = document.createElement("div");
    wrapDiv.id = "heygen-streaming-embed";

    const container = document.createElement("div");
    container.id = "heygen-streaming-container";

    const stylesheet = document.createElement("style");
    stylesheet.innerHTML = `
      #heygen-streaming-embed {
        z-index: 9999;
        position: fixed;
        left: 40px;
        bottom: 40px;
        width: 700px; /* Ajusta el tamaño aquí */
        height: 640px; /* Ajusta el tamaño aquí */
        border-radius: 10%;
        border: 2px solid #fff;
        box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);
        transition: all linear 0.1s;
        overflow: hidden;
        opacity: 1;
        visibility: visible;
      }
      #heygen-streaming-embed.show {
        opacity: 1;
        visibility: visible;
      }
      #heygen-streaming-embed.expand {
        ${clientWidth < 540 ? "height: 266px; width: 96%; left: 50%; transform: translateX(-50%);" : "height: 366px; width: calc(366px * 16 / 9);"}
        border: 0;
        border-radius: 8px;
      }
      #heygen-streaming-container {
        width: 100%;
        height: 100%;
      }
      #heygen-streaming-container iframe {
        width: 100%;
        height: 100%;
        border: 0;
      }
    `;

    const iframe = document.createElement("iframe");
    iframe.allowFullscreen = false;
    iframe.title = "Streaming Embed";
    iframe.role = "dialog";
    iframe.src = url;

    container.appendChild(iframe);
    wrapDiv.appendChild(stylesheet);
    wrapDiv.appendChild(container);
    document.body.appendChild(wrapDiv);
  }, []);

  return null; // No necesitamos devolver nada visible en el DOM
};

export default AvatarHTML;

