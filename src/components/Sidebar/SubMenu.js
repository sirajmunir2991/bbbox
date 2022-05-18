import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  margin-left: ${(props) => (props.isSubNav ? "2em" : "")};

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 15px;
  margin-left: 2em;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const renderData = (subMenuData) => {
  const data = [subMenuData];
  return data.map((item, index) => {
    const depthlebel = 0;
    return (
      <SubMenu
        isSubNavData={true}
        item={item}
        key={index}
        depthlebel={depthlebel}
        isSubNav={true}
      />
    );
  });
};

const SubMenu = ({
  item,
  depthlebel,
  isSubNavData = false,
  isSubNav = false,
}) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
  };

  return (
    <>
      <div>
        <SidebarLink
          to={item.path}
          isSubNav={isSubNav}
          onClick={item.subNav && showSubnav}
        >
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
      </div>
      {subnav &&
        item.subNav &&
        item.subNav.map((item, index) => {
          return (
            <>
              {isSubNavData && (
                <DropdownLink
                  onClick={() => item && item.handleOpen && item.handleOpen()}
                  to={item.path}
                >
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
              )}
              {item.subNav && renderData(item)}
            </>
          );
        })}
    </>
  );
};

export default SubMenu;
