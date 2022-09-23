import { Button, Card, Col, Row } from "antd";
import Container from "../../components/UI/Container";
import { useAuth } from "../../providers/authentication/AuthenticationProvider";
import MyAccounts from "./my-accounts/MyAccounts";

export default function DashboardViewPage() {

    const { setAuthContext } = useAuth();

    return (
        <Container>
            <Row
                gutter={[12, 12]}
            >
                <Col
                    span={24}
                >
                    <Card>
                        <Button
                            type="primary"
                            onClick={() => setAuthContext(undefined)}
                        >Exit account</Button>
                    </Card>
                </Col>
                <Col
                    xs={24}
                >
                    <MyAccounts/>
                </Col>
            </Row>
        </Container>
    );
}