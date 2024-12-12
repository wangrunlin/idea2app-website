import { nocodbToken, nocodbUrl } from "@/config";

export async function getTableList<T = { Id: string }>(
  table: string,
  limit: number = 1000
): Promise<T> {
  const response = await fetch(
    `${nocodbUrl}/api/v2/tables/${table}/records?limit=${limit}`,
    {
      method: "GET",
      headers: {
        "xc-token": nocodbToken,
        "Content-Type": "application/json",
      },
      next: { tags: [table] },
    }
  );

  if (!response.ok) {
    throw new Error("网络响应不是 OK");
  }

  const result = await response.json();
  return result.list;
}
