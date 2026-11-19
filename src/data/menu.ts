/**
 * Los datos del menú viven en `menu.json`.
 * Se editan desde el panel:  http://localhost:4321/admin  (solo en tu PC).
 * NO pongas platos aquí: este archivo solo lee menu.json.
 */
import data from "./menu.json";

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
  page: number;
  hidden: boolean;
}

const slug = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const menu: MenuCategory[] = (data as any[]).map((c) => ({
  id: slug(c.titulo),
  title: c.titulo,
  subtitle: c.subtitulo || undefined,
  columns: c.columnas?.length ? c.columnas : undefined,
  page: Number(c.pagina) || 1,
  hidden: !!c.oculta,
  items: c.platos.map((p: any) => ({
    name: p.nombre,
    description: p.descripcion || undefined,
    price: p.precio === undefined || p.precio === null || p.precio === "" ? undefined : Number(p.precio),
    variants: p.variantes?.length
      ? p.variantes.map((x: any) => ({ label: x.etiqueta, price: Number(x.precio) }))
      : undefined,
  })),
}));

export const formatPrice = (n: number) => n.toFixed(2);

const visibles = menu.filter((c) => !c.hidden && c.items.length > 0);
const paginas = [...new Set(visibles.map((c) => c.page))].sort((a, b) => a - b);

export const bookPages: string[][] = paginas.map((p) => visibles.filter((c) => c.page === p).map((c) => c.id));
