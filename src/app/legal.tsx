// legal.tsx
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const Legal = () => {
  return (
    <div className="flex">
      <Sidebar items={[{ href: '/dashboard', label: 'Dashboard' }, { href: '/legal', label: 'Legal' }, { href: '/clientes', label: 'Clientes' }, { href: '/clausulas', label: 'Clausulas' }]} />
      <MainContent title="Legal">
        {/* Contenido específico para la página legal */}
      </MainContent>
    </div>
  );
};

export default Legal;

// clientes.tsx y clausulas.tsx tendrían una estructura similar, solo cambia el título y el contenido específico.
