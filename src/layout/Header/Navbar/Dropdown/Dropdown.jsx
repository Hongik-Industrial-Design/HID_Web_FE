/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

import { DropdownBackground, DropdownContainer } from "./Dropdown.styled";
import ExhibitionTab from "./ExhibitionTab/ExhibitionTab";

const Dropdown = ({
  isHovered,
  isDropdownOpen,
  enterDropdown,
  leaveDropdown,
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
        onMouseEnter={enterDropdown}
        onMouseLeave={leaveDropdown}
      >
        <ExhibitionTab
          exhibitonType={"Graduation"}
          timeline={timeline}
          isHovered={isHovered}
          isOpened={isDropdownOpen}
        />
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
