const deleteDuplicates = (messages: any) => {
    const seen = new Set<string>();
    const uniqueRows: any[] = [];

    for (const row of messages) {
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
}

export default deleteDuplicates