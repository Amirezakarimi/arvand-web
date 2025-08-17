import React from "react";
import { PanelHeader } from "../../components";
import { ProfileTables } from "../../containers";
export default function PanelProfile() {
  const ProfileItems = [
    {
      title: "Basic Information",
      items: [
        {
          title: "Fullname",
          kind: "input",
          type: "text",
        },
        {
          title: "Industry",
          kind: "select",
          options: [
            "Apparel",
            "Agriculture",
            "Automobiles & Motorcycles",
            "Beauty & Personal Care",
          ],
        },
        {
          title: "Products",
          kind: "input",
          type: "text",
        },
        {
          title: "Industry",
          kind: "select",
          options: ["Male", "Female"],
        },
        {
          title: "Profile Image",
          kind: "link",
          link: "#",
        },
        {
          title: "Address",
          kind: "input",
          type: "text",
        },
        {
          title: "City",
          kind: "input",
          type: "text",
        },
        {
          title: "Province / State",
          kind: "input",
          type: "text",
        },
        {
          title: "Country",
          kind: "select",
          options: ["Iran", "USA", "Russa", "UAE", "China"],
        },
        {
          title: "Zip Code / Postal Code",
          kind: "input",
          type: "text",
        },
      ],
    },
    {
      title: "Account Information",
      items: [
        {
          title: "I am a",
          kind: "text",
          text: "Buyer",
        },
        {
          title: "Member Id",
          kind: "text",
          text: "2312369",
        },
        {
          title: "Package Name",
          kind: "text",
          text: "Free",
        },
        {
          title: "Expiry Date ",
          kind: "text",
          text: " Unlimited ",
        },
        {
          title: "Change Password",
          kind: "link",
          link: "#",
        },
      ],
    },
    {
      title: "Preferred Instant Messenger ID(s) ",
      items: [
        {
          title: "QQ ID",
          kind: "input",
          type: "text",
        },
        {
          title: "Skype",
          kind: "input",
          type: "text",
        },
        {
          title: "Wechat ID",
          kind: "input",
          type: "text",
        },
        {
          title: "Whatsapp",
          kind: "input",
          type: "text",
        },
      ],
    },
  ];
  return (
    <div className="Panel-container">
      <PanelHeader title={"Manage Profile"} />
      <ProfileTables tableList={ProfileItems} />
    </div>
  );
}
