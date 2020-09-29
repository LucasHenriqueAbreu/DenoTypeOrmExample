import { AutoInjectable } from 'https://deno.land/x/alosaur@v0.23.0/mod.ts';
import { UserRepository } from '../repositories/user.repository.ts';
import { getCustomRepository } from "https://deno.land/x/typeorm@v0.2.23-rc9/src/index.ts";
import { User } from "../entities/user.entity.ts";


@AutoInjectable()
export class UserService {
    constructor(private userRepository: UserRepository) {
        this.userRepository = getCustomRepository(UserRepository);
    }
    
    getAll() {
        return this.userRepository.find();
    }

    save(user: User) {
        return this.userRepository.save(user);
    }

    update(id:number, user: User) {
        return this.userRepository.update(id, user);
    }
}