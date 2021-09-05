import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const [block, setblock] = useState(false)
  return (
    <HeaderBox>
      <div id="LandingHeader">
        <div id="header">
          <div id="search-area">
            <div className="logo">
              <a href="/">{/* <img src={logo} alt="" /> */}</a>
            </div>
            <div className="search-box">
              <input
                type="text"
                className="search"
                placeholder="검색어를 입력하세요"
              ></input>
              <div className="search-ico">
                <span>
                  <BsSearch size="18" />
                </span>
              </div>
            </div>
          </div>
          <div className="user">
            <div className="user-border">
              <ul>
                {block===true? ( 
                <div>
                  <li>hi, 사용자이름!</li>
                  <li>
                    <button>로그아웃</button>
                  </li>
                </div>
                  ) : ( 
                <div>
                  <li>
                    <Link to="/">로그인</Link>
                  </li>
                  <li>
                    <Link to="/">회원가입</Link>
                  </li>
                </div>
                 )} 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  #header {
    display: flex;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.08);
    height: 60px;
    align-items: center;
    background-color: #fff;
    width: 1080px;
    margin: 0 auto;
    #search-area {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 45px;
      .search-box {
        display: flex;
        width: 400px;
        height: 46px;
        align-items: center;
        .search {
          height: 30px;
          width: 300px;
          border: 1px solid #999;
          border-radius: 3px;
        }
        .search-ico {
          height: 100%;
          width: 35px;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          span {
            vertical-align: middle;
            color: black;
          }
        }
      }
      
    }
    .user {
        display: flex;
        flex-basis: 200px;
        ul {
          display: inline-block;
          height: 20;
          align-items: center;
        }
        li {
          display: inline;
          margin: 5px;
          font-size: 13px;
          color: black;
        }
      }
  }
`;
export default Header;
