import { Card } from 'antd';
import PasswordFormItem from '../../components/form/passwords/PasswordFormItem';
import SubmitButton from '../../components/form/SubmitButton';
import LoginFormItem from '../../components/form/user/LoginFormItem';
import { useLogin, UseLoginDTO } from '../../hooks/api/auth/useLogin';
import { useHandledForm } from '../../hooks/form/validation/useValidatedForm';
import { useLoading } from '../../hooks/indicators/loading/useLoading';
import { useCol } from '../../hooks/ui/responsive/useCol';
import './LoginViewPage.css';

export default function LoginViewPage() {

  const login = useLogin();

  const {
    loading,
    doAction: onSubmit,
  } = useLoading<UseLoginDTO>({
    action: login,
  });

  const {
    Form
  } = useHandledForm({
    onSubmit,
    validationTarget: new UseLoginDTO(),
  });

  const {
    Col
  } = useCol({
    span: 24,
  });

  return (
    <div
      className='middle-center-align'
    >
      <Card>
        <Form>
          <Col>
            <LoginFormItem
              formItem={{
                name: 'login'
              }}
            />
          </Col>
          <Col>
            <PasswordFormItem
              formItem={{
                name: 'password'
              }}
            />
          </Col>
          <Col>
            <SubmitButton
              block
              type='primary'
              loading={loading}
            >Login</SubmitButton>
          </Col>
        </Form>
      </Card>
    </div>
  );
}