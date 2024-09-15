/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

import {
  DropdownBackground,
  DropdownContainer,
  Timeline,
  Title,
  Year,
} from "./Dropdown.styled";

const Dropdown = ({
  isHovered,
  isDropdownOpen,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        const response = await axios.get("/data/timeline.json");
        const timelineData = response.data;

        console.log(timelineData);

        const reorderedData = reverseArray(timelineData);
        console.log(reorderedData);

        setTimeline(reorderedData);
      } catch (error) {
        console.error("Error occured: ", error);
      }
    };

    fetchTimelineData();
  }, []);

  const reverseArray = (arr) => {
    return [...arr].reverse();
  };

  return (
    <>
      <DropdownBackground $isHovered={isHovered} $isOpened={isDropdownOpen} />
      <DropdownContainer
        $isHovered={isHovered}
        $isOpened={isDropdownOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Title>
          All Graduation Exhibition<span>.</span>
        </Title>
        <Timeline>
          {timeline.map((time, index) => (
            <Year key={index}>{time}</Year>
          ))}
        </Timeline>
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
