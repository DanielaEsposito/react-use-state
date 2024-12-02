export default function Button({ title, id }) {
  return (
    <button key={id} className="btn btn-primary">
      {title}
    </button>
  );
}
