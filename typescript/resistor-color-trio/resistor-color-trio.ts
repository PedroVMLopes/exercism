export function decodedResistorValue(colors: string[]): string {
  let value = Number(`${COLORS.indexOf(colors[0])}${COLORS.indexOf(colors[1])}`);
  value *= Math.pow(10, COLORS.indexOf(colors[2]));

  // Verifica se há necessidade de adicionar um sufixo
  for (const ohm of ohms) {
    const factor = ohm[0]; // Garantindo que factor seja um número
    const suffix = ohm[1]; // Garantindo que suffix seja uma string

    if (value >= factor) {
      return `${value / factor} ${suffix}ohms`;
    }
  }

  return `${value} ohms`;
}

export const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white'
];

// Tipagem explícita do array de sufixos
export const ohms: [number, string][] = [
  [1_000_000_000, "giga"],
  [1_000_000, "mega"],
  [1_000, "kilo"]
];
