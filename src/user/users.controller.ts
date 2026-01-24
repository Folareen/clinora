import { Controller, Get } from "@nestjs/common";

@Controller('users')
export class UsersController {
    constructor() {
    }

    @Get()
    findAll(): string {
        return 'This action returns all users';
    }
}