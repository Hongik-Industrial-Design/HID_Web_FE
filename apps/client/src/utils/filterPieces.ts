export const filterStudentPreview = <T extends { club: string }>(
  pieces: T[],
  selectedCategory: string
): T[] => {
  return pieces.filter((piece) => piece.club === selectedCategory);
};
