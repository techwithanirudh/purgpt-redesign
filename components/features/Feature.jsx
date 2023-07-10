export default function Feature({ data }) {
    return (
      <>
        {" "}
        <h3 className="text-2xl font-bold">{data.title}</h3>
        <span className="text-sm mt-2">{data.description}</span>
        {data.graphic}
      </>
    );
  }
  