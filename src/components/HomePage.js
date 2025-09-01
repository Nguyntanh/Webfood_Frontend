import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MainContainer,
  Header,
  Hamburger,
  Logo1,
  Menu,
  MenuItem,
  LoginSignup,
  MaleUser,
  LoginSignupText,
  Content1,
  OrangeBox,
  GirlNoodle,
  GirlPizza,
  NumberOne,
  NumberTwo,
  NumberThree,
  ContentBox1,
  ContentBox2,
  ContentBox3,
  OrderImg,
  ContentBoxText1,
  ContentBoxText2,
  ContentText1,
  ContentText2,
  ContentSearchBox,
  ContentSearchBoxText,
  SearchInputBox,
  SearchInput,
  SearchButton,
  Content2,
  Content2Title,
  Content2Slide,
  Content2Box1,
  Content2BoxText,
  Content2BoxTextName,
  Content2BoxTextCountRestaurants,
  Content3,
  Content3Title,
  Content3Slide,
  Content3Box1,
  Content3BoxText,
  Footer,
  FooterContent1,
  FooterContent2,
  BackgroundImage,
} from "../styled_components/HomePageStyled";

// Image imports
import logo1 from "../images/logo1.png";
import maleUser from "../images/male_user.png";
import girlNoodle from "../images/girl_noodle.png";
import girlPizza from "../images/girl_pizza.png";
import numberOne from "../images/number_one.png";
import numberTwo from "../images/number_two.png";
import numberThree from "../images/number_three.png";
import burgerFastfood from "../images/burger_fastfood.png";
import salad from "../images/salad.png";
import pastaCasual from "../images/pasta_casual.png";
import pizza from "../images/pizza.png";
import breakfast from "../images/breakfast.png";
import soup from "../images/soup.png";
import mcdonaldsLondon from "../images/McDonald's_London.png";
import papaJohns from "../images/Papa_Johns.png";
import kfcWestLondon from "../images/KFC_West_London.png";
import texasChicken from "../images/Texas_Chicken.png";
import burgerKing from "../images/Burger_King.png";
import shaurma1 from "../images/Shaurma_1.png";

