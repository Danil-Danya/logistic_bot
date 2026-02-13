"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deleteDuplicates = (messages) => {
    const seen = new Set();
    const uniqueRows = [];
    for (const row of messages.rows) {
        const text = (row.dataValues.text || "").trim();
        if (!text) {
            continue;
        }
        if (seen.has(text)) {
            continue;
        }
        seen.add(text);
        uniqueRows.push(row);
        if (uniqueRows.length >= 10) {
            break;
        }
    }
    console.log(uniqueRows);
    return {
        rows: uniqueRows,
        count: messages.count
    };
};
exports.default = deleteDuplicates;
