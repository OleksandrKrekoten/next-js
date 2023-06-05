import {
  FcAssistant,
  FcReadingEbook,
  FcMms,
  FcInTransit,
  FcRating,
  FcLike,
  FcPaid,
  FcBullish,
} from "react-icons/fc";
let idGenerator = 543252623;
export const navLinks = [
  {
    name: "Laptops",
    id: idGenerator++,
    path: "laptops",
  },
  {
    name: "Desktop PCs",
    id: idGenerator++,
    path: "desktop-pcs",
  },
  {
    name: "Networking Devices",
    id: idGenerator++,
    path: "networking-devices",
  },
  {
    name: "Printers & Scanners",
    id: idGenerator++,
    path: "printers-scanners",
  },
  {
    name: "Gaming Monitors",
    id: idGenerator++,
    path: "gaming-monitors",
  },
  {
    name: "About",
    id: idGenerator++,
    path: "about",
  },
];
export const UserLinks = [
  {
    name: "My  Account",
    id: idGenerator++,
    path: "user",
  },
  {
    name: "My Wish List",
    id: idGenerator++,
    path: "wish-list",
  },
  {
    name: "Compare",
    id: idGenerator++,
    path: "compare",
  },
  {
    name: "Create an Account",
    id: idGenerator++,
    path: "registration",
  },
  {
    name: "Sign In",
    id: idGenerator++,
    path: "login",
  },
];
export const suportContent = [
  {
    id: idGenerator++,
    title: "Product Support",
    description:
      "Up to 3 years on-site warranty available for your peace of mind.",
    icon: <FcAssistant />,
  },
  {
    id: idGenerator++,
    title: "Personal Account",
    description:
      "With big discounts, free delivery and a dedicated support specialist.",
    icon: <FcReadingEbook />,
  },
  {
    id: idGenerator++,
    title: "Amazing Savings",
    description:
      "Up to 70% off new Products, you can be sure of the best price.",
    icon: <FcMms />,
  },
];
export const paymentMethods = [
  {
    id: idGenerator++,
    icon: "/payment-methods/paypal.svg",
  },
  {
    id: idGenerator++,
    icon: "/payment-methods/visa.svg",
  },
  {
    id: idGenerator++,
    icon: "/payment-methods/maestro.svg",
  },
  {
    id: idGenerator++,
    icon: "/payment-methods/discover.svg",
  },
  {
    id: idGenerator++,
    icon: "/payment-methods/americanexpress.svg",
  },
];
export const AboutContent = [
  {
    id: idGenerator++,
    icon: <FcBullish />,
    title: "A Family That Keeps On Growing",
    description:
      "We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store. Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.",
    image: "/about/about1.png",
  },
  {
    id: idGenerator++,
    icon: <FcPaid />,
    title: "Shop.com",
    description:
      "Shop.com is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.",
    image: "/about/about2.png",
  },
  {
    id: idGenerator++,
    icon: <FcLike />,
    title: "Now You're In Safe Hands",
    description:
      "Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.*Performance compared to i7-9700. Specs varies by model.",
    image: "/about/about3.png",
  },
  {
    id: idGenerator++,
    icon: <FcRating />,
    title: "The Highest Quality of Products",
    description:
      "We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.",
    image: "/about/about4.png",
  },
  {
    id: idGenerator++,
    icon: <FcInTransit />,
    title: "We Deliver to Any Regions",
    description:
      "We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.",
    image: "/about/about5.png",
  },
];
export const ImagesSlider = [
  { path: "/hero/msi1.jpg", alt: "msi baner" },
  { path: "/hero/msi2.jpg", alt: "msi baner" },
  { path: "/hero/msi3.jpg", alt: "msi baner" },
];
export const WorkScheduleData = [
  {
    id: idGenerator++,
    day: "Mon-Thu:",
    hourWork: "9:00 AM - 5:30 PM",
  },
  {
    id: idGenerator++,
    day: "Fr:",
    hourWork: "9:00 AM - 6:00 PM",
  },
  {
    id: idGenerator++,
    day: " Sat:",
    hourWork: "11:00 AM - 5:00 PM",
  },
];
export const MinicartItem = [
  {
    id: idGenerator++,
    image: "/cart/cart1.jpg",
    name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
  },
  {
    id: idGenerator++,
    image: "/cart/cart2.jpg",
    name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
  },
];
export const NewProduct = [
  {
    id: idGenerator++,
    brand: "Acer",
    model: "Swift 7 Pro",
    processor: "Intel Core i7-8500Y",
    graphics_card: "Intel UHD Graphics 615",
    ram: "16GB",
    storage: "512GB NVMe SSD",
    title_photo: "/acer/swift_7_pro.jpg",
    photo: [
      "/acer/swift_7_pro_1.jpg",
      "/acer/swift_7_pro_2.jpg",
      "/acer/swift_7_pro_3.jpg",
    ],
  },
  {
    id: idGenerator++,
    brand: "Acer",
    model: "Aspire 5",
    processor: "Intel Core i5-1135G7",
    graphics_card: "Intel Iris Xe Graphics",
    ram: "8GB",
    storage: "512GB NVMe SSD",
    title_photo: "/acer/aspire_5.jpg",
    photo: [
      "/acer/aspire_5_1.jpg",
      "/acer/aspire_5_2.jpg",
      "/acer/aspire_5_3.jpg",
    ],
    price: "$799",
  },
  {
    id: idGenerator++,
    brand: "Acer",
    model: "Predator Helios 300",
    processor: "Intel Core i7-10750H",
    graphics_card: "NVIDIA GeForce RTX 3060",
    ram: "16GB",
    storage: "1TB NVMe SSD",
    title_photo: "/acer/predator_helios_300.jpg",
    photo: [
      "/acer/predator_helios_300_1.jpg",
      "/acer/predator_helios_300_2.jpg",
      "/acer/predator_helios_300_3.jpg",
    ],
    price: "$1499",
  },
  {
    id: idGenerator++,
    brand: "Acer",
    model: "Swift 3",
    processor: "AMD Ryzen 7 4700U",
    graphics_card: "AMD Radeon Graphics",
    ram: "16GB",
    storage: "512GB NVMe SSD",
    title_photo: "/acer/swift_3.jpg",
    photo: [
      "/acer/swift_3_1.jpg",
      "/acer/swift_3_2.jpg",
      "/acer/swift_3_3.jpg",
    ],
    price: "$899",
  },
];
