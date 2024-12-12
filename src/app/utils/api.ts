import { nocodbToken, nocodbUrl } from "@/config";

export async function getTableList<T = { Id: string }>(
  table: string,
  tags: string[] = ["nocodb"]
): Promise<T> {
  const response = await fetch(`${nocodbUrl}/api/v2/tables/${table}/records`, {
    method: "GET",
    headers: {
      "xc-token": nocodbToken,
      "Content-Type": "application/json",
    },
    next: { tags },
  });

  if (!response.ok) {
    throw new Error("网络响应不是 OK");
  }

  const result = await response.json();
  return result.list;
}
