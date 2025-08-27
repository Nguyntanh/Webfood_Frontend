import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 16px 0;
  background-color: #f8f9fa; /* Nền nhẹ */
  border-radius: 4px;
  width: 100%;
  max-width: 1440px; /* Khớp với MainContainer */
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack dọc trên mobile */
    gap: 8px;
    padding: 8px 0;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  color: ${props => (props.isActive ? '#ffffff' : '#007bff')};
  background-color: ${props => (props.isActive ? '#007bff' : 'transparent')};
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default function Navbar() {
  const location = useLocation();

  return (
    <NavContainer>
      <NavLink to="/" isActive={location.pathname === '/'} aria-label="Trang chủ">
        Home
      </NavLink>
      <NavLink to="/home2" isActive={location.pathname === '/home2'} aria-label="Trang Home 2">
        Home 2
      </NavLink>
    </NavContainer>
  );
}