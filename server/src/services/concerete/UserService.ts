import { EntityRepository, NotFoundError } from "@mikro-orm/core";
import { inject } from "inversify";
import { ICacheManager } from "../../core/caching/ICacheManager";
import ServiceResponse from "../../core/services/ServiceResponse";
import { User } from "../../entities/concerete/User";
import { TYPES } from "../../types";
import { UserModel } from "../../models/concerete/userModels/user-model";
import { IUserService } from "../abstract/IUserService";
import { errorMessages } from "../../core/constables/messages/error-messages";

export default class UserService implements IUserService<UserModel> {
  _repository: EntityRepository<User>;
  _cacheManager: ICacheManager;

  constructor(
    @inject(TYPES.UserRepository) repository: EntityRepository<User>,
    @inject(TYPES.CacheManager) cacheManager: ICacheManager) {
      this._repository=repository
      this._cacheManager=cacheManager
  }


  async GetByEmail(email: string): Promise<ServiceResponse<UserModel>> {
    const userList=await this._repository.find({Email:email})
    const user=this.IfUserEntityIsNull(userList[0])

  }
  GetAll(): Promise<ServiceResponse<UserModel>> {
    throw new Error("Method not implemented.");
  }
  GetById(id: number): Promise<ServiceResponse<UserModel>> {
    throw new Error("Method not implemented.");
  }
  Add(model: UserModel): Promise<ServiceResponse<UserModel>> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<ServiceResponse<UserModel>> {
    throw new Error("Method not implemented.");
  }
  Update(id: number, model: UserModel): Promise<ServiceResponse<UserModel>> {
    throw new Error("Method not implemented.");
  }

  private IfUserEntityIsNull(entity:User):UserModel{
      if(!entity){
          throw new NotFoundError(errorMessages.notFound.User)
      }
      else{
          return new UserModel(entity)
      }
  }
}
