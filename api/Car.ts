export interface CarModel {
  id: number;
  make: string;
  model: string;
  year: number;
  fuelType: string;
  kilometers: number;
  description: string[];
  details?: string[];
  options: string[];
  price: number;
  photo_url: string;
}
