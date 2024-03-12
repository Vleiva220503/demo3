import Link from 'next/link';

interface SidebarProps {
  items: { href: string; label: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="flex flex-col items-center bg-gray-200 p-4">
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <a className="mb-4 p-2 rounded-md hover:bg-gray-300">{item.label}</a>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
