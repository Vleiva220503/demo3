// clausulas.tsx
import Sidebar from '../components/Sidebar';
import MainContent from "../components/MainContent";

const Clausulas = () => {
  return (
    <div className="flex">
      <Sidebar items={[{ href: '/dashboard', label: 'Dashboard' }, { href: '/legal', label: 'Legal' }, { href: '/clientes', label: 'Clientes' }, { href: '/clausulas', label: 'Clausulas' }]} />
      <MainContent title="Clausulas">
        {/* Contenido específico para la página de clausulas */}
      </MainContent>
    </div>
  );
};

export default Clausulas;
