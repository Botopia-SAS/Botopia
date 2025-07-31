import React from "react";
import WebDropdown from "./WebDropdown";
import AppDropdown from "./AppDropdown";
// import EcomDropdown from "./E-comDropdown";
import IADropdown from "./IADropdown";
import AutoDropdown from "./AutoDropdown";
import DesignDropdown from "./DesignDropdown";
import MarketingDropdown from "./MarketingDropdown";
import EquiposDropdown from "./EquiposDropdown";

interface DropdownContentProps {
  activeDropdown: string | null;
}

const DropdownContent: React.FC<DropdownContentProps> = ({
  activeDropdown,
}) => {
  if (!activeDropdown) return null;

  switch (activeDropdown) {
    case "web":
      return <WebDropdown />;
    case "app":
      return <AppDropdown />;
    // case "ecom":
    //   return <EcomDropdown />;
    case "ia":
      return <IADropdown />;
    case "auto":
      return <AutoDropdown />;
    case "design":
      return <DesignDropdown />;
    case "marketing":
      return <MarketingDropdown />;
    case "engineering":
      return <EquiposDropdown />;
    default:
      return null;
  }
};

export default DropdownContent;
