import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Loader from "./common/Loader";
import PageTitle from "./components/PageTitle";
import HomePage from "./pages/Dashboard/HomePage";
import Layout from "./layout/Layout";

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Layout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Trading admin panel" />
              <HomePage />
            </>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
