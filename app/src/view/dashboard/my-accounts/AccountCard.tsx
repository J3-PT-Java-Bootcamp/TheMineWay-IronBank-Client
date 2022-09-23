import { Button, Card, Col, Space, Tag } from "antd";
import { formatDistance } from "date-fns";
import { useState } from "react";
import useMyAccounts, { AccountType } from "../../../hooks/api/accounts/useMyAccounts"
import AccountTransferModal from "./AccountTransferModal";

type Props = {
    accountType: AccountType;
}

export type AccountModel = {
    id: number;
    balance: {
        currency: 'EUR';
        amount: number;
    };
    primaryOwner: {
        id: number;
    };
    createdAt: Date;
    updatedAt: Date;
    accountType: AccountType;
}

export default function AccountCard(props: Props) {

    const { OnFetchFinished, refetch } = useMyAccounts(props.accountType);

    const getAccountTypeTag = () => {
        switch (props.accountType) {
            case AccountType.checking: return <Tag color="purple">Checking</Tag>;
            case AccountType.credit: return <Tag color="cyan">Credit</Tag>;
            case AccountType.savings: return <Tag color="orange">Savings</Tag>;
            case AccountType.studentChecking: return <Tag color="blue">Student checking</Tag>;
        }
    }

    const [transferAccount, setTransferAccount] = useState<AccountModel>();

    return (
        <OnFetchFinished
            render={(result) => (
                <>
                    <AccountTransferModal
                        onClose={(doRefetch) => {
                            if (doRefetch) refetch();
                            setTransferAccount(undefined);
                        }}
                        account={transferAccount ? {
                            ...transferAccount,
                            accountType: props.accountType
                        } : undefined}
                    />

                    {
                        result.data.map((account, i) => (
                            <Col
                                key={`${i}-${props.accountType}`}
                                xs={24}
                                md={12}
                            >

                                <Card
                                    actions={[
                                        <Button
                                            type="link"
                                            onClick={() => setTransferAccount(account)}
                                        >Transfer</Button>
                                    ]}
                                    hoverable
                                    title={(
                                        <Space>
                                            <Tag
                                                color={account.balance.amount >= 0 ? 'green' : 'red'}
                                            >
                                                {account.balance.amount} {account.balance.currency}
                                            </Tag>
                                            {getAccountTypeTag()}
                                        </Space>
                                    )}
                                    extra={(
                                        <>
                                            {`Last activity ${formatDistance(new Date(account.updatedAt), new Date(Date.now()))} ago`}
                                        </>
                                    )}
                                >
                                    <p>Account ID: <b>{account.id}</b></p>
                                </Card>
                            </Col>
                        ))
                    }
                </>
            )}
        />
    );
}