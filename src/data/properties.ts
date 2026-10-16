export type Property = {
  id: string;
  title: string;
  category: "Homes" | "Plots" | "Commercial";
  location: string;
  price: string;
  beds?: number;
  baths?: number;
  area: string;
  image: string;
  featured?: boolean;
  demo: true;
};

export const properties: Property[] = [
  {
    id: "sample-residence",
    title: "Contemporary Family Residence",
    category: "Homes",
    location: "Karnal, Haryana",
    price: "Price on request",
    beds: 4,
    baths: 4,
    area: "Illustrative listing",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    featured: true,
    demo: true
  },
  {
    id: "sample-plot",
    title: "Residential Plot Opportunity",
    category: "Plots",
    location: "Karnal region",
    price: "Price on request",
    area: "Illustrative listing",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    demo: true
  },
  {
    id: "sample-villa",
    title: "Modern Garden Villa",
    category: "Homes",
    location: "Karnal region",
    price: "Price on request",
    beds: 3,
    baths: 3,
    area: "Illustrative listing",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    demo: true
  }
];
