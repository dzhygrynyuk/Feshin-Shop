import { useState } from "react";

const useImagePreloader = () => {
    const [imageSpinner, setImageSpinner] = useState(true);

    const handleLoadingImageComplete = async (img: React.SyntheticEvent<HTMLElement, Event>) => {
        img.currentTarget.classList.remove('opacity-0');
        setImageSpinner(false);
    };

    return { handleLoadingImageComplete, imageSpinner };
};

export default useImagePreloader;