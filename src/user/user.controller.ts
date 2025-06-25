import { Controller, Get, NotFoundException, Param, Post, Body, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AddUserDto } from './dto/user.dto';
import { FirewallGuard } from 'src/firewall/firewall.guard';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        try {
            return this.userService.getUser(id);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

    @Post()
    @UseGuards(FirewallGuard)
    addUser(@Body(new ValidationPipe({transform:true})) user: AddUserDto) {
        return this.userService.addUser(user);
    }
}




//   This code define a user controller in a Nest js application .


// Get (/user)
// Get (/user/:id)
// post (/user)

