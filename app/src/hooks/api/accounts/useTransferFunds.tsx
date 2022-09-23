import { IsNumber, IsNumberString } from "class-validator";
import { RequestMethod } from "../../../services/networking/types/RequestMethod";
import useRequest from "../../networking/useRequest"
import { AccountType } from "./useMyAccounts";

export class UseTransferFundsDTO {
    @IsNumber()
    from!: number;

    @IsNumberString()
    to!: string;

    @IsNumberString()
    amount!: string;
}

export default function useTransferFunds(accountType: AccountType) {

    const { request } = useRequest();

    return async (v: UseTransferFundsDTO) => await request<void>(`${accountType}-account/transfer`, {
        requestOptions: {
            method: RequestMethod.post,
            payload: {
                ...v,
                to: parseInt(v.to),
                amount: parseInt(v.amount),
            },
        },
    });
}