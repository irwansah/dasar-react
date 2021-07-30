import React from 'react';
import ReactDOM from 'react-dom';
// import Lifecycle from './reactjsdasar/Lifecycle';
// import Map from './reactjsdasar/Map';
// import App from './reactjsdasar/App';
// import Variable from './reactjsdasar/Variable';
// import StateProps from './reactjsdasar/StateProps';

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud';

ReactDOM.render(
  <React.StrictMode>
    <Crud/>
  </React.StrictMode>,
  document.getElementById('root')
);

