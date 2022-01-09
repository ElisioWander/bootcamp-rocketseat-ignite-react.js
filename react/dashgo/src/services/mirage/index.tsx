import { createServer, Factory, Model } from "miragejs";
import faker from 'faker'

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      //os models são como tabelas de um banco de dados
      user: Model.extend<Partial<User>>({}), //o "Partial" faz o papel de evitar que se tenha erro por não está utilizando todas as props informadas
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase()
        },
        createdAt() {
          return faker.date.recent(10)
        },
      }),
    },

    //gerar 200 dados referente a tabela user
    seeds(server) {
      server.createList('user', 200 )
    },

    //routes é o sistema de rotas que o MirageJS providencia para simular um sistema de rotas de um
    //backend tradicional
    routes() {
      //para que as rotas sejam chamadas de forma correta é necessário definir um "namespace"
      //nesse caso é "api"
      //http://api/users
      this.namespace = 'api'

      //timing vai fazer com que todas as chamadas que forem feita para o backend demore
      //750 milissegundos para acontecer
      //é uma prática boa para fazer testes em loads da aplicação e simular uma chamada real fora do localhost
      this.timing = 750;

      //verbos https para listagem e criação
      this.get("/users");
      this.post("/users");

      //para não interferir no sistema de rotas que o Next tem dentro de sua pasta "pages/api"
      //é necessário alterar o namespace para outra coisa ou limpar o namespace depois que a rota foi chamada
      this.namespace = ''

      //o método passthrough vai fazer com que todas as chamadas que possui "api" seja detectada
      //pelas rotas do Mirage, e caso não seje detectada, isso fará com que passe adiante caso
      //exista outra função, outra rota que tenha "api", e ela possa funcionar sem interferência
      this.passthrough()
    },
  });

  return server;
}
