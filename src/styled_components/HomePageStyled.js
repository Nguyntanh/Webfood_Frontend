import React from 'react';
import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%; /* Dùng 100% thay vì 100vw để tránh tràn ngang */
  min-height: 100vh; /* Chiếm ít nhất 1 màn hình */
  height: auto; /* Chiều cao tự động theo nội dung */
  margin: 0; /* Loại bỏ margin mặc định */
  padding: 0; /* Loại bỏ padding mặc định */
  box-sizing: border-box; /* Đảm bảo padding/margin không tăng kích thước */
  display: grid;
  grid-template-columns: minmax(0, 1440px); /* Giới hạn chiều rộng tối đa */
  justify-content: center; /* Căn giữa nội dung */
  background-color: #ffffff; /* Màu nền từ Figma */
  overflow-x: hidden; /* Tránh tràn ngang */

  /* Đảm bảo body không có margin mặc định */
  body {
    margin: 0;
  }

  /* Responsive cho tablet */
  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 100%); /* Full width */
    padding: 0 16px; /* Padding cho tablet */
  }

  /* Responsive cho mobile */
  @media (max-width: 480px) {
    grid-template-columns: minmax(0, 100%); /* Full width */
    padding: 0 8px; /* Padding cho mobile */
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* Chia 12 cột như Figma grid */
  grid-template-rows: auto; /* Chiều cao tự động */
  gap: 16px; /* Khoảng cách giữa các phần tử */
  width: 100%; /* Full width của container cha */
  max-width: 1440px; /* Giới hạn tối đa để khớp với Figma */
  height: auto; /* Theo nội dung */
  position: relative; /* Để z-index hoạt động nếu cần */
  padding: 32px 0; /* Padding trên/dưới */
  box-sizing: border-box; /* Đảm bảo padding không tăng kích thước */

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* 1 cột trên mobile */
    gap: 8px; /* Giảm gap */
    padding: 16px 0;
  }

  @media (max-width: 480px) {
    padding: 8px 0; /* Tối ưu padding cho mobile */
  }
`;

export const Title = styled.h1`
  grid-column: span 12; /* Chiếm toàn bộ 12 cột */
  font-size: 2.5rem; /* Kích thước chữ lớn */
  font-weight: bold;
  color: #333333; /* Màu chữ chính */
  margin: 0;
  padding: 0;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem; /* Giảm kích thước chữ */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  grid-column: span 12; /* Chiếm toàn bộ 12 cột */
  font-size: 1rem; /* Kích thước chữ chuẩn */
  color: #666666; /* Màu chữ phụ */
  margin: 16px 0 0 0; /* Margin trên */
  padding: 0;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 12px 0 0 0;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin: 8px 0 0 0;
  }
`;