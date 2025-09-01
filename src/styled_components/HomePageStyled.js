import styled from "styled-components";
import am_thuc_viet from "../images/am_thuc_viet.png";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative; /* Đảm bảo ::before nằm trong phạm vi của BackgroundImage */
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${am_thuc_viet});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 0.5; /* Giảm độ mờ của hình nền */
    z-index: -1; /* Đặt hình nền phía sau các phần tử con */
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-height: 100vh; /* Giới hạn chiều cao để kích hoạt cuộn */
  overflow-y: auto; /* Kích hoạt cuộn dọc */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent; /* Đảm bảo trong suốt để thấy nền của BackgroundImage */
  padding-bottom: 20px; /* Thêm padding để tránh nội dung bị cắt */
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1440px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 8px;
    gap: 8px;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 1001;

  span {
    width: 25px;
    height: 3px;
    background-color: #007bff;
    transition: all 0.3s ease;
  }

  &.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.active span:nth-child(2) {
    opacity: 0;
  }

  &.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 8px;
    width: 100%;
    text-align: center;
  }
`;

export const MenuItem = styled.a`
  font-size: 1rem;
  color: ${(props) => (props.isActive ? "#ffffff" : "#007bff")};
  background-color: ${(props) => (props.isActive ? "#007bff" : "transparent")};
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 6px 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Logo1 = styled.img`
  height: 40px;
  margin-left: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    height: 35px;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    height: 30px;
  }
`;

export const LoginSignup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: #303131ff;
  color: #ffffff;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-right: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #ffcb91ff;
    transform: scale(1.05);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }

  @media screen and (max-width: 768px) {
    margin: 8px auto;
    padding: 6px 12px;
    gap: 6px;
  }

  @media screen and (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.9rem;
  }
`;

export const MaleUser = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;

  ${LoginSignup}:hover & {
    transform: rotate(360deg);
  }

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const LoginSignupText = styled.div`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 600;
  transition: color 0.3s ease;

  ${LoginSignup}:hover & {
    color: #343434ff;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Content1 = styled.div`
  position: relative; /* Xóa top để bố cục tự nhiên */
  width: 1216px;
  min-height: 500px; /* Sử dụng min-height thay vì height cố định */
  background-color: #fbfbfb;
  border: 1px solid #00000033;
  z-index: 1;
  border-radius: 20px;
  margin: 80px auto 20px; /* Thêm margin để cách Header cố định */

  @media screen and (max-width: 900px) {
    width: 90%;
    max-width: 700px;
    min-height: auto;
    padding: 15px;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    max-width: 100%;
    padding: 10px;
  }
`;

export const OrangeBox = styled.div`
  position: absolute;
  width: 40%;
  height: 90%;
  background-color: #fc8a06;
  bottom: 0;
  right: 0;
  z-index: 2;
  border-radius: 50% 0 20px 0;

  @media screen and (max-width: 900px) {
    width: 50%;
    height: 40%;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const GirlNoodle = styled.img`
  position: absolute;
  height: 360px;
  bottom: 0;
  right: 230px;
  z-index: 3;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 900px) {
    height: 200px;
    right: 10%;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const GirlPizza = styled.img`
  position: absolute;
  height: 420px;
  bottom: 0;
  right: 320px;
  z-index: 4;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 900px) {
    height: 250px;
    right: 20%;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const NumberOne = styled.img`
  position: absolute;
  width: 15px;
  height: 40px;
  top: 80px;
  right: 130px;
  z-index: 3;

  @media screen and (max-width: 900px) {
    width: 12px;
    height: 30px;
    top: 60px;
    right: 10%;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const NumberTwo = styled.img`
  position: absolute;
  width: 20px;
  height: 40px;
  top: 230px;
  right: 50px;
  z-index: 3;

  @media screen and (max-width: 900px) {
    width: 15px;
    height: 30px;
    top: 150px;
    right: 5%;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const NumberThree = styled.img`
  position: absolute;
  width: 20px;
  height: 40px;
  bottom: 90px;
  right: 100px;
  z-index: 3;

  @media screen and (max-width: 900px) {
    width: 15px;
    height: 30px;
    bottom: 50px;
    right: 8%;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ContentBox1 = styled.div`
  position: absolute;
  width: 250px;
  height: 50px;
  top: 120px;
  right: 110px;
  z-index: 4;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 10px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media screen and (max-width: 900px) {
    width: 200px;
    height: auto;
    top: 100px;
    right: 10%;
    padding: 10px;
  }

  @media screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    max-width: 250px;
    height: auto;
    margin: 10px auto;
    padding: 10px;
    top: auto;
    right: auto;
  }
`;

export const ContentBox2 = styled.div`
  position: absolute;
  width: 250px;
  height: 50px;
  top: 270px;
  right: 30px;
  z-index: 4;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 10px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media screen and (max-width: 900px) {
    width: 200px;
    height: auto;
    top: 220px;
    right: 5%;
    padding: 10px;
  }

  @media screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    max-width: 250px;
    height: auto;
    margin: 10px auto;
    padding: 10px;
    top: auto;
    right: auto;
  }
`;

export const ContentBox3 = styled.div`
  position: absolute;
  width: 250px;
  height: 50px;
  bottom: 30px;
  right: 80px;
  z-index: 4;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 10px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media screen and (max-width: 900px) {
    width: 200px;
    height: auto;
    bottom: 20px;
    right: 8%;
    padding: 10px;
  }

  @media screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    max-width: 250px;
    height: auto;
    margin: 10px auto;
    padding: 10px;
    bottom: auto;
    right: auto;
  }
`;

export const OrderImg = styled.img`
  width: 60px;

  @media screen and (max-width: 900px) {
    width: 50px;
  }
