import { Col, ColProps } from "antd";

type Props = ColProps;

export function useCol(props: Props) {
    return {
        Col: (p: { children: JSX.Element | JSX.Element[] }) => (
            <Col
                {...props}
            >
                {p.children}
            </Col>
        ),
    }
}