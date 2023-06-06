import styled from "@emotion/styled";
import Link from "next/link";

const HeaderContactPanel = styled.div`
  background-color: ${(props) => ` ${props.theme.colors.secondaryBackground}`};
  `

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 44px;
  font-weight: 600;
  font-size: ${(props) => ` ${props.theme.fontSize.small}`};
  line-height: 1.5;
  color: ${(props) => ` ${props.theme.colors.secondaryText}`};

`;
const LinkToContactUs = styled(Link)`
  color: ${(props) => ` ${props.theme.colors.textWhite}`};
  text-decoration: underline;
  margin-left: 10px;
`;
const ContactLink = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => ` ${props.theme.colors.textWhite}`};

  p {
    display: none;
    margin-right: 14px;
    @media screen and (min-width: 500px) {
      display: block;
    }
  }
  
`;
const Description = styled.p`
  display: none;
  @media screen and (min-width: 840px) {
    display: block;
    font-size: ${(props) => ` ${props.theme.fontSize.small}`};
  }
`;
export {
  Description,
  ContactLink,
  Wrapper,
  HeaderContactPanel,
  LinkToContactUs,
};
