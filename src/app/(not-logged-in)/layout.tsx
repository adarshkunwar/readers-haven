import TopBar from "@/components/navigation/top-bar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <TopBar />
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Layout;
