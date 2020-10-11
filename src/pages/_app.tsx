import Nav from "../components/Nav/Nav";
import "../../scss/main.scss";

//Index imports
import "../../scss/Index.scss";
import "../../scss/Index/IndexComp.scss";

import "../../scss/Faq/Faq.scss";

//Nav imports
import "../../scss/Nav.scss";
import "../../scss/Nav/Navigation.scss";

//Cars Page imports
import "../../scss/Cars.scss";

//Car imports
import "../../scss/Car/car.scss";
import "../../scss/Car/center.scss";
import "../../scss/Car/aside.scss";
import "../../scss/Car/CarHeader.scss";
import "../../scss/Car/Aside/Comp.scss";
import "../../scss/Car/Aside/DisComp.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Nav>
      <Component {...pageProps} />
    </Nav>
  );
}

export default MyApp;
