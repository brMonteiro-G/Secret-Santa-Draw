import Form from "components/form";
import { PlayersProvider } from "contexts/PlayersContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <PlayersProvider>
        <Routes>
          <Route path="/" element={<Form/>}></Route>
        </Routes>
      </PlayersProvider>
    </BrowserRouter>
  );
}
