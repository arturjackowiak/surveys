import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/Utils/ProtectedRoute/ProtectedRoute";
import { EViewType } from "./enums/EViewType";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<LoginPage />} path={EViewType.LOGIN} />
      <Route element={<div>todo</div>} path={EViewType.REGISTER} />
      <Route element={<ProtectedRoute />}>
        <Route element={<div>todo</div>} path={EViewType.HOME} />
      </Route>
      <Route element={<NotFoundPage />} path={EViewType.NOT_FOUND} />
    </Routes>
  );
}

export default App;
