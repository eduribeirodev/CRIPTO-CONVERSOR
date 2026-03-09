import { useState, useEffect } from "react";
import { getCryptoPrices } from "@/services/cryptoService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const cryptoOptions = [
  { id: "bitcoin", name: "Bitcoin", coingeckoId: "1" },
  { id: "ethereum", name: "Ethereum", coingeckoId: "279" },
  { id: "tether", name: "Tether", coingeckoId: "325" }
];

const currencyOptions = ["usd", "brl", "eth", "btc", "usdt"];

export function Conversion() {
  const [from, setFrom] = useState("bitcoin");
  const [to, setTo] = useState("usd");
  const [amount, setAmount] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);
  const [rateUsed, setRateUsed] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getIconUrl = (coingeckoId: string) =>
    `https://assets.coingecko.com/coins/images/${coingeckoId}/large/${cryptoOptions.find(
      (c) => c.coingeckoId === coingeckoId
    )?.name.toLowerCase()}.png`;

  const handleConvert = async () => {
    if (!amount || amount <= 0) {
      setError("Informe um valor válido");
      setResult(null);
      setRateUsed(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await getCryptoPrices([from], [to]);
      const rate = data[from][to];
      const res = amount * rate;
      setResult(res);
      setRateUsed(rate);
    } catch {
      setError("Erro ao buscar cotação");
      setResult(null);
      setRateUsed(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (amount && amount > 0) handleConvert();
  }, [from, to, amount]);


  const formatValue = (value: number, currency: string) => {
    const options: Intl.NumberFormatOptions = {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    };
    if (currency === "usd" || currency === "brl") {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: currency.toUpperCase()
      });
    }
    return value.toLocaleString("pt-BR", options) + ` ${currency.toUpperCase()}`;
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6 px-4">
      <h1 className="text-3xl font-bold text-center">Conversão de Criptomoedas</h1>

      <Card>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* From */}
            <div className="col-span-1">
              <label className="block mb-1 font-medium text-center">Moeda de origem</label>
              <Select value={from} onValueChange={setFrom}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione a moeda" />
                </SelectTrigger>
                <SelectContent position="popper" className="bg-secondary">
                  {cryptoOptions.map((coin) => (
                    <SelectItem key={coin.id} value={coin.id} className="flex items-center gap-2">
                      <img
                        src={getIconUrl(coin.coingeckoId)}
                        alt={coin.name}
                        className="w-5 h-5"
                        onError={(e) =>
                          ((e.target as HTMLImageElement).src = "/icons/default.png")
                        }
                      />
                      {coin.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* To */}
            <div className="col-span-1">
              <label className="block mb-1 font-medium text-center">Moeda de destino</label>
              <Select value={to} onValueChange={setTo}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione a moeda" />
                </SelectTrigger>
                <SelectContent position="popper" className="bg-secondary">
                  {currencyOptions.map((cur) => (
                    <SelectItem key={cur} value={cur}>
                      {cur.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Amount */}
            <div className="col-span-1">
              <label className="block mb-1 font-medium text-center">Valor de origem</label>
              <Input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="col-span-1">
              <label className="block mb-1 font-medium text-center">Valor convertido</label>
              <Input
                type="text"
                placeholder="0.00"
                value={result !== null ? formatValue(result, to) : ""}
                readOnly
                className="w-full bg-gray-100 font-semibold text-right"
              />
            </div>
          </div>

          <Button onClick={handleConvert} disabled={loading} className="mt-4 w-full sm:w-auto">
            {loading ? "⏳ Convertendo..." : "Converter"}
          </Button>

          {error && <p className="text-red-500 font-medium mt-2 text-center">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
}