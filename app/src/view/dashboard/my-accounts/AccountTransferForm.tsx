import { MdMoney } from "react-icons/md";
import NumberFormItem from "../../../components/form/basic/NumberFormItem";
import SubmitButton from "../../../components/form/SubmitButton";
import useTransferFunds, { UseTransferFundsDTO } from "../../../hooks/api/accounts/useTransferFunds";
import { useHandledForm } from "../../../hooks/form/validation/useValidatedForm";
import { useLoading } from "../../../hooks/indicators/loading/useLoading";
import { useCol } from "../../../hooks/ui/responsive/useCol";
import { AccountModel } from "./AccountCard"

type Props = {
    account: AccountModel;
    onFinish: () => void;
}

export default function AccountTransferForm(props: Props) {

    const transfer = useTransferFunds(props.account.accountType);

    const {
        loading,
        doAction: onSubmit,
    } = useLoading<UseTransferFundsDTO>({
        action: async (v) => {
            await transfer(v);
            props.onFinish();
        },
    });

    const {
        Form,
    } = useHandledForm<UseTransferFundsDTO>({
        form: {
            initialValues: {
                from: props.account.id,
            }
        },
        onSubmit,
        validationTarget: new UseTransferFundsDTO(),
    });

    const {
        Col,
    } = useCol({
        span: 24,
    });

    return (
        <Form>
            <Col>
                <NumberFormItem
                    formItem={{
                        name: 'from',
                        label: 'From',
                    }}
                    dataInput={{
                        disabled: true,
                    }}
                />
            </Col>
            <Col>
                <NumberFormItem
                    formItem={{
                        name: 'to',
                        label: 'To'
                    }}
                />
            </Col>
            <Col>
                <NumberFormItem
                    formItem={{
                        name: 'amount',
                        label: 'Amount'
                    }}
                    dataInput={{
                        prefix:<MdMoney/>
                    }}
                />
            </Col>
            <Col>
                <SubmitButton
                    block
                    type="primary"
                    loading={loading}
                >Transfer funds</SubmitButton>
            </Col>
        </Form>
    );
}