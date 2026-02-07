export interface PackageItem {
  name: string;
  price?: string;
  image: string;
  category: string;
}

export const packages: PackageItem[] = [
  {
    name: "Valentine Package",
    image: "/images/packages/valentine-package.jpg",
    category: "Seasonal",
  },
  {
    name: "Celebration Lunch Box",
    image: "/images/packages/celebration-lunch-box.jpg",
    category: "Lunch Boxes",
  },
  {
    name: "Maxi Food Tray",
    image: "/images/packages/maxi-food-tray.jpg",
    category: "Trays",
  },
];

export const specialPackagesImage = "/images/packages/special-packages.jpg";
