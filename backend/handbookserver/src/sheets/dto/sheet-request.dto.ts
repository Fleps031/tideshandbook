import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class SheetRequestDto{
    @ApiPropertyOptional()
    @IsString()
    system!: string
}