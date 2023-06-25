export default function Feature({ index, data }) {
  return (
    <div key={index} style={{gridColumn: 'span '+ data.gridSpan}} className="text-center border-white/25 p-4 border rounded-lg">
      <h3 className="text-2xl font-bold">{data.title}</h3>
      <span className="text-sm mt-2">{data.description}</span>
      {data.graphic}
    </div>
  );
}
