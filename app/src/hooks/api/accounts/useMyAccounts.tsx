import { AccountModel } from "../../../view/dashboard/my-accounts/AccountCard";
import { useStatefulRequest } from "../../networking/useStatefulRequest";

export enum AccountType {
    checking = 'checking',
    studentChecking = 'student-checking',
    savings = 'savings',
    credit = 'credit'
}

export default function useMyAccounts(type: AccountType) {

    return useStatefulRequest<AccountModel[]>({
        url: `${type}-account/my-accounts`,
    });
}