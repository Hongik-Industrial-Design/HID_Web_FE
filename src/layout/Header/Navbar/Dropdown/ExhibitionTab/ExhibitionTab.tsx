import * as S from './ExhibitonTab.styled';

const ExhibitionTab = ({ exhibitonType, timeline, isHovered, isOpened }) => {
  return (
    <S.ExhibitionTabContainer $isHovered={isHovered} $isOpened={isOpened}>
      <S.Title>
        All {exhibitonType} Exhibition<span>.</span>
      </S.Title>
      <S.Timeline>
        {timeline.map((time, index) => (
          <S.Year key={index}>{time}</S.Year>
        ))}
      </S.Timeline>
    </S.ExhibitionTabContainer>
  );
};

export default ExhibitionTab;
