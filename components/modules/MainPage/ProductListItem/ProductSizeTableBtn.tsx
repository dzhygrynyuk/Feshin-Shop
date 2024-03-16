import { useUnit } from "effector-react";
import { $quickViewModal, showSizeTable } from "@/context/modals";
import { setSizeTableSizes } from "@/context/sizeTable";
import { useLang } from "@/hooks/useLang";
import { addOverflowHiddenToBody } from "@/libs/utils/common";
import { ISelectedSizes } from "@/types/common";

const ProductSizeTableBtn = ({ sizes, type, className }: ISelectedSizes) => {
    const { lang, translations } = useLang();
    const showQuickViewModal = useUnit($quickViewModal);

    const handleShowSizeTable = () => {
        if(!showQuickViewModal){
            addOverflowHiddenToBody();
        }

        setSizeTableSizes({ sizes, type });
        showSizeTable();
    };
    
    return (
        <button className={`btn-reset ${className}`} onClick={handleShowSizeTable}>
            {translations[lang].product.size_table}
        </button>
    );
};

export default ProductSizeTableBtn;