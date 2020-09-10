import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./pages/main";
import Contato from "./pages/contact";
import Work from "./pages/works";
import About from "./pages/about";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/contato" component={Contato} />
      <Route path="/trabalhos" component={Work} />
      <Route path="/sobre" component={About} />
    </BrowserRouter>
  );
}

export default Routes;
