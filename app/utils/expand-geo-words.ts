import { normalizeWords, uniqLimit } from "./geo";
import { translitLatToRu, translitRuToLat } from "./translitLatToRu";

export const expandGeoWords = (input: string): string[] => {
    const base = normalizeWords(input).map(w => w.toLowerCase());
    const extra: string[] = [];

    for (const w of base) {
        const latToRu = translitLatToRu(w);
        const ruToLat = translitRuToLat(w);

        if (latToRu && latToRu !== w) {
            extra.push(latToRu);
        }

        if (ruToLat && ruToLat !== w) {
            extra.push(ruToLat);
        }
    }

    return uniqLimit([...base, ...extra], 40);
};
