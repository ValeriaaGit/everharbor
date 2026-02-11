import { useNavigate } from 'react-router-dom';

export default function MoodCard({ mood }) {
  const navigate = useNavigate();
  
  return (
    <div
      onClick={() => navigate(`/search?q=${mood.query}`)}
      className="bg-white border-2 border-navy/10 rounded-lg p-6 
                 cursor-pointer text-center
                 hover:border-gold hover:shadow-lg hover:scale-105
                 transition-all group"
      // group = allows children to respond to parent hover
    >
      <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
        {/* group-hover:scale-110 = grows when parent is hovered */}
        {mood.emoji}
      </div>
      <p className="font-semibold text-navy group-hover:text-gold transition-colors">
        {mood.label}
      </p>
    </div>
  );
}