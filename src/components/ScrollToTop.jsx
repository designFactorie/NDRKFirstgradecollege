import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash, key, state } = useLocation();

    useEffect(() => {
        let id;
        try { id = decodeURIComponent(state?.section || hash.slice(1)); } catch { id = ''; }
        const target = id ? document.getElementById(id) : document.querySelector('main');
        if (target) {
            // Preserve native details controls while supporting linked curriculum sections.
            if (target.tagName === 'DETAILS') target.open = true;
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
        }
        if (id && target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
        else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname, hash, key, state]);

    return null;
}
