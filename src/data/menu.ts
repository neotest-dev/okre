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
    id: "criollo",
    title: "Menú Criollo",
    items: [
      { name: "Vainita saltada", price: 12 },
      { name: "Pollada", price: 12 },
      { name: "Repollo saltado", price: 12 },
      { name: "Pollo estofado", price: 12 },
    ],
  },
  {
    id: "ejecutivo",
    title: "Menú Ejecutivo",
    items: [
      { name: "Lomo saltado", price: 15, description: "Trozos de lomo fino arrebozado con frescas verduras + papas fritas + arroz" },
      { name: "Tallarín saltado", price: 15, description: "Pasta de tallarines + trozos de carne + especias orientales y criollas" },
      { name: "Milanesa", price: 15, description: "Arroz + papas fritas crocantes + milanesa + ensalada" },
      { name: "Pollo a la plancha", price: 15, description: "Filete de pechuga + papas fritas crocantes + ensalada + cremas + arroz" },
      { name: "Saltado de pollo", price: 14, description: "Trozos de pechuga arrebozado con frescas verduras + papas fritas + arroz" },
      { name: "Alitas (BBQ, maracuyá, acevichada)", price: 14, description: "Arroz + papas fritas + 3 piezas de alitas + ensalada" },
      { name: "Churrasco", price: 15, description: "Arroz + papas fritas + churrasco + ensalada" },
    ],
  },
  {
    id: "carta",
    title: "Carta",
    items: [
      { name: "Lomo saltado", price: 20, description: "Trozos de lomo fino arrebozado con frescas verduras + papas fritas + arroz" },
      { name: "Saltado de pollo", price: 18, description: "Trozos de pechuga arrebozado con frescas verduras + papas fritas + arroz" },
      { name: "Pollo a la plancha", price: 18, description: "Filete de pechuga + papas fritas crocantes + ensalada + cremas + arroz" },
      { name: "Chicharrón de pollo", price: 20, description: "Arroz + papas fritas + trozos de pollo + ensalada" },
      { name: "Milanesa", price: 18, description: "Arroz + papas fritas crocantes + milanesa + ensalada" },
      { name: "Tortilla de pollo", price: 17, description: "Arroz + papas fritas + zarza criolla + tortilla" },
      { name: "Tallarín saltado", price: 20, description: "Pasta de tallarines + trozos de carne + especias orientales y criollas" },
      { name: "Chaufa de pollo", price: 17, description: "Arroz + huevo + trozos de pollo + especias orientales + wantán" },
      { name: "Tortilla de huevo", price: 15, description: "Arroz + yuquitas fritas + zarza criolla + tortilla" },
      { name: "Alitas (BBQ, acevichadas y maracuyá)", price: 17, description: "Papas fritas + 5 piezas de alitas + ensalada" },
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
      { name: "Chicha morada", variants: [v("Vaso", 4), v("1 litro", 15)] },
    ],
  },
  {
    id: "gaseosas",
    title: "Gaseosas",
    subtitle: "Inca Kola / Coca Cola",
    items: [
      { name: "Personal", price: 4 },
      { name: "1 litro", price: 6 },
      { name: "1.5 litros", price: 9 },
      { name: "3 litros (solo Inca Kola)", price: 12 },
      { name: "Gordita", price: 5 },
      { name: "Agua San Luis", price: 2.5 },
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

/** Category ids grouped per book page (mirrors the printed menu). */
export const bookPages: string[][] = [
  ["criollo", "ejecutivo"],
  ["carta"],
  ["bebidas", "gaseosas", "adicionales"],
];
