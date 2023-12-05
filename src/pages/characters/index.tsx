import React from "react";

const Characters = ({ data }: any) => {
  return (
    <div>
      <h2 className="text-center">List of characters</h2>
      <ul>
        {data.map((e: any) => (
          <li key={e.exampleId}>{e.exampleName}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const res = await fetch(
    "http://localhost:8080/example"
    // headers: {
    //   credentials: "include",
    //   Authorization: token,
    // },
  );

  const data = await res.json();
  return { props: { data }, revalidate: 3 };
}

export default Characters;
