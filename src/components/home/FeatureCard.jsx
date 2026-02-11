import { useNavigate } from 'react-router-dom';

export default function FeatureCard({ feature }) {
  return (
    <div className="text-center">
      <div className="text-5xl mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-heading font-semibold text-navy mb-3">
        {feature.title}
      </h3>
      <p className="text-navy/70 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}