interface ContractCardProps {
    icon: string;
    title: string;
    count: number;
  }
  
  const ContractCard: React.FC<ContractCardProps> = ({ icon, title, count }) => {
    return (
      <div className="bg-gray-300 p-2 rounded-md flex items-center mb-4">
        <img src={icon} alt="Contract Icon" className="w-6 h-6 mr-2" />
        <span>{title}</span>
        <span className="ml-auto">{count}</span>
      </div>
    );
  };
  
  export default ContractCard;
  