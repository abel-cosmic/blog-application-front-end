type BlogTable = {
  id: number;
  title: String;
  description: String;
  content: String;
  image: StaticImageData;
  link: String;
  location: String;
  date: String;
};
type EventsTable = {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};
type RegistrationsTable = {
  id: number;
  name: number;
  email: string;
  event: number;
  createdAt: string;
  updatedAt: string;
};

type subscriberTable = {
  id: number;
  email: string;
  createdAt: string;
};
type AdminsTable = {
  id: number;
  name: string;
  password?: string;
  email: string;
  createdAt: string;
};
