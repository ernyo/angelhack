import Language from "../assets/Language";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex items-center justify-between px-20 py-4">
        <div className="flex items-center">
          <a href="/" className="font-bold text-3xl text-indigo-500 mr-4">Silver Stories</a>
          <img src="https://cdn-icons-png.freepik.com/512/5988/5988343.png" alt="Logo" className="h-10 w-10" />
        </div>
        <div className="flex flex-row">
          <Language />
        </div>
      </nav>
    </header>
  );
}
