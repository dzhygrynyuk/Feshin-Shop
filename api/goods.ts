import { ILoadOneProductFx } from "@/types/goods";
import { createEffect } from "effector";
import { toast } from "react-hot-toast";
import api from "./apiInstance";

export const loadOneProductFx = createEffect(async ({ productID, category }: ILoadOneProductFx) => {
    try {
        const { data } = await api.post('/api/goods/one', { productID, category });

        if(data?.message === 'Wrong product id') {
            return { productItem: { errorMessage: 'Wrong product id' } };
        }

        return data;
    } catch (error) {
        toast.error((error as Error).message);
    }
});