import Link from "next/link";
import React from "react";

const Characters = ({ data }: any) => {
  console.log(data, "data");
  return (
    <div>
      <h2 className="text-center mt-6">List of characters</h2>
      <ul className="p-10 text-centers">
        {data.data.map((e: any) => (
          <Link href={`/character/${e._id}`} key={e.userID}>
            <li>
              {e?.userID}.{e.userName}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const res = await fetch("https://drab-shorts-moth.cyclic.app/");

  const data = await res.json();
  return { props: { data }, revalidate: 3 };
}

export default Characters;
