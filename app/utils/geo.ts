const normalizeWords = (input: string): string[] => {
    return input
        .toLowerCase()
        .replace(/[^a-zа-яё0-9\s]/gi, " ")
        .split(/\s+/)
        .filter(Boolean);
}

const uniqLimit = (items: string[], limit: number): string[] => {
    const set = new Set<string>();

    for (const item of items) {
        const v = item.trim().toLowerCase();

        if (!v) {
            continue;
        }

        set.add(v);

        if (set.size >= limit) {
            break;
        }
    }

    return Array.from(set);
}

export {
    normalizeWords,
    uniqLimit
}