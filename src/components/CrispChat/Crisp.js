import React from 'react';

class Crisp extends React.Component {
  componentDidMount() {
    // Include the Crisp code here, without the <script></script> tags
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = 'b536b36a-e5ec-4e93-b267-f4ed714cfffe';

    (function () {
      var d = document;
      var s = d.createElement('script');

      s.src = 'https://client.crisp.chat/l.js';
      s.async = 1;
      d.getElementsByTagName('head')[0].appendChild(s);
    })();
  }

  render() {
    return null;
  }
}
export default Crisp;
