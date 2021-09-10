import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [block, setblock] = useState(false);
  return (
    <HeaderBlock>
      <HeaderLogo>로고 들어갈 자리</HeaderLogo>
      <div>공지사항 | 기타 등등 | 후기게시판</div>
      <div className="header-tool">
        <SearchButton to="/">
          <BsSearch />
        </SearchButton>
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
  width: 5.5rem;
  display: flex;
  float: left;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .header-tool {
    display: flex;
    flex-direction: column;
  }
`;
const HeaderLogo = styled.div`
  margin-left: 15px;
`;

const SearchButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.045);
  }
  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
  margin-right: 0.75rem;
`;

const RoundButton = styled(Link)`
  display: flex;
  color: white;
  text-decoration: none;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  border: none;
  width: 5.5rem;
  height: 2.5rem;
  outline: none;
  border-radius: 20px;
  cursor: pointer;
  margin: 5px;
  background-color: #f3be4b;
  &:hover {
    background: #be953a;
  }
`;

export default Header;
