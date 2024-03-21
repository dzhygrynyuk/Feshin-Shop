import { ISignUpFx } from "@/types/authPopup";
import { createEffect } from "effector";
import api from "./apiInstance";
import toast from "react-hot-toast";
import { onAuthSuccess } from "@/libs/utils/auth";

export const signUpFx = createEffect(
    async ({ name, password, email }: ISignUpFx)  => {
        const { data } = await api.post('/api/users/signup', { name, password, email });

        if(data.warningMessage){
            toast.error(data.warningMessage);
            return;
        }

        onAuthSuccess('Registration was successful!', data);

        return data;
    }
);

export const singInFx = createEffect(async ({ email, password }: ISignUpFx) => {
    const { data } = await api.post('/api/users/login', { email, password });

    if(data.warningMessage){
        toast.error(data.warningMessage);
        return;
    }

    onAuthSuccess('Login is successful!', data);

    return data;
});