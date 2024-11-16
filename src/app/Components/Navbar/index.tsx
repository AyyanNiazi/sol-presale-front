import React, { FC, useState } from "react";
import { item, navbarProps } from "./navbar.type";
import Tab from "./Tab";
import CreatePresale from "../CreatePresale";
import DepositToken from "../DepositToken";
import BuyToken from "../BuyToken";
import ClaimToken from "../ClaimToken";

const Navbar: FC<navbarProps> = ({}) => {
  const [activeTab, setActiveTab] = useState<string>("Create");
  const list: item[] = [
    {
      name: "create",
      component: <CreatePresale />,
    },
    {
      name: "deposit",
      component: <DepositToken />,
    },
    {
      name: "update",
      component: <></>,
    },
    {
      name: "start",
      component: <></>,
    },
    {
      name: "buy",
      component: <BuyToken />,
    },
    {
      name: "claim",
      component: <ClaimToken />,
    },
    {
      name: "Sol",
      component: <></>,
    },
    {
      name: "Token",
      component: <></>,
    },
  ];

  return (
    <div className="flex space-x-4 w-full">
      {list.map((item, index) => {
        return (
          <Tab name={item.name} onClick={setActiveTab} activeTab={activeTab} />
        );
      })}
    </div>
  );
};

export default Navbar;
