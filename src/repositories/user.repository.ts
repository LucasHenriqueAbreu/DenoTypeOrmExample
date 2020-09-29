import { EntityRepository } from "https://deno.land/x/typeorm@v0.2.23-rc9/src/decorator/EntityRepository.ts";
import { Repository } from "https://deno.land/x/typeorm@v0.2.23-rc9/src/repository/Repository.ts";
import { User } from "../entities/user.entity.ts";

@EntityRepository(User)
export class UserRepository extends Repository<User>{}