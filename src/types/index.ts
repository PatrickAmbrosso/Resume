export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
}

export interface IExperience {
  name: string;
  designation: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skillsInUse: string;
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface ICertificate {
  certBadgeIcon: string;
  certName: string;
  issuedBy: string;
  issuedDate: string;
  validUntilDate: string;
  description: string[];
  verificationLink: string;
}
export interface ICertificates {
  title: string;
  details: ICertificate[];
}

export interface IEducation {
  courseName: string;
  institutionName: string;
  startDate: string;
  endDate: string;
  grade: string;
}
export interface IEducationalPrograms {
  title: string;
  details: IEducation[];
}

export interface skills {
  title: string;
  skillsList: string[];
}
