import { Button, Card, Col, Row, Space } from "antd";
import { useState } from "react";
import Container from "../../components/UI/Container";
import { useAuth } from "../../providers/authentication/AuthenticationProvider";
import CreateUserModal from "./create-user/CreateAdminModal";
import MyAccounts from "./my-accounts/MyAccounts";

export default function DashboardViewPage() {

    const { setAuthContext } = useAuth();

    const [createAdminVisible, setCreateAdminVisible] = useState<boolean>(false);

    return (
        <>
            <CreateUserModal
                visible={createAdminVisible}
                onFinish={() => setCreateAdminVisible(false)}
            />

            <Container>
                <Row
                    gutter={[12, 12]}
                >
                    <Col
                        span={24}
                    >
                        <Card>
                            <Space>
                                <Button
                                    type="primary"
                                    onClick={() => setAuthContext(undefined)}
                                >Exit account</Button>
                                <Button
                                    type="primary"
                                    onClick={() => setCreateAdminVisible(true)}
                                >Create user</Button>
                            </Space>
                        </Card>
                    </Col>
                    <Col
                        xs={24}
                    >
                        <MyAccounts />
                    </Col>
                </Row>
            </Container>
        </>
    );
}