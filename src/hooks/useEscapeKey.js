import React from "react";

export function useEscapeKey(escAction) {
    const escAllToast = (e) => {
        if (e.key === "Escape") {
            escAction();
        }
    }

    React.useEffect(() => {
        window.addEventListener('keydown', escAllToast);
        return () => window.removeEventListener('keydown', escAllToast);
    })
}


