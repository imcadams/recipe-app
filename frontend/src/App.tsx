import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <main className="page">
      <h1>Recipes</h1>
      <Outlet />
    </main>
  );
}
