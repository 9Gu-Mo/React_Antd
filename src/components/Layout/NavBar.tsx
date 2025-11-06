import { Flex } from "antd";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Flex>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/common"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Common
        </NavLink>
      </Flex>
    </>
  );
}
