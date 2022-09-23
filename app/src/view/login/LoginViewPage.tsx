import { Card, Col as AntdCol } from 'antd';
import CheckboxFormItem from '../../components/form/CheckboxFormItem';
import PasswordFormItem from '../../components/form/passwords/PasswordFormItem';
import SubmitButton from '../../components/form/SubmitButton';
import LoginFormItem from '../../components/form/user/LoginFormItem';
import { useLogin, UseLoginDTO } from '../../hooks/api/auth/useLogin';
import { useHandledForm } from '../../hooks/form/validation/useValidatedForm';
import { useLoading } from '../../hooks/indicators/loading/useLoading';
import { useCol } from '../../hooks/ui/responsive/useCol';
import { useAuth } from '../../providers/authentication/AuthenticationProvider';
import './LoginViewPage.css';

export default function LoginViewPage() {

  const login = useLogin();

  const { setAuthContext } = useAuth();

  const {
    loading,
    doAction: onSubmit,
  } = useLoading<UseLoginDTO>({
    action: async (v) => {
      const { data: { access_token } } = await login(v);
      setAuthContext({
        authToken: access_token,
      }, {
        remember: v.remember,
      });
    },
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
          <AntdCol>
            <CheckboxFormItem
              formItem={{
                name: 'remember',
              }}
            />
          </AntdCol>
          <AntdCol
            span={20}
          >
            <p>Remember me</p>
          </AntdCol>
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