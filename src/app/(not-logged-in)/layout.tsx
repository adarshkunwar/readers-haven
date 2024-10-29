import TopBar from "@/components/navigation/top-bar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
};

export default Layout;
