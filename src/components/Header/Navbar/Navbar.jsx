import { NavItem, NavItemsContainer } from "./Navbar.styled";

const Navbar = () => {
  return (
    <>
      <NavItemsContainer>
        <NavItem>Faculty</NavItem>
        <NavItem>Graduation Exhibition</NavItem>
        <NavItem>Student Exhibition</NavItem>
        <NavItem>CourseTrack</NavItem>
        <NavItem>Community</NavItem>
        <NavItem>Contact</NavItem>
      </NavItemsContainer>
    </>
  );
};

export default Navbar;
