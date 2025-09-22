"use server";

import { serverClient } from "@/lib/streamServe";

export async function createToken(userId: string) {
  const token = serverClient.createToken(userId);
  return token;
}
