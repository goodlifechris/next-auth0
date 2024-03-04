/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

function index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    console.log(user);
    return (
      <div>
    <img src="https://lh3.googleusercontent.com/d/1U8PvAzjhZ9jDUPvtHk9BYTJ0qvVz0xF3" alt="Description of the image"/>

        Welcome {user.name}! <Link  href="/api/auth/logout">Logout</Link>
        <br></br>
        Your nickname is {user.nickname}.
      </div>
    );
  }
  return <Link href="/api/auth/login">Login</Link>;
}

export default index;
