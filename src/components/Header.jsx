import "../assets/header.css";

export default function Header() {
  const styled = { color: "red", fontSize: 20 };
  const header = "Header";

  return (
    <div className="header" style={styled}>
      {header}
    </div>
  );
}