`;

export const ContentBoxText1 = styled.div`
  font-weight: bold;
  font-size: 10px;
`;

export const ContentBoxText2 = styled.div`
  font-size: 10px;
`;

export const ContentText1 = styled.div`
  position: absolute;
  width: 350px;
  top: 140px;
  left: 50px;
  z-index: 3;
  font-size: 14.3px;
  padding: 2px;

  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 300px;
    top: 120px;
    left: 20px;
    font-size: 13px;
  }

  @media screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    max-width: 100%;
    top: auto;
    left: auto;
    font-size: 12px;
    text-align: center;
    padding: 10px 0;
  }
`;

export const ContentText2 = styled.div`
  position: absolute;
  width: 420px;
  top: 170px;
  left: 50px;
  z-index: 3;
  font-size: 45px;
  font-weight: bold;

  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 350px;
    top: 150px;
    left: 20px;
    font-size: 30px;
  }

  @media screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    max-width: 100%;
    top: auto;
    left: auto;
    font-size: 24px;
    text-align: center;
    padding: 10px 0;
  }
`;

export const ContentSearchBox = styled.div`
  position: absolute;
  width: 320px;
  height: 80px;
  top: 300px;
  left: 50px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 280px;
    top: 250px;
    left: 20px;
  }

  @media screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    max-width: 100%;
    top: auto;
    left: auto;
    align-items: center;
    padding: 10px 0;
  }
`;

export const ContentSearchBoxText = styled.div`
  font-size: 11px;
`;

export const SearchInputBox = styled.div`
  height: 50px;
  border-radius: 25px;
  border: 1px solid #606060;
  width: 310px;
  padding: 0 5px;
  background-color: #ffffff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: #fc8a06;
    box-shadow: 0 0 5px rgba(252, 138, 6, 0.5);
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 270px;
    height: 45px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    max-width: 100%;
    height: 40px;
  }
`;

export const SearchInput = styled.input`
  height: 50px;
  border: none;
  outline: none;
  width: 300px;
  border-radius: 25px;
  transition: background-color 0.3s ease;

  &:focus {
    background-color: #f5f5f5;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 45px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 40px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  height: 50px;
  width: 150px;
  top: 25px;
  left: 171px;
  background-color: #fc8a06;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e07b05;
    transform: scale(1.05);
  }

  @media screen and (max-width: 900px) {
    width: 120px;
    height: 45px;
    top: 20px;
    left: auto;
    right: 5px;
  }

  @media screen and (max-width: 600px) {
    position: relative;
    width: 100px;
    height: 40px;
    top: auto;
    left: auto;
    margin: 10px auto;
  }
`;

export const Content2 = styled.div`
  position: relative; /* Xóa top */
  width: 1216px;
  min-height: 300px;
  background-color: #ffffff;
  z-index: 1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto; /* Thêm margin để cách nhau */

  @media screen and (max-width: 900px) {
    width: 90%;
    max-width: 700px;
    min-height: auto;
    padding: 15px 0;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    max-width: 100%;
    padding: 10px 0;
  }
`;

export const Content2Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding: 10px 0 0 10px;

  @media screen and (max-width: 900px) {
    font-size: 20px;
    padding: 10px;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const Content2Slide = styled.div`
  width: 1216px;
  height: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
`;

export const Content2Box1 = styled.div`
  width: 194px;
  height: 240px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #4646461a;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 900px) {
    width: 160px;
    height: 200px;
  }

  @media screen and (max-width: 600px) {
    width: 140px;
    height: 180px;
  }
`;

export const Content2BoxText = styled.div`
  width: 194px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0 0 20px;

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0 0 0 15px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 0 0 10px;
  }
`;

export const Content2BoxTextName = styled.div`
  font-size: 15px;
  font-weight: bold;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }

  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

export const Content2BoxTextCountRestaurants = styled.div`
  font-size: 14px;
  color: #fc8a06;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    font-size: 11px;
  }
`;

export const Content3 = styled.div`
  position: relative; /* Xóa top */
  width: 1216px;
  min-height: 300px;
  background-color: #ffffff;
  z-index: 1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto;

  @media screen and (max-width: 900px) {
    width: 90%;
    max-width: 700px;
    min-height: auto;
    padding: 15px 0;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    max-width: 100%;
    padding: 10px 0;
  }
`;

export const Content3Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding: 10px 0 0 10px;

  @media screen and (max-width: 900px) {
    font-size: 20px;
    padding: 10px;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const Content3Slide = styled.div`
  width: 1216px;
  height: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
`;

export const Content3Box1 = styled.div`
  width: 194px;
  height: 210px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #4646461a;
  border-radius: 10px;
  background-color: #fc8a06;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 900px) {
    width: 160px;
    height: 180px;
  }

  @media screen and (max-width: 600px) {
    width: 140px;
    height: 160px;
  }
`;

export const Content3BoxText = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }

  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

export const Footer = styled.footer`
  position: relative; /* Xóa top */
  width: 1216px;
  min-height: 400px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 20px auto;

  @media screen and (max-width: 900px) {
    width: 90%;
    max-width: 700px;
    min-height: auto;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    max-width: 100%;
  }
`;

export const FooterContent1 = styled.div`
  width: 1216px;
  height: 350px;
  background-color: #fbfbfb;
  border: 1px solid #0000001a;
  border-radius: 20px 20px 0 0;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 200px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 150px;
  }
`;

export const FooterContent2 = styled.div`
  width: 1216px;
  height: 50px;
  background-color: #000000;
  border: 1px solid #0000001a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #606060;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 40px;
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 40px;
    font-size: 10px;
  }
`;
