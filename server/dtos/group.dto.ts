import { IsOptional, IsString, IsIn } from "class-validator";

class UpdateGroupDTO {
    @IsOptional()
    @IsString()
    user_name?: string;

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsIn(["public", "private"])
    type?: string;
}

export {
    UpdateGroupDTO
};
