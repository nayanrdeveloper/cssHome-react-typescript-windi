import React, { useState } from "react";
import dashboardImage from "../../assets/dashboard.png";
import closeIcon from "../../assets/close.png";
import menuIcon from "../../assets/menu.png";
import mainShadowImage from "../../assets/mainShadow.png";
import mainBorderImage from "../../assets/mainBorder.png";
import mainTextImage from "../../assets/textMain.png";
import mainTextShadowImage from "../../assets/mainTextShadow.png";
import mainOutlineImage from "../../assets/mainOutline.png";
import mainFilterImage from "../../assets/main_filter.png";
import mainTransformationImage from "../../assets/main_transformation.png";
import shadowImage3 from "../../assets/empty.png";
import SidebarItem from "./SidebarItem";
import { Routes, Route } from "react-router-dom";
import Shadow from "../Shadows/ShadowHome";
import Shadows from "../Shadows/Shadows";
import ShadowTool1 from "../Shadows/ShadowTool1";
import BorderHome from "../Border/BorderHome";
import Border from "../Border/Border";
import BorderTool from "../Border/BorderTool";
import AdvanceBorderTool from "../Border/AdvanceBorderTool";
import TextHome from "../Text/TextHome";
import Texts from "../Text/Texts";
import TextTool from "../Text/TextTool";
import TextSpacing from "../Text/TextSpacing";
import OutlineHome from "../Outline/OutlineHome";
import Outlines from "../Outline/Outlines";
import OutlineTool from "../Outline/OutlineTool";
import TextShadowHome from "../TextShadow/TextShadowHome";
import TextShadows from "../TextShadow/TextShadows";
import TextShadowTool from "../TextShadow/TextShadowTool";
import StoreData from "../../../StoreData";
import { observer } from "mobx-react-lite";
import Register from "../Register/Register";
import Login from "../Register/Login";
import PrivateComponent from "../Register/PrivateComponent";
import AdminHome from "../Admin/AdminHome";
import AdminLogin from "../Admin/AdminLogin";
import AdminComponent from "../Register/AdminComponent";
import TransformHome from "../Transform/TransformHome";
import Transform2d from "../Transform/Transform2d";
import Transform3d from "../Transform/Transform3d";
import Transforms from "../Transform/Transforms";
import FilterHome from "../../Filter/FilterHome";
import FilterTool from "../../Filter/FilterTool";
import Filters from "../../Filter/Filters";
import ContactUs from "../ContactUs";

function Sidebar() {
  interface menuItemObj {
    name: string;
    image: string;
    to: string;
  }
  const menuItemList: menuItemObj[] = [
    { name: "Shadow", image: mainShadowImage, to: "/shadow" },
    { name: "Border", image: mainBorderImage, to: "/border" },
    { name: "Text", image: mainTextImage, to: "/text-home" },
    { name: "Outline", image: mainOutlineImage, to: "/outline-home" },
    {
      name: "Text Shadows",
      image: mainTextShadowImage,
      to: "/text-shadow-home",
    },
    { name: "Transform", image: mainTransformationImage, to: "/transform-home" },
    { name: "Filter", image: mainFilterImage, to: "/filter-home" },


  ];

  const [isShowHideMenu, setIsShowHideMenu] = useState<boolean>(true);
  interface propsType {
    isShowHideMenu: boolean;
  }

  return (
    <aside>
      <div className="flex">
        <div
          className={`flex flex-col md:w-${
            StoreData.isHideSidebar ? "20" : "80"
          } border-r-2 gap-2 h-screen p-2 fade-in-image`}
        >
          <ul className="flex flex-col mt-5 gap-4">
            {menuItemList &&
              menuItemList.map((menuItem) => {
                return <SidebarItem key={menuItem.name} {...menuItem} />;
              })}
          </ul>
        </div>
        <div className="w-full h-full p-4 m-8 overflow-y-auto">
          <div className="p-5 border-4 shadow-xl h-full">
            <Routes>
              <Route path="/" element={<BorderHome />} />

              <Route path="/shadow" element={<Shadow />} />
              <Route path="/shadows" element={<Shadows />} />
              <Route path="/shadow-tool" element={<ShadowTool1 />} />

              <Route path="/text-shadow-home" element={<TextShadowHome />} />
              <Route path="/text-shadows" element={<TextShadows />} />
              <Route path="/text-shadow-tool" element={<TextShadowTool />} />

              <Route path="/border" element={<BorderHome />} />
              <Route path="/borders" element={<Border />} />
              <Route path="/border-tool" element={<BorderTool />} />
              <Route
                path="/advance-border-tool"
                element={<AdvanceBorderTool />}
              />

              {/* <Route element={<PrivateComponent />}> */}
                <Route path="/text-home" element={<TextHome />} />
                <Route path="/text" element={<Texts />} />
                <Route path="/text-tool" element={<TextTool />} />
                <Route path="/text-spacing" element={<TextSpacing />} />
              {/* </Route> */}

              <Route path="/outline-home" element={<OutlineHome />} />
              <Route path="/outlines" element={<Outlines />} />
              <Route path="/outline-tool" element={<OutlineTool />} />

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              <Route path="/transform-home" element={<TransformHome />} />
              <Route path="/transforms" element={<Transforms />} />
              <Route path="/transforms-2d" element={<Transform2d />} />
              <Route path="/transforms-3d" element={<Transform3d />} />

              <Route path="/filter-home" element={<FilterHome />} />
              <Route path="/filter-generator" element={<FilterTool />} />
              <Route path="/filters" element={<Filters />} />

              <Route path="/contact-us" element={<ContactUs />} />
              
              {/* <Route path="/admin-login" element={<AdminLogin />} /> */}
              {/* <Route element={<AdminComponent />}> */}
                {/* <Route path="/admin-dashboard" element={<AdminHome />} /> */}
              {/* </Route> */}
            </Routes>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default observer(Sidebar);
