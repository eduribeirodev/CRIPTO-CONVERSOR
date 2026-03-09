
const BASE_URL = "https://api.coingecko.com/api/v3";

export async function getCryptoPrices(
  ids: string[], 
  vsCurrencies: string[]
) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const coins = ids.join(",");
  const currencies = vsCurrencies.join(",");

  const response = await fetch(
    `${BASE_URL}/simple/price?ids=${coins}&vs_currencies=${currencies}&x_cg_demo_api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados da CoinGecko");
  }

  return response.json(); 
}