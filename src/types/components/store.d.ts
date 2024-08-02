interface EntityStore<T> {
  entity: T;
  setEntity: (entity: T) => void;
}

type blogStore = EntityStore<Blog>;
type userStore = EntityStore<User>;
type eventStore = EntityStore<Events>;
type subscriptionStore = EntityStore<Subscription>;
type registrationStore = EntityStore<Registration>;
