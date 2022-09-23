import { Form, Row } from "antd";
import { useForm, FormProps, FormInstance } from "antd/es/form/Form"
import { validate } from "class-validator";

type FormOptions<T> = {
    form?: FormProps<T>;
    formInstance?: Omit<FormInstance<T>, 'onFinish'>;
    onSubmit?: (values: T) => Promise<void>;
    validationTarget?: T;
    displayErrorMessages?: boolean;
    disableAutoRow?: boolean;
}

export function useHandledForm<T extends Object>(props?: FormOptions<T>) {

    const [form] = useForm<T>(props?.formInstance);

    const onSubmit = async (values: T) => {
        if (props?.validationTarget) {
            const errors = await validate(Object.assign(props.validationTarget as Object, values));

            // Display errors
            for (const name of Object.keys(values)) {
                const error = errors.find((error) => error.property === name);

                form.setFields([
                    {
                        name,
                        errors: !error?.constraints ? [] : (props.displayErrorMessages ? [Object.values(error.constraints).join(', ')] : ['']),
                    }
                ]);
            }

            if (errors.length > 0) return;
        }
        if (props?.onSubmit) await props?.onSubmit(values);
    }

    return {
        Form: (p: { children: JSX.Element | JSX.Element[] }) => (
            <Form
                form={form}
                onFinish={onSubmit}
                layout={props?.form?.layout ?? 'vertical'}
                {...props?.form}
            >
                {
                    props?.disableAutoRow ? p.children : (
                        <Row
                            gutter={[12, 0]}
                        >
                            {p.children}
                        </Row>
                    )
                }
            </Form>
        ),
        form,
    }
}