function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/browse-menu", label: "Browse Menu" },
    { to: "/special-offers", label: "Special Offers" },
    { to: "/restaurants", label: "Restaurants" },
    { to: "/track-orders", label: "Track Orders" },
  ];

  return (
    <Header className={isMenuOpen ? "active" : ""}>
      <Logo1 src={logo1} alt="logo1" />
      <Hamburger onClick={toggleMenu} className={isMenuOpen ? "active" : ""}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu isOpen={isMenuOpen}>
        {navItems.map((item) => (
          <MenuItem
            as={Link}
            key={item.label}
            to={item.to}
            isActive={location.pathname === item.to}
            aria-label={item.label}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <LoginSignup>
          <MaleUser src={maleUser} alt="male_user" />
          <LoginSignupText>Login/Signup</LoginSignupText>
        </LoginSignup>
      </Link>
    </Header>
  );
}

function Content1Component() {
  return (
    <Content1>
      <OrangeBox />
      <GirlNoodle src={girlNoodle} alt="girl_noodle" />
      <GirlPizza src={girlPizza} alt="girl_pizza" />
      <NumberOne src={numberOne} alt="number_one" />
      <NumberTwo src={numberTwo} alt="number_two" />
      <NumberThree src={numberThree} alt="number_three" />
      {[
        {
          text1: "We've Received your order!",
          text2: "Awaiting Restaurant acceptance",
        },
        {
          text1: "Order Accepted!",
          text2: "Your order will be delivered shortly",
        },
        {
          text1: "Your rider's nearby!",
          text2: "They're almost there - get ready",
        },
      ].map((box, index) => (
        <div
          key={index}
          className={
            index === 0
              ? "content_box1"
              : index === 1
              ? "content_box2"
              : "content_box3"
          }
        >
          {index === 0 && (
            <ContentBox1>
              <OrderImg src={logo1} alt="order_img" />
              <div>
                <ContentBoxText1>{box.text1}</ContentBoxText1>
                <ContentBoxText2>{box.text2}</ContentBoxText2>
              </div>
            </ContentBox1>
          )}
          {index === 1 && (
            <ContentBox2>
              <OrderImg src={logo1} alt="order_img" />
              <div>
                <ContentBoxText1>{box.text1}</ContentBoxText1>
                <ContentBoxText2>{box.text2}</ContentBoxText2>
              </div>
            </ContentBox2>
          )}
          {index === 2 && (
            <ContentBox3>
              <OrderImg src={logo1} alt="order_img" />
              <div>
                <ContentBoxText1>{box.text1}</ContentBoxText1>
                <ContentBoxText2>{box.text2}</ContentBoxText2>
              </div>
            </ContentBox3>
          )}
        </div>
      ))}
      <ContentText1>
        Order Restaurant food, takeaway and groceries.
      </ContentText1>
      <ContentText2>
        Feast Your Senses,{" "}
        <span style={{ color: "#FC8A06" }}>Fast and Fresh</span>
      </ContentText2>
      <ContentSearchBox>
        <ContentSearchBoxText>
          Enter a postcode to see what we deliver
        </ContentSearchBoxText>
        <SearchInputBox>
          <SearchInput type="search" placeholder="Search..." />
        </SearchInputBox>
        <SearchButton>Search</SearchButton>
      </ContentSearchBox>
    </Content1>
  );
}

function Content2Component() {
  const categories = [
    { img: burgerFastfood, name: "Burgers & Fast Food", count: 21 },
    { img: salad, name: "Salads", count: 32 },
    { img: pastaCasual, name: "Pasta & Casuals", count: 4 },
    { img: pizza, name: "Pizza", count: 32 },
    { img: breakfast, name: "Breakfast", count: 4 },
    { img: soup, name: "Soups", count: 32 },
  ];

  return (
    <Content2>
      <Content2Title>Order.uk Popular Categories</Content2Title>
      <Content2Slide>
        {categories.map((category, index) => (
          <Content2Box1 key={index}>
            <img
              src={category.img}
              alt={category.name}
              className="content2_box_img"
            />
            <Content2BoxText>
              <Content2BoxTextName>{category.name}</Content2BoxTextName>
              <Content2BoxTextCountRestaurants>
                {category.count} Restaurants
              </Content2BoxTextCountRestaurants>
            </Content2BoxText>
          </Content2Box1>
        ))}
      </Content2Slide>
    </Content2>
  );
}

function Content3Component() {
  const restaurants = [
    { img: mcdonaldsLondon, name: "McDonald’s London" },
    { img: papaJohns, name: "Papa Johns" },
    { img: kfcWestLondon, name: "KFC West London" },
    { img: texasChicken, name: "Texas Chicken" },
    { img: burgerKing, name: "Burger King" },
    { img: shaurma1, name: "Shaurma 1" },
  ];

  return (
    <Content3>
      <Content3Title>Popular Restaurants</Content3Title>
      <Content3Slide>
        {restaurants.map((restaurant, index) => (
          <Content3Box1 key={index}>
            <img
              src={restaurant.img}
              alt={restaurant.name}
              className="content3_box_img"
            />
            <Content3BoxText>{restaurant.name}</Content3BoxText>
          </Content3Box1>
        ))}
      </Content3Slide>
    </Content3>
  );
}

function FooterComponent() {
  return (
    <Footer>
      <FooterContent1 />
      <FooterContent2 />
    </Footer>
  );
}

function HomePage() {
  return (
    <BackgroundImage>
      <MainContainer>
        <HeaderComponent />
        <Content1Component />
        <Content2Component />
        <Content3Component />
        <FooterComponent />
      </MainContainer>
    </BackgroundImage>
  );
}

export default HomePage;
