import { CSSProperties, FC } from "react";
import { useSelector } from "react-redux"

export const headerHeight = "60px";

const HeaderStyle: CSSProperties = {
  height: headerHeight,
  backgroundColor: "#20232a",
  color: "#fff",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};

const Header: FC = () => {
  const pageTitle = useSelector((state: any) => state.pageTitle)
  
  return (
    <div className="header" style={HeaderStyle}>
      <h1>{"🎥 "+ pageTitle}</h1>
    </div>
  );
};

export default Header;
