import { FcAssistant, FcReadingEbook, FcMms } from "react-icons/fc";

export const navLinks = [
  {
    name: "Laptops",
    id: "laptops ",
    path: "laptops",
  },
  {
    name: "Desktop PCs",
    id: "DesktopPCs",
    path: "desktop-pcs",
  },
  {
    name: "Networking Devices",
    id: "NetworkingDevices",
    path: "networking-devices",
  },
  {
    name: "Printers & Scanners",
    id: "PrintersScanners",
    path: "printers-scanners",
  },
  {
    name: "PC Parts",
    id: "PCParts",
    path: "pc-parts",
  },
  {
    name: "All Other Products",
    id: "AllOtherProducts",
    path: "all-other-products",
  },
  {
    name: "Repairs",
    id: "Repairs",
    path: "repairs",
  },
  {
    name: "Our Deals",
    id: "OurDeals",
    path: "our-deals",
  },
];
export const UserLinks = [
  {
    name: "My  Account",
    id: "MyAccount",
    path: "user",
  },
  {
    name: "My Wish List",
    id: "MyWishList",
    path: "wish-list",
  },
  {
    name: "Compare",
    id: "Compare",
    path: "compare",
  },
  {
    name: "Create an Account",
    id: "CreateanAccount",
    path: "register",
  },
  {
    name: "Sign In",
    id: "SignIn",
    path: "login",
  },
];
export const suportContent = [
  {
    id: "ProductSupport",
    title: "Product Support",
    description:
      "Up to 3 years on-site warranty available for your peace of mind.",
    icon: <FcAssistant />,
  },
  {
    id: "PersonalAccount",
    title: "Personal Account",
    description:
      "With big discounts, free delivery and a dedicated support specialist.",
    icon: <FcReadingEbook />,
  },
  {
    id: "AmazingSavings",
    title: "Amazing Savings",
    description:
      "Up to 70% off new Products, you can be sure of the best price.",
    icon: <FcMms />,
  },
];
export const paymentMethods = [
  {
    id: "paypal",
    icon: "/payment-methods/paypal.svg",
  },
  {
    id: "visa",
    icon: "/payment-methods/visa.svg",
  },
  {
    id: "maestro",
    icon: "/payment-methods/maestro.svg",
  },
  {
    id: "discover",
    icon: "/payment-methods/discover.svg",
  },
  {
    id: "americanexpress",
    icon: "/payment-methods/americanexpress.svg",
  },
];