import { DropdownContainer, Timeline, Title, Year } from "./Dropdown.styled";

// eslint-disable-next-line react/prop-types
const Dropdown = ({ isHovered }) => {
  return (
    <DropdownContainer $isHovered={isHovered}>
      <Title>
        All Graduation Exhibition<span>.</span>
      </Title>
      <Timeline>
        <Year>2014</Year>
        <Year>2015</Year>
        <Year>2016</Year>
        <Year>2017</Year>
        <Year>2018</Year>
        <Year>2019</Year>
        <Year>2020</Year>
        <Year>2021</Year>
        <Year>2022</Year>
        <Year>2023</Year>
        <Year>2024</Year>
      </Timeline>
    </DropdownContainer>
  );
};

export default Dropdown;
