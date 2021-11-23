import { Server, Model, Factory } from "miragejs";
import faker from "faker";

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  streetAddress: string;
  cityStateZip: string;
  phone: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
};

type PeopleResponse = {
  people: Person[];
};

export const fetchPeople = (url: string) =>
  fetch(url).then<PeopleResponse>((r) => r.json());

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model.extend<Partial<Person>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.findName();
        },
        avatarUrl(i) {
          let c = i % 2 ? "men" : "women";
          return `https://randomuser.me/api/portraits/${c}/${i}.jpg`;
        },
        title() {
          return faker.name.title();
        },
      }),
    },

    seeds(server) {
      server.createList("user", 25);
    },

    routes() {

      this.namespace = "api";

      this.get("people");
      // this.get("/api/users", (schema) => {
      //   return schema.users.all();
      // });
    },
  });

  return server;
}