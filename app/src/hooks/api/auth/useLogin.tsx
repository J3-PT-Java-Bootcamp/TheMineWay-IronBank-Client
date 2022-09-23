import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { RequestMethod } from "../../../services/networking/types/RequestMethod";
import useRequest from "../../networking/useRequest";

export class UseLoginDTO {
    @IsNotEmpty()
    @MaxLength(64)
    login!: string;

    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(64)
    password!: string;
}

export function useLogin() {

    const { request } = useRequest();

    return (values: UseLoginDTO) => request('auth/login', {
        requestOptions: {
            method: RequestMethod.post,
            payload: values,
        },
    });

}