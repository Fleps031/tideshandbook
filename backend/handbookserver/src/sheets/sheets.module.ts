import { Module } from '@nestjs/common';
import { SheetsController } from './sheets.controller';

@Module({
    controllers: [SheetsController]
})
export class SheetsModule {}
