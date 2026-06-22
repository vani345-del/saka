export default function ValueCard({ icon, title, description }) {
  return (
    <article className="card-value">
      <div className="value-icon">
        <span>{icon}</span>
      </div>
      <h3 className="value-title">{title}</h3>
      <p className="value-desc">{description}</p>
    </article>
  );
}
