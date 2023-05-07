import styled from "@emotion/styled";

const Section = styled.section`
  padding: 25px 0;
  @media screen and (min-width: 800px) {
    padding: 80px 0;
  }
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: #000000;
  margin-bottom: 12px;
`;
const Description = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.8;
  max-width: 690px;
  margin-bottom: 20px;
`;
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;
const ContactInformation = styled.div`
  width: 100%;
  padding-top: 30px;
  @media screen and (min-width: 800px) {
    margin-left: 30px;
    width: 400px;
  }
`;
const ContactInformationItem = styled.li`
  margin-bottom: 15px;
  line-height: 1.5;
  color: #000000;
`;
const ContactInformationSubTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
`;
const ContactInformationDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
`;
export {
  ContactInformationDescription,
  ContactInformationSubTitle,
  ContactInformationItem,
  ContactInformation,
  ContactWrapper,
  Description,
  Title,
  Section,
};
