export default function StepCard({ number, title, description }) {
  return (
    <article className="card-step">
      <span className="step-number">{number}</span>
      <h3 className="step-title">{title}</h3>
      <p className="step-desc">{description}</p>
    </article>
  );
}
