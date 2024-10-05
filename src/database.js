const data = {
  menu: [
    {
      name: "Margherita Pizza",
      category: "Pizza",
      description:
        "Classic margherita pizza with fresh tomatoes, mozzarella, and basil.",
      price: 9.99,
    },
    {
      name: "Pepperoni Pizza",
      category: "Pizza",
      description:
        "A favorite pepperoni pizza with mozzarella and tomato sauce.",
      price: 11.99,
    },
    {
      name: "BBQ Chicken Pizza",
      category: "Pizza",
      description:
        "Grilled chicken, BBQ sauce, onions, and cilantro on a crispy crust.",
      price: 12.99,
    },
    {
      name: "Spaghetti Carbonara",
      category: "Pasta",
      description:
        "Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
      price: 10.99,
    },
    {
      name: "Fettuccine Alfredo",
      category: "Pasta",
      description:
        "Creamy Alfredo sauce with fettuccine pasta and Parmesan cheese.",
      price: 11.49,
    },
    {
      name: "Lasagna",
      category: "Pasta",
      description:
        "Layered pasta with rich meat sauce, ricotta, and mozzarella.",
      price: 13.49,
    },
    {
      name: "Caesar Salad",
      category: "Salads",
      description: "Romaine lettuce, Parmesan, croutons, and Caesar dressing.",
      price: 7.99,
    },
    {
      name: "Greek Salad",
      category: "Salads",
      description:
        "Mixed greens, feta cheese, olives, cucumbers, and Greek vinaigrette.",
      price: 8.49,
    },
    {
      name: "Caprese Salad",
      category: "Salads",
      description: "Fresh mozzarella, tomatoes, basil, and balsamic glaze.",
      price: 9.49,
    },
    {
      name: "Grilled Salmon",
      category: "Main Course",
      description:
        "Grilled salmon fillet served with lemon butter sauce and vegetables.",
      price: 17.99,
    },
    {
      name: "Ribeye Steak",
      category: "Main Course",
      description:
        "Juicy ribeye steak cooked to perfection with garlic butter.",
      price: 22.99,
    },
    {
      name: "Chicken Parmesan",
      category: "Main Course",
      description:
        "Breaded chicken breast topped with marinara sauce and mozzarella.",
      price: 14.99,
    },
    {
      name: "Shrimp Scampi",
      category: "Main Course",
      description:
        "Sautéed shrimp in garlic butter sauce with a side of pasta.",
      price: 18.99,
    },
    {
      name: "Garlic Bread",
      category: "Sides",
      description: "Toasted bread topped with garlic butter and parsley.",
      price: 3.99,
    },
    {
      name: "French Fries",
      category: "Sides",
      description: "Crispy golden fries served with ketchup.",
      price: 4.49,
    },
    {
      name: "Onion Rings",
      category: "Sides",
      description: "Crispy beer-battered onion rings.",
      price: 5.49,
    },
    {
      name: "Tiramisu",
      category: "Desserts",
      description:
        "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone.",
      price: 6.99,
    },
    {
      name: "Cheesecake",
      category: "Desserts",
      description: "Creamy cheesecake served with a berry compote.",
      price: 5.99,
    },
    {
      name: "Chocolate Lava Cake",
      category: "Desserts",
      description: "Warm chocolate cake with a molten chocolate center.",
      price: 7.49,
    },
    {
      name: "Espresso",
      category: "Beverages",
      description: "Rich and bold espresso shot.",
      price: 2.99,
    },
  ],
};

export function get_menu() {
  return data.menu;
}
