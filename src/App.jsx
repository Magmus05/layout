import { Header } from "./components/header/Header";
import { ModalProvider } from "./components/modal-context/ModalContext";
import { Page } from "./components/page/Page";

function App() {
  return (
    <ModalProvider>
      <>
        <Header />
        <Page />
      </>
    </ModalProvider>
  );
}

export default App;
