import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';

import { FACULTY_CATEGORY_LIST } from '@constants/facultyCategory';

import { FacultyInfos } from './FacultyList.types';

import Category from '@components/Category/Category';
import FacultyGallery from './FacultyGallery/FacultyGallery';

import * as S from './FacultyList.styled';

const FacultyList = (): JSX.Element => {
  const [facultyList, setFacultyList] = useState<FacultyInfos[]>([]);
  const [categorizedFaculty, setCategorizedFaculty] = useState<FacultyInfos[]>(
    []
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
        <Category
          currentCategory={FACULTY_CATEGORY_LIST[0]}
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
