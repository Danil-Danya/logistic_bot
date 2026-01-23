import { IsInt, Min, Max, IsOptional } from "class-validator";
import { Transform } from "class-transformer";

class PaginateDTO {
    @IsOptional()
    @Transform(({ value }) => Number(value))
    @IsInt()
    @Min(1)
    page: number = 1;

    @IsOptional()
    @Transform(({ value }) => Number(value))
    @IsInt()
    @Min(1)
    @Max(100)
    limit: number = 10;
}

export {
    PaginateDTO
};
