import { Suspense } from "react";
import Layout from "./components/site/Layout";
import { ButtonPage } from "./pages/ButtonPage";
import { CardPage } from "./pages/CardPage";
import { InputPage } from "./pages/InputPage";

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        {/* button */}
        <ButtonPage />

        {/* card */}
        <CardPage />

        {/* Inputs */}
        <InputPage />
      </Suspense>
    </Layout>
  );
}

export default App;
