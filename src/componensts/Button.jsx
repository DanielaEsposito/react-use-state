// language and onselect are props's son

export default function Button({ language, onSelect }) {
  return (
    <button
      key={language.id}
      className="btn btn-primary"
      onClick={() => onSelect(language)}
    >
      {language.title}
    </button>
  );
}
