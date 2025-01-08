import axios from 'axios';
import { useEffect, useState } from 'react';

import Category from '@components/Exhibition/Category/Category';
import FacultyGallery from './FacultyGallery/FacultyGallery';

import * as S from './FacultyList.styled';

const FacultyList = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [categorizedFaculty, setCategorizedFaculty] = useState([]);

  useEffect(() => {
    const fetchFacultyList = async () => {
      try {
        const response = await axios.get('/data/faculty.json');
        const facultyInfo = response.data;

        console.log(facultyInfo);

        setFacultyList(facultyInfo);
        setCategorizedFaculty(facultyInfo);
      } catch (error) {
        console.error('Error occured: ', error);
      }
    };

    fetchFacultyList();
  }, []);

  const handleFilterFaculty = (category) => {
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
        <Category handleFilter={handleFilterFaculty} />
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
