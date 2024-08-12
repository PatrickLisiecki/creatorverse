import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-800">
      <header className="flex min-h-[400px] w-full flex-col items-center justify-center gap-8 border-b-2 border-gray-500 bg-blue-400 bg-[url('/aurora.jpg')] bg-auto bg-center bg-no-repeat">
        <h1 className="text-8xl font-bold uppercase tracking-wider text-white">
          Creatorverse
        </h1>
        <div className="flex flex-row gap-8">
          <Link to="/">
            <button className="w-[250px] rounded-lg border-2 border-green-500 bg-green-500 p-4 hover:border-gray-200 hover:bg-green-600">
              <span className="text-xl font-bold uppercase tracking-wider text-white">
                View Creators
              </span>
            </button>
          </Link>

          <Link to="/add">
            <button className="w-[250px] rounded-lg border-2 border-green-500 bg-green-500 p-4 hover:border-gray-200 hover:bg-green-600">
              <span className="text-xl font-bold uppercase tracking-wider text-white">
                Add Creator
              </span>
            </button>
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
