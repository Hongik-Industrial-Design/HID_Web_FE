// Office Info
interface OfficeDetail {
  title: string;
  content: string;
}

interface OfficeInfo {
  category: string;
  contactDetails: OfficeDetail[];
}

// Admission
interface AdmissionDetail {
  title: string;
  content: string;
  url: string;
}

interface AdmissionInfo {
  category: string;
  contactDetails: AdmissionDetail[];
}

// Online Community
interface SocialLink {
  name: string;
  url: string;
}

interface OnlineCommunityDetail {
  title: string;
  content: SocialLink[];
}

interface OnlineCommunityInfo {
  category: string;
  contactDetails: OnlineCommunityDetail[];
}

// Update Info
interface UpdateInfoDetail {
  title: string;
  content: string;
}

interface UpdateInfo {
  category: string;
  contactDetails: UpdateInfoDetail[];
}

// Designer (Credit)
interface PersonalInfo {
  name: string;
  email: string;
}

interface CreditInfo {
  category: string;
  contributors: PersonalInfo[];
}

export interface ContactPageProps {
  officeInfo: OfficeInfo;
  admission: AdmissionInfo;
  onlineCommunity: OnlineCommunityInfo;
  updateInfo: UpdateInfo;
  designer: CreditInfo;
  developer: CreditInfo;
}

export interface ContactCardProps {
  cardData: OfficeInfo | AdmissionInfo | OnlineCommunityInfo | UpdateInfo;
}

export interface AdminCardProps {
  adminData: CreditInfo;
}
