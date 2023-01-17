import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./widgets/layout/index";
import routes from "./routes";
import FormAddUsers from "./components/FormAddUsers";
import ListUsers from "./components/ListUsers";

function App() {
  return (
    <>
      <Navbar routes={routes} />
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route exact path="/form-add-user" element={<FormAddUsers />}/>
        <Route exact path="/list-team-users" element={<ListUsers />}/>
        <Route exact path="/edit-user/:id" element={<FormAddUsers />}/>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
