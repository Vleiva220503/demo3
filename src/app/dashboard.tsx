import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import ContractCard from '../components/card/ContractCard';
import ActiveContractsCard from '../components/card/ActiveContractsCard';

const Dashboard = () => {
  const sidebarItems = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/legal', label: 'Legal' },
    { href: '/clientes', label: 'Clientes' },
    { href: '/clausulas', label: 'Clausulas' },
  ];

  return (
    <div className="flex">
      <Sidebar items={sidebarItems} />
      <MainContent title="Dashboard">
        <ContractCard icon="/contract-icon.png" title="Total de Contratos" count={40} />
        <ActiveContractsCard count={30} />
      </MainContent>
    </div>
  );
};

export default Dashboard;
