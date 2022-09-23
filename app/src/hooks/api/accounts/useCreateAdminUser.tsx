import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";
import { RequestMethod } from "../../../services/networking/types/RequestMethod";
import useRequest from "../../networking/useRequest"

export class UseCreateAdminUserDTO {
    @IsNotEmpty()
    @MaxLength(64)
    name!: string;

    @IsNotEmpty()
    @MaxLength(64)
    password!: string;

    @IsNotEmpty()
    @IsEmail()
    @MaxLength(64)
    email!: string;

    @IsNotEmpty()
    @MaxLength(64)
    login!: string;
}

export default function useCreateAdminUser() {

    const { request } = useRequest();

    return async (v: UseCreateAdminUserDTO) => await request<void>('user/admin', {
        requestOptions: {
            method: RequestMethod.post,
            payload: v,
        },
    });
}