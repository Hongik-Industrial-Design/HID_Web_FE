export type EXHIBIT_TYPE = 'GRADUATION' | 'CLUB';

export type GRADUATION_CATEGORY_TYPE =
  | 'All'
  | 'Smart Mobility'
  | 'Spatial'
  | 'Product'
  | 'Interaction';

export type STUDENT_CLUB_TYPE =
  | 'All'
  | 'Casttec'
  | 'Contra'
  | 'DBZC (덤벙주초)'
  | 'DESIGN STUDIO i'
  | 'HILLS';

export type EXHIBITION_CATEGORY_TYPE =
  | GRADUATION_CATEGORY_TYPE
  | STUDENT_CLUB_TYPE;
