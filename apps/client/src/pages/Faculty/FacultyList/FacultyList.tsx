import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';

import { FACULTY_CATEGORY_LIST } from '@constants/facultyCategory';

import { FacultyInfos } from './FacultyList.types';

import CategoryFaculty from '@components/Category/Faculty/CategoryFaculty';
import FacultyGallery from './FacultyGallery/FacultyGallery';

import * as S from './FacultyList.styled';

const FacultyList = (): JSX.Element => {
  const [facultyList, setFacultyList] = useState<FacultyInfos[]>([]);
  const [categorizedFaculty, setCategorizedFaculty] = useState<FacultyInfos[]>(
    []
  );
  const [currentCategory, setCurrentCategory] = useState<string>(
    FACULTY_CATEGORY_LIST[0]
  );

  useEffect(() => {
    const fetchFacultyList = async () => {
      try {
        const response = await axios.get('/data/faculty.json');
        const facultyInfo = response.data;

        setFacultyList(facultyInfo.faculty);
        setCategorizedFaculty(facultyInfo.faculty);
      } catch (error) {
        console.error('Error occured: ', error);
      }
    };

    fetchFacultyList();
  }, []);

  const handleFilterFaculty = (category: string) => {
    setCurrentCategory(category);

    if (category === 'All') {
      setCategorizedFaculty(facultyList);
    } else {
      const filteredFacultyList = facultyList.filter(
        (professor) => professor.info?.category === category
      );

      setCategorizedFaculty(filteredFacultyList);
    }
  };

  return (
    <S.FacultyListPageWrapper>
      <S.CategoryStickyContainer>
        <CategoryFaculty
          currentCategory={currentCategory}
          handleFilter={handleFilterFaculty}
        />
      </S.CategoryStickyContainer>

      <S.FacultyListContainer>
        <S.FacultyPageTitle>
          Faculty<span>.</span>
        </S.FacultyPageTitle>
        <FacultyGallery categorizedFaculty={categorizedFaculty} />
      </S.FacultyListContainer>
    </S.FacultyListPageWrapper>
  );
};

export default FacultyList;
