export default function Feature({ name, description, key, gridSpan }) {
  return (
    <div key={key} style={{gridColumn: 'span '+ gridSpan}} className="text-center border-white/25 p-4 border rounded-lg">
      <h3 className="text-xl font-bold">{name}</h3>
      {description}
    </div>
  );
}
