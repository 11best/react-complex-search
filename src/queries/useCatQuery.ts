import { useQuery } from "@tanstack/react-query";

export default function useCatQuery() {
  return useQuery<any>(["cat"], async () => {
    const resp = await fetch("https://cataas.com/cat");
    const blob = await resp.blob();
    return URL.createObjectURL(blob);
  });
}
