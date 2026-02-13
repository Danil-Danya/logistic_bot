import { IsString, IsArray, ArrayNotEmpty, ArrayUnique, IsOptional, isString } from 'class-validator';
import { Type } from 'class-transformer';

class CreateCountriesDTO {
    @IsString()
    id!: string;

    @IsString()
    name_rus!: string;

    @IsString()
    name_eng!: string;

    @IsString()
    name_uzb!: string;

    @IsArray()
    @ArrayUnique()
    @IsOptional()
    @Type(() => String)
    keywords: string[] = [];
}

class UpdateCountriesDTO {
    @IsString()
    @IsOptional()
    name_rus?: string;

    @IsString()
    @IsOptional()
    name_eng?: string;

    @IsString()
    @IsOptional()
    name_uzb?: string;

    @IsArray()
    @ArrayUnique()
    @IsOptional()
    @Type(() => String)
    keywords?: string[];
}

export {
    CreateCountriesDTO,
    UpdateCountriesDTO
}