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
  | 'DBZC'
  | 'DESIGN STUDIO i'
  | 'HILLS';

export interface ExhibitionBasicInfo {
  year: string;
  clubOrMajor: GRADUATION_CATEGORY_TYPE | STUDENT_CLUB_TYPE;
}
