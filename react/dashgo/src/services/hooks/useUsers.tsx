import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

//foi necessário desacoplar a função de pegar os dados dos usuários do React-Query para que
//se for preciso utilizar a função de pegar os dados dos usuários novamente sem a necessidade 
//de utilizar o React-Query, isso possa ser feito.
export async function getUsers(): Promise<User[]>{
  const { data } = await api.get("/users");

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
}

//aqui os dados estão guardados no cash do React-Query
export function useUsers() {
  return useQuery("users", getUsers, {
    staleTime: 1000 * 5 //segundos //dessa forma os dados ficarão fescos durante 5 segundos
  })
}
