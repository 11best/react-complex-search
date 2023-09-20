import { useQuery } from "@tanstack/react-query";

export default function useCatQuery(id: string) {
  return useQuery<any>(
    ["cat", id],
    async () => {
      const resp = await fetch(`/xxx`);
      const json = await resp.json();
      return json.props;
    },
    {
      enabled: !!id,
    }
  );
}