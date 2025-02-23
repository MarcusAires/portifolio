export default function Hamburger({ isOpen, toggle }) {
  const hamburgerStyle = {
    width: "40px",
    height: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
    zIndex: 9999,
  };

  const barStyle = {
    width: "100%",
    height: "5px",
    backgroundColor: "white",
    borderRadius: "5px",
    transition: "all 0.3s ease-in-out",
  };

  const open1 = {
    transform: "rotate(45deg) translate(6px, 6px)",
  };

  const open2 = {
    opacity: 0,
  };

  const open3 = {
    transform: "rotate(-45deg) translate(6px, -6px)",
  };

  return (
    <div style={hamburgerStyle} onClick={toggle}>
      <div style={{ ...barStyle, ...(isOpen ? open1 : {}) }} />
      <div style={{ ...barStyle, ...(isOpen ? open2 : {}) }} />
      <div style={{ ...barStyle, ...(isOpen ? open3 : {}) }} />
    </div>
  );
}
