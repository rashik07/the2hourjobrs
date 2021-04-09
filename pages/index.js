import Head from "next/head";
import { useEffect } from "react";
import { signIn, signOut } from "./redux/actions/authAction";
import { useDispatch } from "react-redux";

export default function Home() {
  // signIn({ username: "superuser", password: "iamthesuperuser" });
  signOut();

  return <div></div>;
}
