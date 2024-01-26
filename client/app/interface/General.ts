import { IResponseReducer } from "./Response";
import { IUserReducer } from "./User";

export interface IReducer {
    user: IUserReducer;
    response: IResponseReducer;
}