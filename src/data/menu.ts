export interface MenuItem {
  name: string;
  price?: number;
  description?: string;
  variants?: { label: string; price: number }[];
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  columns?: string[];
  items: MenuItem[];
}

const v = (label: string, price: number) => ({ label, price });

export const menu: MenuCategory[] = [
  {
    id: "menu-criollo",
    title: "Menú Criollo",
    items: [
      { name: "Olluquito", price: 12 },
      { name: "Pepián con cabrito", price: 12 },
      { name: "Pescado frito", price: 12 },
      { name: "Pollo frito con menestra", price: 12 },
    ],
  },
  {
    id: "menu-ejecutivo",
    title: "Menú Ejecutivo",
    subtitle: "Incluye vaso de refresco",
    items: [
      { name: "Lomo saltado", price: 15, description: "Trozos de lomo fino arrebozado con frescas verduras + papas fritas + arroz" },
      { name: "Tallarín saltado", price: 15, description: "Pasta de tallarines + trozos de carne + especias orientales y criollas" },
      { name: "Milanesa", price: 15, description: "Arroz + papas fritas crocantes + milanesa + ensalada" },
      { name: "Pollo a la plancha", price: 15, description: "Filete de pechuga + papas fritas crocantes + ensalada + cremas + arroz" },
      { name: "Saltado de pollo", price: 14, description: "Trozos de pechuga arrebozado con frescas verduras + papas fritas + arroz" },
      { name: "Alitas (BBQ, maracuyá, acevichada)", price: 14, description: "Arroz + papas fritas + 3 piezas de alitas + ensalada" },
    ],
  },
  {
    id: "carta",
    title: "Carta",
    items: [
      { name: "Lomo saltado", price: 20, description: "Trozos de lomo fino arrebozado con frescas verduras + papas fritas + arroz" },
      { name: "Alitas (BBQ, acevichadas y maracuyá)", price: 17, description: "Papas fritas + 5 piezas de alitas + ensalada" },
      { name: "Saltado de pollo", price: 18, description: "Trozos de pechuga arrebozado con frescas verduras + papas fritas + arroz" },
      { name: "Pollo a la plancha", price: 18, description: "Filete de pechuga + papas fritas crocantes + ensalada + cremas + arroz" },
      { name: "Chicharrón de pollo", price: 20, description: "Arroz + papas fritas + trozos de pollo + ensalada" },
      { name: "Milanesa", price: 18, description: "Arroz + papas fritas crocantes + milanesa + ensalada" },
      { name: "Tortilla de pollo", price: 17, description: "Arroz + yuquitas fritas + zarza criolla + tortilla" },
      { name: "Tallarín saltado", price: 20, description: "Pasta de tallarines + trozos de carne + especias orientales y criollas" },
      { name: "Chaufa de pollo", price: 17, description: "Arroz + huevo + trozos de pollo + especias orientales + wantán" },
      { name: "Tortilla de huevo", price: 15, description: "Arroz + yuquitas fritas + zarza criolla + tortilla" },
    ],
  },
  // Ocultos (no están en bookPages): reactivar agregando su id a bookPages
  {
    id: "alitas",
    title: "Alitas",
    items: [
      { name: "Alitas BBQ", price: 17, description: "5 piezas de alitas + papas fritas + cremas" },
      { name: "Alitas acevichadas", price: 17, description: "5 piezas de alitas + papas fritas + cremas" },
      { name: "Alitas a la maracuyá", price: 17, description: "5 piezas de alitas + papas fritas + cremas" },
      { name: "Combo de alitas", price: 36, description: "10 piezas de alitas + papas fritas + cremas + porción de chaufa" },
      { name: "Alitas broaster", price: 18, description: "5 piezas de alitas + papas fritas + cremas + ensalada" },
    ],
  },
  {
    id: "parrillas",
    title: "Parrillas",
    items: [
      { name: "Churrasco de res", price: 35, description: "Corte de 400gr + papas fritas + ensalada + cremas" },
      { name: "Pollo a la parrilla (pierna)", price: 22, description: "1/4 de pollo + papas fritas + ensalada + cremas" },
      { name: "Pollo a la parrilla (pechuga)", price: 25, description: "1/4 de pollo + papas fritas + ensalada + cremas" },
      {
        name: "Pollo al cilindro",
        description: "Papas fritas + ensalada + pollo + cremas",
        variants: [v("1/8", 12), v("1/4", 22)],
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    columns: ["Vaso", "1 litro"],
    items: [
      { name: "Limonada helada", variants: [v("Vaso", 4), v("1 litro", 12)] },
      { name: "Limonada frozen", variants: [v("Vaso", 4), v("1 litro", 12)] },
      { name: "Limonada cherry", variants: [v("Vaso", 4), v("1 litro", 12)] },
      { name: "Limonada blue berry", variants: [v("Vaso", 4), v("1 litro", 12)] },
    ],
  },
  {
    id: "gaseosas",
    title: "Gaseosas",
    subtitle: "Inca Kola / Coca Cola",
    items: [
      { name: "Personal", price: 4 },
      { name: "1 litro", price: 6 },
      { name: "3 litros", price: 12 },
      { name: "Gordita", price: 5 },
      { name: "Agua San Luis", price: 2.5 },
    ],
  },
  {
    id: "cafes",
    title: "Cafés",
    items: [
      { name: "Espresso", price: 6, description: "Café puro, intenso y con mucho carácter" },
      { name: "Americano", price: 8, description: "Espresso con agua caliente, más suave, pero igual de delicioso" },
      { name: "Cappuccino", price: 10, description: "Equilibrio perfecto entre espresso, leche caliente y espuma de leche" },
      { name: "Frapuccino", price: 12, description: "Vaso de café, mezclado con hielo coronado con crema batida" },
    ],
  },
  {
    id: "adicionales",
    title: "Adicionales",
    items: [
      { name: "Arroz blanco (porción)", price: 3 },
      { name: "Papas fritas (porción)", price: 8 },
      { name: "Ensaladas (porción)", price: 6 },
      { name: "Plátano frito (porción)", price: 3 },
      { name: "Huevo frito", price: 1.5 },
    ],
  },
];

export const formatPrice = (n: number) => n.toFixed(2);

/** Category ids grouped per book page. Categories not listed here (alitas, parrillas, cafes) are hidden but kept in `menu`. */
export const bookPages: string[][] = [
  ["menu-criollo", "menu-ejecutivo"],
  ["carta"],
  ["bebidas", "gaseosas", "adicionales"],
];
