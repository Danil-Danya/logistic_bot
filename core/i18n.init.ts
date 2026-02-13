import rus from "core/locales/rus.json";
import eng from "core/locales/eng.json";
import uzb from "core/locales/uzb.json";

type Lang = "rus" | "eng" | "uzb";

const dict: Record<Lang, any> = {
    rus,
    eng,
    uzb,
};

const getByPath = (obj: any, path: string) => {
    const parts = path.split(".");
    let current = obj;

    for (const p of parts) {
        if (!current || typeof current !== "object" || !(p in current)) {
            return null;
        }

        current = current[p];
    }

    return current;
};

const interpolate = (text: string, vars: Record<string, string>) => {
    return text.replace(/\{\{(\w+)\}\}/g, (_, key) => {
        return vars[key] ?? "";
    });
};

export const t = (lang: Lang, key: string, vars: Record<string, string> = {}) => {
    const primary = getByPath(dict[lang], key);
    const fallback = getByPath(dict.rus, key);

    const value = (primary ?? fallback);

    if (typeof value !== "string") {
        return key;
    }

    return interpolate(value, vars);
};

export type { Lang };
