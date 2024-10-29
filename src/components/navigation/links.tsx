import Link from "next/link";

type Ttabs = {
  name: string;
  link: string;
};

const Tabs = () => {
  const tabs: Ttabs[] = [
    { name: "Browse", link: "#" },
    { name: "Categories", link: "#" },
    { name: "My Library", link: "#" },
  ];
  return (
    <>
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.link}
          className="text-gray-900 hover:text-blue-600"
        >
          {tab.name}
        </Link>
      ))}
    </>
  );
};

export default Tabs;
