import React from "react";
import { parseCookies } from "nookies";

const Todos = ({ data }: any) => {
  return (
    <div className="p-6">
      <h2 className="text-center text-2xl">List of todos</h2>
      <ul>
        {data?.map((e: any) => {
          return (
            <li key={e.id}>
              {e.id}. {e.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const cookies = parseCookies(context);
  const token = cookies.token || null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos`
    // headers: {
    //   credentials: "include",
    //   Authorization: token,
    // },
  );

  const data = await res.json();
  return { props: { data } };
}

export default Todos;
