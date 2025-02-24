interface professorID {
  id: number;
}

export interface Degree extends professorID {
  year: string;
  degree: string;
}

export interface Biography extends professorID {
  yearRange: string;
  position: string;
}

export interface Career extends professorID {
  yearRange: string;
  project: string;
}

export interface Award extends professorID {
  year: string;
  award: string;
}

export interface Publication extends professorID {
  year: string;
  title: string;
}

export interface professorDetails {
  major: string;
  degrees: Degree[];
  biography?: Biography[];
  works?: Career[];
  awards?: Award[];
  publications?: Publication[];
}

export interface ProfessorInfos {
  id: number;
  image: string;
  name: string;
  title: string;
  specialization: string;
  contact: {
    email: string;
  };
  description: string;
  details: professorDetails;
}
