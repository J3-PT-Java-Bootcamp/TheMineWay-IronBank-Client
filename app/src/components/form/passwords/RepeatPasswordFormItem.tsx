import { useProcessCommonFormProps } from "../../../hooks/form/useProcessCommonFormProps";
import { IFormProps } from "../IFormProps";
import PasswordFormItem from "./PasswordFormItem";

type Props = IFormProps<string> & {
    passwordsMatch: boolean;
};

export default function RepeatPasswordFormItem(props: Props) {

    const itemProps = useProcessCommonFormProps('repeatPassword', props);

    return (
        <PasswordFormItem
            formItem={{
                validateStatus: props.passwordsMatch ? 'success' : 'error',
                ...itemProps.formItem
            }}
            dataInput={{...itemProps.dataInput}}
        />
    );
}