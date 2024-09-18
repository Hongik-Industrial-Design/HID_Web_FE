import { useEffect, useState } from "react";

import {
  ContactPageContainer,
  ContentContainer,
  HIDInfo,
  Title,
  WebAdmin,
} from "./ContactPage.styled";

import Layout from "@layout/Layout";
import axios from "axios";
import ContactCard from "./Card/ContactCard";
import AdminCard from "./Card/Admin/AdminCard";

const ContactPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get("/data/contact.json");
        const fetchedData = response.data;

        console.log(fetchedData);
        console.log(fetchedData.officeInfo);

        setContactData(fetchedData);
      } catch (error) {
        console.error("Error occured: ", error);
      }
    };

    fetchContactData();
  }, []);

  return (
    <>
      <Layout isHovered={isHovered} setIsHovered={setIsHovered}>
        <ContactPageContainer>
          <Title>
            Contact<span>.</span>
          </Title>
          <ContentContainer>
            <HIDInfo>
              <ContactCard cardData={contactData?.officeInfo} />
              <ContactCard cardData={contactData?.admission} />
              <ContactCard cardData={contactData?.onlineCommunity} />
              <ContactCard cardData={contactData?.updateInfo} />
            </HIDInfo>
            <WebAdmin>
              <AdminCard adminData={contactData?.designer} />
              <AdminCard adminData={contactData?.developer} />
            </WebAdmin>
          </ContentContainer>
        </ContactPageContainer>
      </Layout>
    </>
  );
};

export default ContactPage;
