import { useEffect, useState } from "react";
import { getCryptoPrices } from "@/services/cryptoService";

export function useCrypto(ids: string[], vsCurrencies: string[]) {
  const [data, setData] = useState<Record<string, Record<string, number>> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const result = await getCryptoPrices(ids, vsCurrencies);
        setData(result);
      } catch (err: any) {
        setError(err.message || "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [ids.join(","), vsCurrencies.join(",")]); 

  return { data, loading, error };
}