import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import TrendingSidebar from "./../../components/trending-sidebar/TrendingSidebar";
import MobileNavigation from "../../components/mobile-navigation/MobileNavigation";
import FloatingActionButton from "../../components/floating-action-button/FloatingActionButton";
import MobileSidebar from "../../components/mobile-sidebar/MobileSidebar";
import ThemeToggler from "../../components/theme-toggler/ThemeToggler";
import { useSelector } from "react-redux";

const PrimaryLayout = () => {
  const currentPage=useSelector(store=>store.users.currentPage)
  return (
    <div>
      <div className="mx-auto md:max-w-2xl lg:max-w-7xl">
        <Navbar />
        <main className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-8 grid-rows-1 lg:gap-8">
            <div className="relative hidden sm:block sm:col-span-1 lg:col-span-2">
              <aside
                aria-label="Sidebar"
                className="fixed sm:w-16 lg:w-64 sm:translate-x-0"
              >
                <Sidebar />
              </aside>
            </div>
            <div className="col-span-8 sm:col-span-7 lg:col-span-4 sm:col-start-2 lg:col-start-3">
              <div className="sticky top-0 z-10 flex-row items-center justify-between hidden px-4 pt-4 pb-8 bg-orange-50 dark:bg-stone-900 lg:flex">
                <h2 className="text-3xl font-extrabold text-gray-700 capitalize dark:text-gray-50 ">
                  {currentPage}
                </h2>
                <ThemeToggler/>
              </div>
              <div className="pb-4 mb-20 lg:px-4 lg:mb-0 sm:mt-12 md:mt-0 lg:-mt-2">
                <MobileSidebar />
                <Outlet />
              </div>
            </div>
            <div className="relative hidden lg:block sm:col-span-2 sm:col-start-7">
              <aside
                aria-label="Trending-Sidebar"
                className="fixed sm:translate-x-0"
              >
                <TrendingSidebar />
              </aside>
            </div>
          </div>
        </main>
        <footer className="sm:hidden">
          <MobileNavigation />
          <FloatingActionButton />
        </footer>
      </div>
    </div>
  );
};

export default PrimaryLayout;
