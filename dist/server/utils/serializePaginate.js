"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paginateSerialize = ({ count, rows }, { limit, offset }) => {
    const currentPage = Math.floor(offset / limit) + 1;
    const total_pages = Math.ceil(count / limit);
    return {
        page: Number(currentPage),
        limit: Number(limit),
        offset: Number(offset),
        total_items: Number(count),
        total_pages: Number(total_pages),
        rows,
    };
};
exports.default = paginateSerialize;
