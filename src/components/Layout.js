import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Topbar and main content on the right */}
      <div className="flex flex-col flex-grow ml-64">
        <Topbar />
        <main className="flex-grow p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
