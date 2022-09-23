import { Col, Row } from "antd";
import Container from "../../components/UI/Container";
import MyAccounts from "./my-accounts/MyAccounts";

export default function DashboardViewPage() {
    return (
        <Container>
            <Row
                gutter={[12, 12]}
            >
                <Col
                    xs={24}
                >
                    <MyAccounts/>
                </Col>
            </Row>
        </Container>
    );
}