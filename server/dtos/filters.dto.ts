import { IsOptional, IsString, IsIn } from "class-validator";
import { Transform } from "class-transformer";

class FiltersDTO {
    @IsOptional()
    @IsString()
    where?: string;

    @IsOptional()
    @IsString()
    whereField?: string;

    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsString()
    searchField?: string;

    @IsOptional()
    @IsString()
    orderBy?: string;

    @IsOptional()
    @Transform(({ value }) => value?.toUpperCase())
    @IsIn(["ASC", "DESC"])
    orderType?: string;
}

export {
    FiltersDTO
};
