"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandGeoWords = void 0;
const geo_1 = require("./geo");
const translitLatToRu_1 = require("./translitLatToRu");
const expandGeoWords = (input) => {
    const base = (0, geo_1.normalizeWords)(input).map(w => w.toLowerCase());
    const extra = [];
    for (const w of base) {
        const latToRu = (0, translitLatToRu_1.translitLatToRu)(w);
        const ruToLat = (0, translitLatToRu_1.translitRuToLat)(w);
        if (latToRu && latToRu !== w) {
            extra.push(latToRu);
        }
        if (ruToLat && ruToLat !== w) {
            extra.push(ruToLat);
        }
    }
    return (0, geo_1.uniqLimit)([...base, ...extra], 40);
};
exports.expandGeoWords = expandGeoWords;
