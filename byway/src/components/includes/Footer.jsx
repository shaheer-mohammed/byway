import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterContainerWrapper>
          <FooterContent>
            <FooterRight>
              <FooterSection>
                <FooterHeading>
                  <FooterHeadingLogo>
                    <FooterLogoImg
                      src={require("../../assets/images/image 4.png")}
                      alt="Byway Logo"
                    />
                  </FooterHeadingLogo>
                </FooterHeading>
                <Description>
                  Empowering learners through accessible and engaging online
                  education. Byway is a leading online learning platform
                  dedicated to providing high-quality, flexible, and affordable
                  educational experiences.
                </Description>
              </FooterSection>
            </FooterRight>

            <FooterLeft>
              <FooterSection>
                <FooterHeading>Get Help</FooterHeading>
                <FooterList>
                  <FooterItem>
                    <FooterLink href="#">Contact Us</FooterLink>
                  </FooterItem>
                  <FooterItem>
                    <FooterLink href="#">Latest Articles</FooterLink>
                  </FooterItem>
                  <FooterItem>
                    <FooterLink href="#">FAQ</FooterLink>
                  </FooterItem>
                </FooterList>
              </FooterSection>

              <FooterSection>
                <FooterHeading>Programs</FooterHeading>
                <FooterList>
                  <FooterItem>
                    <FooterLink href="#">Art & Design</FooterLink>
                  </FooterItem>
                  <FooterItem>
                    <FooterLink href="#">Business</FooterLink>
                  </FooterItem>
                  <FooterItem>
                    <FooterLink href="#">IT & Software</FooterLink>
                  </FooterItem>
                  <FooterItem>
                    <FooterLink href="#">Languages</FooterLink>
                  </FooterItem>
                  <FooterItem>
                    <FooterLink href="#">Programming</FooterLink>
                  </FooterItem>
                </FooterList>
              </FooterSection>

              <FooterSection>
                <FooterHeading>Contact Us</FooterHeading>
                <ContactInfo>
                  Address: 123 Main Street, Anytown, CA 12345
                </ContactInfo>
                <ContactInfo>Tel: +(123) 456-7890</ContactInfo>
                <ContactInfo>Mail: bywayedu@webkul.in</ContactInfo>
                <SocialIcons>
                  <SocialIconsDiv>
                    <Link href="#">
                      <SocialIconsContainer>
                        <SocialIconImg
                          src={
                            require("../../assets/images/facebook.svg").default
                          }
                          alt="Facebook"
                        />
                      </SocialIconsContainer>
                    </Link>
                    <Link href="#">
                      <SocialIconsContainer>
                        <SocialIconImgX
                          src={require("../../assets/images/x.svg").default}
                          alt="x"
                        />
                      </SocialIconsContainer>
                    </Link>
                    <Link href="#">
                      <SocialIconsContainer>
                        <SocialIconImg
                          src={
                            require("../../assets/images/microsoft.svg").default
                          }
                          alt="microsoft"
                        />
                      </SocialIconsContainer>
                    </Link>
                    <Link href="#">
                      <SocialIconsContainer>
                        <SocialIconImgGit
                          src={require("../../assets/images/git.svg").default}
                          alt="git"
                        />
                      </SocialIconsContainer>
                    </Link>
                    <Link href="#">
                      <SocialIconsContainer>
                        <SocialIconImg
                          src={
                            require("../../assets/images/google.svg").default
                          }
                          alt="google"
                        />
                      </SocialIconsContainer>
                    </Link>
                  </SocialIconsDiv>
                </SocialIcons>
              </FooterSection>
            </FooterLeft>
          </FooterContent>
        </FooterContainerWrapper>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.footer`
  background-color: #182333;
  color: white;
  padding: 40px 0;
`;
const FooterContainerWrapper = styled.div`
  max-width: 85%;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
`;
const FooterRight = styled.div`
  width: 416px;
  height: 161px;
  gap: 16px;
  opacity: 0px;
  margin-bottom: 10px;

  @media all and (max-width: 480px) {
    width: 350px;
    height: 161px;
    gap: 16px;
    margin-bottom: 38px;
  }
  @media all and (max-width: 360px) {
    width: 317px;
  }
  @media all and (max-width: 320px) {
    width: 300px;
    height: 30px;

  }
`;
const FooterLeft = styled.div`
  display: flex;
  width: 60%;
  gap: 20px;
  @media all and (max-width: 960px) {
    width: 100%;
  }
  @media all and (max-width: 640px) {
    flex-wrap: wrap;
  }
`;

const FooterHeading = styled.h4`
  margin-bottom: 20px;
`;

const FooterHeadingLogo = styled.div`
  cursor: pointer;
  width: 111px;
  height: 40px;
  @media all and (max-width: 960px) {
    margin: 0 auto;
  }
`;
const FooterLogoImg = styled.img`
  display: block;
  width: 100%;
`;
const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #cbd5e1;
  @media all and (max-width: 960px) {
    text-align: center;
  }
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
  @media all and (max-width: 320px) {
    display: none;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterItem = styled.li`
  font-size: 14px;
  font-weight: 500;
  color: #cbd5e1;
  line-height: 26.4px;
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;

const FooterLink = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;
const Link = styled.a``;
const SocialIconsContainer = styled.div`
  width: 40px;
  height: 40px;
  @media all and (max-width: 320px) {
    width: 30px;
  }
`;

const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const ContactInfo = styled.p`
  color: #cbd5e1;
  text-decoration: none;
  line-height: 22.4px;
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;
const SocialIconImg = styled.img`
  display: block;
  width: 100%;
`;
const SocialIconImgX = styled.img`
  display: block;
  width: 100%;
  filter: invert(100%) brightness(100%);
`;
const SocialIconImgGit = styled.img`
  display: block;
  width: 100%;
  filter: invert(100%) brightness(100%);
`;
const SocialIconsDiv = styled.div`
  width: 296px;
  height: 40px;
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 360px) {
    width: 263px;
  }
`;
