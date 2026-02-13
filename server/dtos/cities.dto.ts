import { IsString, IsArray, ArrayNotEmpty, ArrayUnique, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCitiesDTO {
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

    @IsString()
    country_id!: string;
}

export class UpdateCitiesDTO {
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

    @IsString()
    @IsOptional()
    country_id?: string;
}
