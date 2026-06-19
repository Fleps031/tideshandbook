import { Body, Controller, Get, Param, Query } from "@nestjs/common";
import { SheetRequestDto } from "./dto/sheet-request.dto";

@Controller("sheets")
export class SheetsController{
    @Get()
    sheet(){
        return [{}];
    }

    @Get(":id")
    sheetById(@Param("id") id: string, @Query() sheetRequest: SheetRequestDto ){
        return [id, sheetRequest.system]
    }
}