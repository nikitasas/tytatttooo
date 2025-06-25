export interface Master {
  id: number;
  name: string;
  photo: string;
  experience: string;
  styles: string[];
  description: string;
}

export interface TattooWork {
  id: number;
  image: string;
  style: string;
  masterId: number;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  priceFrom: number;
}

export interface Appointment {
  id: number;
  date: string;
  time: string;
  masterId: number;
  serviceId: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  tattooType: string;
  hasCustomSketch: boolean;
}

export interface User {
  id: number;
  phone: string;
  name: string;
  appointments: Appointment[];
}