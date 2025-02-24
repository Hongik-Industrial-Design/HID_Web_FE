type ProfessorInfos = {
  name: string;
  major: string;
  category: string;
};

export type FacultyInfos = {
  id: string;
  thumbnail: string;
  info: ProfessorInfos;
};
