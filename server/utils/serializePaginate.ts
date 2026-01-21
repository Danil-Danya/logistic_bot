const paginateSerialize = (
    { count, rows }: { count: number; rows: any[] },
    { limit, offset }: { limit: number; offset: number }
) => {
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

export default paginateSerialize;
