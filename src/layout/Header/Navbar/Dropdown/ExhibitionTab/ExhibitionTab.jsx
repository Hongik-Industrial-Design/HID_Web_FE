/* eslint-disable react/prop-types */
import {
  ExhibitionTabContainer,
  Timeline,
  Title,
  Year,
} from "./ExhibitonTab.styled";

const ExhibitionTab = ({
  exhibitonType,
  timeline,
  isHovered,
  isOpened,
}) => {
  return (
    <ExhibitionTabContainer $isHovered={isHovered} $isOpened={isOpened}>
      <Title>
        All {exhibitonType} Exhibition<span>.</span>
      </Title>
      <Timeline>
        {timeline.map((time, index) => (
          <Year key={index}>{time}</Year>
        ))}
      </Timeline>
    </ExhibitionTabContainer>
  );
};

export default ExhibitionTab;
