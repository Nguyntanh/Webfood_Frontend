import styled from "styled-components";
import am_thuc_viet from "../images/am_thuc_viet.png";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh; /* Đặt chiều cao cụ thể để thấy hiệu ứng background */
  position: relative; /* Đảm bảo ::before nằm trong phạm vi của MainContainer */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${am_thuc_viet}); /* Sử dụng hình ảnh làm background */
    background-size: cover; /* Đảm bảo hình ảnh che phủ toàn bộ container */
    background-position: center; /* Căn giữa hình ảnh */
    background-repeat: no-repeat; /* Ngăn lặp lại hình ảnh */
    opacity: 0.5; /* Giảm độ mờ của hình nền xuống 50% */
    z-index: -1; /* Đặt hình nền phía sau các phần tử con */
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  max-width: 600px;
  margin: 40px auto;
  background: linear-gradient(to bottom, #fc8a06, #ffffff);
  border: 1px solid #00000033;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    padding: 20px;
    margin: 20px auto;
    max-width: 90%;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;

export const AuthTitle = styled.h2`
  font-size: 50px;
  font-weight: bold;
  color: #007bff;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
  width: 500px;
  padding: 20px;
  box-sizing: border-box;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
    max-width: 400px;
    padding: 15px;
    gap: 15px;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    max-width: 300px;
    padding: 10px;
    gap: 10px;
  }
`;

export const AuthInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #606060;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #fc8a06;
    box-shadow: 0 0 5px rgba(252, 138, 6, 0.5);
  }

  &:invalid[required]:not(:placeholder-shown) {
    border-color: #ff4d4d;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const AuthButton = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #fc8a06;
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 14px;
  color: #ff4d4d;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const SwitchLink = styled.div`
  font-size: 16px;
  color: #007bff;
  background: none;
  border: none;
  //   text-decoration: none;
  cursor: pointer;
  text-align: center;
  transition: color 0.3s ease;

  &:hover {
    color: #3c3c3cff;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
