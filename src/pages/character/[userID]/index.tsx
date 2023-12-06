/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import React from "react";

const CharacterDetail = ({ characterSlug }: any) => {
  console.log(characterSlug, "characterSlug");
  return (
    <div>
      <h2 className="text-center mt-6">{characterSlug?.userName}'s Details</h2>
      <p>User ID: {characterSlug?.userID}</p>
      <p>Name:{characterSlug?.userName}</p>
    </div>
  );
};

export async function getStaticProps(context: any) {
  console.log(context, "params static");
  const id = context.params.userID;
  const res = await fetch(
    `https://drab-shorts-moth.cyclic.app/userDetail/?id=${id}`
  );
  const data = await res.json();
  console.log(data, "characterSlug");
  return { props: { characterSlug: data.data[0] } };
}

export async function getStaticPaths() {
  const res = await fetch("https://drab-shorts-moth.cyclic.app");
  const data = await res.json();
  const users = data?.data;
  console.log(users, "ids");

  const paths = users.map((user: any) => {
    return { params: { userID: user?._id.toString() } };
  });
  console.log(paths, "paths");

  return { paths, fallback: false };
}

export default CharacterDetail;
