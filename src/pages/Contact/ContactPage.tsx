import axios from 'axios';
import { useEffect, useState } from 'react';

import * as S from './ContactPage.styled';

import ContactCard from './Card/ContactCard';
import AdminCard from './Card/Admin/AdminCard';

const ContactPage = (): JSX.Element => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get('/data/contact.json');
        const fetchedData = response.data;

        console.log(fetchedData);
        console.log(fetchedData.officeInfo);

        setContactData(fetchedData);
      } catch (error) {
        console.error('Error occured: ', error);
      }
    };

    fetchContactData();
  }, []);

  return (
    <S.ContactPageContainer>
      <S.Title>
        Contact<span>.</span>
      </S.Title>
      <S.ContentContainer>
        <S.HIDInfo>
          <ContactCard cardData={contactData?.officeInfo} />
          <ContactCard cardData={contactData?.admission} />
          <ContactCard cardData={contactData?.onlineCommunity} />
          <ContactCard cardData={contactData?.updateInfo} />
        </S.HIDInfo>
        <S.WebAdmin>
          <AdminCard adminData={contactData?.designer} />
          <AdminCard adminData={contactData?.developer} />
        </S.WebAdmin>
      </S.ContentContainer>
    </S.ContactPageContainer>
  );
};

export default ContactPage;
