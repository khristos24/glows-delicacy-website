export interface ImageMapping {
  placeholder: string;
  replacement: string;
  sourceFile: string;
  context: string;
  notes?: string;
}

export const imageMappings: ImageMapping[] = [
  {
    placeholder: "figma:asset/3a56cb5b5bde99e95ffb3faf3815920b753a9483.png",
    replacement: "/images/brand/logo.jpg",
    sourceFile: "assets and general context/IMG-20260120-WA0009.jpg",
    context: "Navigation, Footer, Home hero logo",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1702827482556-481adcd68f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80",
    replacement: "/images/brand/hero.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0017.jpg",
    context: "Home hero background",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1702827482556-481adcd68f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/gallery/native-seafood.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0014.jpg",
    context: "About story image",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMGpvbGxvZiUyMHJpY2V8ZW58MXx8fHwxNzcwMzkzMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    replacement: "/images/menu/jollof-rice-special.jpg",
    sourceFile: "assets and general context/IMG-20260121-WA0047.jpg",
    context: "Home featured dish: Jollof Rice Special",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/jollof-rice.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0013.jpg",
    context: "Menu rice dish: Jollof Rice",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1741026079032-7cb660e44bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc291cCUyMGVndXNpfGVufDF8fHx8MTc3MDM5MzA4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    replacement: "/images/menu/egusi-soup.jpg",
    sourceFile: "assets and general context/IMG-20260124-WA0017.jpg",
    context: "Home featured dish: Egusi Soup",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1741026079032-7cb660e44bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/egusi-soup.jpg",
    sourceFile: "assets and general context/IMG-20260124-WA0017.jpg",
    context: "Menu soups: Egusi Soup",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1741026079032-7cb660e44bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/afang-soup.jpg",
    sourceFile: "assets and general context/IMG-20260124-WA0022.jpg",
    context: "Menu soups: Afang Soup",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1741026079032-7cb660e44bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/okro-seafood.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0010.jpg",
    context: "Menu soups: Okro Seafood",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1741026079032-7cb660e44bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/vegetable-soup.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0015.jpg",
    context: "Menu soups: Vegetable Soup",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1708585869478-e53fa19a1a63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMHJpY2UlMjBzaHJpbXB8ZW58MXx8fHwxNzcwMzkzMDg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    replacement: "/images/menu/fried-rice.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0021.jpg",
    context: "Home featured dish: Fried Rice with Shrimp",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1708585869478-e53fa19a1a63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/fried-rice.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0021.jpg",
    context: "Menu rice dish: Fried Rice with Shrimp",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1767335911106-b96c1cc33099?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmFrZWQlMjBnb29kc3xlbnwxfHx8fDE3NzAzOTMwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    replacement: "/images/menu/premium-baked-goods.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0016.jpg",
    context: "Home featured dish: Premium Baked Goods",
    notes: "Uncertain: image shows an event tray with cake and pastries, used to represent baked goods.",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1767335911106-b96c1cc33099?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/premium-baked-goods.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0016.jpg",
    context: "Menu small chops & pastries: Premium Baked Goods",
    notes: "Uncertain: same tray image used to cover baked goods category.",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1744957280662-af6472128abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/packages/special-packages.jpg",
    sourceFile: "assets and general context/IMG-20260121-WA0043.jpg",
    context: "Home special packages section image",
    notes: "Uncertain: used Valentine hamper to represent special packages.",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1744957280662-af6472128abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/packages/celebration-lunch-box.jpg",
    sourceFile: "assets and general context/IMG-20260124-WA0014.jpg",
    context: "Menu trays & lunch boxes: Celebration Lunch Box",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1653981608672-aea09b857b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/premium-daily-plate.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0008.jpg",
    context: "Menu daily plates: Premium Daily Plate",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1611695500858-e6ac19b1ca55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/coconut-rice.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0012.jpg",
    context: "Menu rice dishes: Coconut Rice with Shrimps",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1702827482556-481adcd68f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/ekpang-nkukwo.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0020.jpg",
    context: "Menu native dishes: Ekpang-Nkukwo",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1623169495444-2a2793212500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/small-chops-platter.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0019.jpg",
    context: "Menu small chops & pastries: Small Chops Platter",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1647275555893-0536f9990b45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/meat-pies.jpg",
    sourceFile: "assets and general context/IMG-20260124-WA0023.jpg",
    context: "Menu small chops & pastries: Meat Pies",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1584440772680-63bec399984b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/banga-soup.jpg",
    sourceFile: "assets and general context/IMG-20260124-WA0013.jpg",
    context: "Menu soups: Banga Soup",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1584440772680-63bec399984b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/packages/maxi-food-tray.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0017.jpg",
    context: "Menu trays & lunch boxes: Maxi Food Tray",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/jollof-rice.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0013.jpg",
    context: "Gallery: Jollof Rice",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1653981608672-aea09b857b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/premium-daily-plate.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0008.jpg",
    context: "Gallery: Premium Daily Plate",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1741026079032-7cb660e44bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/egusi-soup.jpg",
    sourceFile: "assets and general context/IMG-20260124-WA0017.jpg",
    context: "Gallery: Egusi Soup",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1623169495444-2a2793212500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/small-chops-platter.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0019.jpg",
    context: "Gallery: Small Chops",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1611695500858-e6ac19b1ca55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/coconut-rice.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0012.jpg",
    context: "Gallery: Coconut Rice",
  },
  {
    placeholder:
      "https://images.unsplash.com/photo-1702827482556-481adcd68f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    replacement: "/images/menu/ekpang-nkukwo.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0020.jpg",
    context: "Gallery: Traditional Cuisine",
  },
  {
    placeholder: "N/A (new gallery image)",
    replacement: "/images/gallery/fruit-salad.jpg",
    sourceFile: "assets and general context/IMG-20260122-WA0018.jpg",
    context: "Gallery: Creamy Fruit Salad",
    notes: "Added to expand gallery variety.",
  },
  {
    placeholder: "N/A (new gallery image)",
    replacement: "/images/gallery/oha-soup.jpg",
    sourceFile: "assets and general context/IMG-20260124-WA0015.jpg",
    context: "Gallery: Oha Soup",
    notes: "Added to expand gallery variety.",
  },
  {
    placeholder: "N/A (new menu item)",
    replacement: "/images/packages/valentine-package.jpg",
    sourceFile: "assets and general context/IMG-20260121-WA0045.jpg",
    context: "Menu packages: Valentine Package",
    notes: "Added as a dedicated seasonal package item.",
  },
];
