import { useNavigate } from 'react-router-dom';

export default function AgeGroupCard({ group }) {
  const navigate = useNavigate();
  
  const colorClasses = {
    gold: 'from-gold/20 to-gold/5 border-gold/30 hover:shadow-gold/20',
    orange: 'from-orange/20 to-orange/5 border-orange/30 hover:shadow-orange/20',
    navy: 'from-navy/10 to-navy/5 border-navy/30 hover:shadow-navy/20',
  };

  return (
    <div
      onClick={() => navigate(`/age/${group.id}`)}
      className={`bg-gradient-to-br border-2 rounded-lg p-6 
                  cursor-pointer text-center
                  hover:shadow-xl transform hover:scale-105 transition-all
                  ${colorClasses[group.color]}`}
    >
      <div className="text-5xl mb-3">
        {group.icon}
      </div>
      <h3 className="text-2xl font-heading font-semibold text-navy mb-1">
        {group.title}
      </h3>
      <p className="text-sm text-navy/60 mb-3">
        Ages {group.ageRange}
      </p>
      <p className="text-navy/70">
        {group.description}
      </p>
    </div>
  );
}