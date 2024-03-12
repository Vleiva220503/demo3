interface ActiveContractsCardProps {
    count: number;
  }
  
  const ActiveContractsCard: React.FC<ActiveContractsCardProps> = ({ count }) => {
    return (
      <div className="bg-gray-300 p-2 rounded-md flex items-center mb-4">
        <span>Contratos Activos</span>
        <span className="ml-auto">{count}</span>
        <div className="ml-2 w-6 h-6 bg-green-500 rounded-full"></div>
      </div>
    );
  };
  
  export default ActiveContractsCard;
  