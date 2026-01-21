interface FiltersDto {
    where?: string;
    whereField?: string;

    search?: string;
    searchField?: string;

    orderBy?: string;
    orderType?: string;
}

export default FiltersDto;