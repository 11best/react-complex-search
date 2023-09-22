import { useQuery } from "@tanstack/react-query";

export default function useCatQuery() {
  return useQuery<any>(["cat"], async () => {
    const resp = await fetch("https://cataas.com/cat?width=300&height=300");
    const blob = await resp.blob();
    return URL.createObjectURL(blob);
  });
}
