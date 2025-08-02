interface StatCardProps {
    value: string
    label: string
  }
  
  const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-blue-100">{label}</div>
    </div>
  )
  
  export default StatCard
  