const Header = ({ text }) => {
  const headerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "#ff6a95",
  };
  return <header style={headerStyle}>{text}</header>;
};

export default Header;
