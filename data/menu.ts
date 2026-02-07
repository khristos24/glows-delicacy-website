export interface MenuItem {
  name: string;
  price?: string;
  image: string;
  category: string;
}

export const featuredDishes: MenuItem[] = [
  {
    name: "Jollof Rice Special",
    price: "₦3,500",
    image: "/images/menu/jollof-rice-special.jpg",
    category: "Daily Plates",
  },
  {
    name: "Egusi Soup",
    price: "₦5,000",
    image: "/images/menu/egusi-soup.jpg",
    category: "Soups",
  },
  {
    name: "Fried Rice with Shrimp",
    price: "₦5,000",
    image: "/images/menu/fried-rice.jpg",
    category: "Rice Dishes",
  },
  {
    name: "Premium Baked Goods",
    price: "From ₦500",
    image: "/images/menu/premium-baked-goods.jpg",
    category: "Small Chops & Pastries",
  },
];

export const menuCategories = [
  {
    category: "Daily Plates",
    description: "Fresh, homemade meals served daily",
    items: [
      {
        name: "Jollof Rice Special",
        price: "₦3,500",
        image: "/images/menu/jollof-rice-special.jpg",
        category: "Daily Plates",
      },
      {
        name: "Premium Daily Plate",
        price: "₦5,000",
        image: "/images/menu/premium-daily-plate.jpg",
        category: "Daily Plates",
      },
    ],
  },
  {
    category: "Soups",
    description: "Traditional Nigerian soups made with authentic recipes",
    items: [
      {
        name: "Egusi Soup",
        price: "₦5,000",
        image: "/images/menu/egusi-soup.jpg",
        category: "Soups",
      },
      {
        name: "Afang Soup",
        image: "/images/menu/afang-soup.jpg",
        category: "Soups",
      },
      {
        name: "Banga Soup",
        image: "/images/menu/banga-soup.jpg",
        category: "Soups",
      },
      {
        name: "Okro Seafood",
        image: "/images/menu/okro-seafood.jpg",
        category: "Soups",
      },
      {
        name: "Vegetable Soup",
        image: "/images/menu/vegetable-soup.jpg",
        category: "Soups",
      },
    ],
  },
  {
    category: "Rice Dishes",
    description: "Flavorful rice dishes prepared to perfection",
    items: [
      {
        name: "Jollof Rice",
        image: "/images/menu/jollof-rice.jpg",
        category: "Rice Dishes",
      },
      {
        name: "Fried Rice with Shrimp",
        price: "₦5,000",
        image: "/images/menu/fried-rice.jpg",
        category: "Rice Dishes",
      },
      {
        name: "Coconut Rice with Shrimps",
        image: "/images/menu/coconut-rice.jpg",
        category: "Rice Dishes",
      },
    ],
  },
  {
    category: "Native Dishes",
    description: "Authentic traditional Nigerian specialties",
    items: [
      {
        name: "Ekpang-Nkukwo",
        image: "/images/menu/ekpang-nkukwo.jpg",
        category: "Native Dishes",
      },
    ],
  },
  {
    category: "Small Chops & Pastries",
    description: "Perfect for events and quick bites",
    items: [
      {
        name: "Small Chops Platter",
        image: "/images/menu/small-chops-platter.jpg",
        category: "Small Chops & Pastries",
      },
      {
        name: "Meat Pies",
        price: "From ₦500",
        image: "/images/menu/meat-pies.jpg",
        category: "Small Chops & Pastries",
      },
      {
        name: "Premium Baked Goods",
        image: "/images/menu/premium-baked-goods.jpg",
        category: "Small Chops & Pastries",
      },
    ],
  },
];
