import Navbar from "./components/Navbar";
import ThemeFAB from "./components/ThemeFAB";

function App() {
  return (
    <div className="h-screen dark:bg-[var(--dark-mode-bg-color)]">
      <Navbar />
      <ThemeFAB />
    </div>
  );
}

export default App;
