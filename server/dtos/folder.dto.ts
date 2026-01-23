import { IsString, IsOptional, IsNotEmpty } from "class-validator";

class CreateFolderDTO {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    link!: string;
}

class UpdateFolderDTO {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    link?: string;
}

export {
    CreateFolderDTO,
    UpdateFolderDTO
};
