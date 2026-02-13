"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqLimit = exports.normalizeWords = void 0;
const normalizeWords = (input) => {
    return input
        .toLowerCase()
        .replace(/[^a-zа-яё0-9\s]/gi, " ")
        .split(/\s+/)
        .filter(Boolean);
};
exports.normalizeWords = normalizeWords;
const uniqLimit = (items, limit) => {
    const set = new Set();
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
};
exports.uniqLimit = uniqLimit;
