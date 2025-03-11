export const GRADUATION_EXHIBITION_YEAR_LIST = [
  '2025',
  '2024',
  '2023',
  '2022',
  '2021',
];

export const GRADUATION_EXHIBITION_MAJOR_LIST = [
  'Smart Mobility',
  'Spatial',
  'Product',
  'Interaction',
];

export const STUDENT_EXHIBITION_CLUB_LIST = [
  'Casttec',
  'Contra',
  'DBZC (덤벙주초)',
  'DESIGN STUDIO i',
  'G.LAB',
  'HILLS',
];

export const EXHIBITION_TYPE_LIST = {
  graduation: 'GRADUATION',
  student: 'STUDENT',
};

// 타입 정의
export type EXHIBITION_TYPE = 'GRADUATION' | 'CLUB';

export type GRADUATION_EXHIBITION_MAJOR =
  | 'Smart Mobility'
  | 'Spatial'
  | 'Product'
  | 'Interaction';

export type STUDENT_EXHIBITION_CLUB =
  | 'Casttec'
  | 'Contra'
  | 'DBZC'
  | 'DESIGN STUDIO i'
  | 'G.LAB'
  | 'HILLS';

export type RADIO_LIST_TYPE = 'major' | 'club';

export const DESCRIPTION_MAX_LENGTH = {
  Korean: 300,
  English: 700,
};
