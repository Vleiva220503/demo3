// clientes.tsx
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const Clientes = () => {
  return (
    <div className="flex">
      <Sidebar items={[{ href: '/dashboard', label: 'Dashboard' }, { href: '/legal', label: 'Legal' }, { href: '/clientes', label: 'Clientes' }, { href: '/clausulas', label: 'Clausulas' }]} />
      <MainContent title="Clientes">
        {/* Contenido específico para la página de clientes */}
      </MainContent>
    </div>
  );
};

export default Clientes;
