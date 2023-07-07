export default function Feature({ index, data }) {
  return (
    <div key={index} style={{gridColumn: 'span '+ data.gridSpan}} className="text-center overflow-hidden bg-white/10 p-4 focus:shadow-lg hover:shadow-lg border border-white/0 focus:border-white/10 hover:border-white/10 rounded-lg">
      <h3 className="text-2xl font-bold">{data.title}</h3>
      <span className="text-sm mt-2">{data.description}</span>
      {data.graphic}
    </div>
  );
}
