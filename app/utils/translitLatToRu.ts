export const translitLatToRu = (value: string): string => {
    const map: Record<string, string> = {
        "a": "а", "b": "б", "v": "в", "g": "г", "d": "д", "e": "е",
        "yo": "ё", "zh": "ж", "z": "з", "i": "и", "y": "й", "k": "к",
        "l": "л", "m": "м", "n": "н", "o": "о", "p": "п", "r": "р",
        "s": "с", "t": "т", "u": "у", "f": "ф", "h": "х", "c": "ц",
        "ch": "ч", "sh": "ш", "sch": "щ", "yu": "ю", "ya": "я",
        "j": "ж", "q": "к", "w": "в", "x": "кс"
    };

    const str = value.toLowerCase();

    let i = 0;
    let out = "";

    while (i < str.length) {
        const tri = str.slice(i, i + 3);
        const bi = str.slice(i, i + 2);
        const uni = str.slice(i, i + 1);

        if (map[tri]) {
            out += map[tri];
            i += 3;
        }
        else if (map[bi]) {
            out += map[bi];
            i += 2;
        }
        else if (map[uni]) {
            out += map[uni];
            i += 1;
        }
        else {
            out += uni;
            i += 1;
        }
    }

    return out;
};

export const translitRuToLat = (value: string): string => {
    const map: Record<string, string> = {
        "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e",
        "ё": "yo", "ж": "zh", "з": "z", "и": "i", "й": "y", "к": "k",
        "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r",
        "с": "s", "т": "t", "у": "u", "ф": "f", "х": "h", "ц": "c",
        "ч": "ch", "ш": "sh", "щ": "sch", "ю": "yu", "я": "ya",
        "ь": "", "ъ": ""
    };

    return value
        .toLowerCase()
        .split("")
        .map(ch => map[ch] ?? ch)
        .join("");
};
