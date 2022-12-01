import AuthUser from "./components/AuthUser";
import AuthGuest from "./nav/AuthGuest";
import Guest from "./nav/Guest";

const App = () => {
  const { getToken } = AuthUser();
  if (!getToken()) {
    return <Guest />;
  }
  return <AuthGuest />;
};
export default App;
