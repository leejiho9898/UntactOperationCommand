import { BsSearch, BsCameraVideoFill, BsCalendarFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GiThreeFriends } from "react-icons/gi";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [block, setblock] = useState(false);
  return (
    <HeaderBlock>
      <HeaderLogo>
        <div className="headerLogo">
          <Link to="/">로고+ 비대면 작전 사령부</Link>
        </div>
        <div className="headerUser">
          <Link to="/">
            <FaUserAlt size="25" color="rgb(84, 110, 122)"/>
          </Link>
        </div>
      </HeaderLogo>
      <MenuLink>
        <div className="headerMenu">
          <AiFillHome size="28" />
          Home
        </div>
        <div className="headerMenu">
          <BsCameraVideoFill size="28" /> VideoClass
        </div>
        <div className="headerMenu">
          <BsCalendarFill size="28" /> Schedule
        </div>
        <div className="headerMenu">
          <GiThreeFriends size="28" />
          FriendList
        </div>
      </MenuLink>
      <div className="header-tool">
        {block === false ? (
          <>
            <RoundButton to="/"> 로그인</RoundButton>
            <RoundButton to="/"> 회원가입</RoundButton>
          </>
        ) : (
          <>
            <RoundButton to="/">로그아웃</RoundButton>
          </>
        )}
      </div>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  height: 100%;
  width: 230px;
  padding-left: 20px;
  display: flex;
  float: left;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .header-tool {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
const HeaderLogo = styled.div`
  .headerLogo {
    background: #e7e7e7d4;
    height: 70px;
    width: 200px;
    border-radius: 10px;
    margin-top: 10px;
    text-align: center;
    line-height: 70px;
    margin-bottom: 30px;
    
  }
  .headerUser {
    background: rgb(236, 239, 241);
    line-height: 55px;
    border-radius: 50%;
    text-align: center;
    height: 55px;
    width: 55px;
  }
`;
const MenuLink = styled.div`
  .headerMenu {
    display: flex;
    justify-content: space-between;
    color: rgb(84, 110, 122);
    margin-bottom: 30px;
    width: 160px;
    padding: 20px;
    border-radius: 11px;
    &:hover {
    background: rgb(236, 239, 241);
  }
  }
`;
// const SearchButton = styled(Link)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: transparent;
//   border: none;
//   width: 2.5rem;
//   height: 2.5rem;
//   outline: none;
//   border-radius: 50%;
//   cursor: pointer;
//   &:hover {
//     background: rgba(0, 0, 0, 0.045);
//   }
//   svg {
//     width: 1.125rem;
//     height: 1.125rem;
//   }
//   margin-right: 0.75rem;
// `;

const RoundButton = styled(Link)`
    display: flex;
    justify-content: space-between;
    color: rgb(84, 110, 122);
    margin-bottom: 10px;
    width: 180px;
    padding: 10px;
    border-radius: 11px;
  &:hover {
box-shadow: 2px 2px rgb(218, 221, 223);
  }
`;

export default Header;
