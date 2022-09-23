import { Modal } from "antd";
import PasswordFormItem from "../../../components/form/passwords/PasswordFormItem";
import SubmitButton from "../../../components/form/SubmitButton";
import EmailFormItem from "../../../components/form/user/EmailFormItem";
import LoginFormItem from "../../../components/form/user/LoginFormItem";
import NameFormItem from "../../../components/form/user/NameFormItem";
import useCreateAdminUser, { UseCreateAdminUserDTO } from "../../../hooks/api/accounts/useCreateAdminUser";
import { useHandledForm } from "../../../hooks/form/validation/useValidatedForm";
import { useLoading } from "../../../hooks/indicators/loading/useLoading";
import { useCol } from "../../../hooks/ui/responsive/useCol";

type Props = {
    visible: boolean;
    onFinish: () => void;
}

export default function CreateAdminModal(props: Props) {

    const createAdmin = useCreateAdminUser();

    const {
        loading,
        doAction: onSubmit,
    } = useLoading<UseCreateAdminUserDTO>({
        action: async (v) => {
            await createAdmin(v);
            props.onFinish();
        }
    });

    const {
        Form,
    } = useHandledForm<UseCreateAdminUserDTO>({
        onSubmit,
        validationTarget: new UseCreateAdminUserDTO(),
    });

    const {
        Col,
    } = useCol({
        span: 24,
    });

    return (
        <Modal
            visible={props.visible}
            onCancel={() => props.onFinish()}
            footer={null}
            title="Create user"
        >
            <Form>
                <Col>
                    <EmailFormItem
                        formItem={{
                            name: 'email',
                            label: 'Email',
                        }}
                    />
                </Col>
                <Col>
                    <LoginFormItem
                        formItem={{
                            name: 'login',
                            label: 'Login',
                        }}
                    />
                </Col>
                <Col>
                    <PasswordFormItem
                        formItem={{
                            name: 'password',
                            label: 'Password',
                        }}
                    />
                </Col>
                <Col>
                    <NameFormItem
                        formItem={{
                            name: 'name',
                            label: 'Name',
                        }}
                    />
                </Col>
                <Col>
                    <SubmitButton
                        block
                        type="primary"
                        loading={loading}
                    >
                        Create user
                    </SubmitButton>
                </Col>
            </Form>
        </Modal>
    );
}