import type { IUserResponse } from "@/types/user";

export async function fetchUsers(): Promise<IUserResponse> {

  const res = await fetch("https://dummyjson.com/users");

  if (!res.ok) throw new Error("Failed to fetch users");
  
  return res.json();
}
