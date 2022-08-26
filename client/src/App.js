import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard.js";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? (
    <Dashboard code={code} />
  ) : (
    <div className="view">
      <Login />
    </div>
  );
}

export default App;
