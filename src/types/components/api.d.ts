type OmitFields<T, K extends keyof T> = Omit<T, K>;
type Blog = {
  id: number;
  title: string;
  image: string;
  description: string;
  content: string;
  date: string;
  link: string;
  createdAt: string;
  updatedAt: string;
};

type Subscription = {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
};

type User = {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type Event = {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

type Registration = {
  id: number;
  userId: number;
  eventId: number;
  createdAt: string;
  updatedAt: string;
};

type MutateRegistration = OmitFields<
  Registration,
  "id" | "createdAt" | "updatedAt"
>;
