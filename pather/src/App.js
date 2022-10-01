
import {
  Routes,
  Route,
  useNavigationType,
  useLocation
} from "react-router-dom";
import MacBookPro161 from './pages/MacBookPro161';
import { useEffect } from "react";
import Submission from "./Submission";

function App() {

  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);


  return (
    <Routes>
      <Route path="/Audit" element={<MacBookPro161/>}/>
      <Route path="/" element={<Submission />} />
    </Routes>
  );
}
export default App;
  