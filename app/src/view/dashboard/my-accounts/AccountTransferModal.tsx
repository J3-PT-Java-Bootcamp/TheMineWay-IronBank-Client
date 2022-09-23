import { Modal } from "antd";
import { AccountModel } from "./AccountCard";

type Props = {
    account?: AccountModel;
    onClose: (doRefetch: boolean) => void;
}

export default function AccountTransferModal(props: Props) {
    return (
        <Modal
            visible={!!props.account}
            onCancel={() => props.onClose(false)}
            title={`Transfer from account ${props.account?.id}`}
        >
            {
                props.account && (
                    <>
                        
                    </>
                )
            }
        </Modal>
    );
}