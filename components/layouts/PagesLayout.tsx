'use client'
import { $quickViewModal, $showSizeTable, closeQuickViewModal } from "@/context/modals";
import Layout from "./Layout";
import { useUnit } from "effector-react";
import { closeSizeTableByCheck, removeOverflowHiddenFromBody } from "@/libs/utils/common";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
    const showQuickViewModal = useUnit($quickViewModal);
    const showSizaTable = useUnit($showSizeTable);

    const handleCloseQuickViewModal = () => {
        removeOverflowHiddenFromBody();
        closeQuickViewModal();
    };

    const handleCloseSizeTable = () => closeSizeTableByCheck(showQuickViewModal);

    return (
        <html lang="en">
            <body>
                <Layout>{children}</Layout>
                <div 
                    className={`quick-view-modal-overlay ${showQuickViewModal ? 'overlay-active' : ''}`} 
                    onClick={handleCloseQuickViewModal}
                />
                <div 
                    className={`size-table-overlay ${showSizaTable ? 'overlay-active' : ''}`}
                    onClick={handleCloseSizeTable}
                />
            </body>
        </html>
    );
};

export default PagesLayout;