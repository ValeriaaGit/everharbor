import { useNavigate } from 'react-router-dom';

export default function VoyageCard({ voyage }) {
  const navigate = useNavigate();
  
  const colorClasses = {
    navy: 'border-navy/20 hover:border-navy hover:shadow-navy/20',
    tomato: 'border-tomato/20 hover:border-tomato hover:shadow-tomato/20',
    orange: 'border-orange/20 hover:border-orange hover:shadow-orange/20',
    gold: 'border-gold/20 hover:border-gold hover:shadow-gold/20',
  };

  return (
    <div
      onClick={() => navigate(`/voyage/${voyage.id}`)}
      className={`bg-white border-2 rounded-lg p-6 cursor-pointer
                  transition-all hover:shadow-lg
                  ${colorClasses[voyage.color]}`}
      // Dynamic className based on voyage color
      // Template literal allows conditional classes
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-2xl font-heading font-semibold text-navy">
          {voyage.title}
        </h3>
        <span className={`px-3 py-1 bg-${voyage.color}/10 text-${voyage.color} 
                         rounded-full text-sm font-semibold`}>
          {voyage.difficulty}
        </span>
      </div>
      
      <p className="text-navy/70 mb-4">
        {voyage.description}
      </p>
      
      <div className="space-y-1">
        {voyage.books.slice(0, 3).map((book, idx) => (
          <p key={idx} className="text-sm text-navy/60 flex items-center gap-2">
            <span className="text-gold">→</span> {book}
          </p>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-navy/10">
        <p className="text-sm font-semibold text-navy/80">
          {voyage.books.length} books in this voyage
        </p>
      </div>
    </div>
  );
}