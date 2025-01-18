// import React from "react";
import { useLocation} from "react-router-dom";

const Chatbot = () => {
  
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  if (!isAdminPage) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '65eddd76175bb21b06b58158' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
          });
        }
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
      })(document, 'script');
    `;
    document.body.appendChild(script);
  }

  // No need to return anything here
};

export default Chatbot;
