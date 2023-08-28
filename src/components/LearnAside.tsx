import { NavLink } from "react-router-dom";
import { LEARN_NAV_ITEMS } from "../data";

const LearnAside = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 mt-7 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full pb-4 overflow-y-auto">
        <nav className="space-y-2 font-medium">
          <ul className="space-y-3">
            {LEARN_NAV_ITEMS.map(({ text, to }, idx) => (
              <li key={idx}>
                <NavLink
                  to={to}
                  end
                  className="flex items-center p-3 text-gray-900 rounded-r-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#283541] hover:text-[#149eca] duration-300"
                >
                  <span className="ml-3">{text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default LearnAside;
