import { Card, Col, Row } from "antd";
import { AccountType } from "../../../hooks/api/accounts/useMyAccounts";
import AccountCard from "./AccountCard";

export default function MyAccounts() {

    const accoutnTypes = [AccountType.checking, AccountType.credit, AccountType.savings, AccountType.studentChecking];

    return (
        <Row
            gutter={[6, 6]}
        >
            <Col
                key={'head'}
                span={24}
            >
                <Card>
                    <h1>My accounts</h1>
                    <p>Visualize all your acocunts as a card list.</p>
                </Card>
            </Col>
            {
                accoutnTypes.map((accountType) => (
                    <AccountCard
                        accountType={accountType}
                    />
                ))
            }
        </Row>
    );
}