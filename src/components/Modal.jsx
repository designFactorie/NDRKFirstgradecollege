import { useEffect, useRef, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

let locks = 0;
let previousOverflow;

export default function Modal({ open, onClose, titleId, descriptionId, children, className = '', initialFocus }) {
    const mounted = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
    const ref = useRef(null);
    const backdropPress = useRef(false);

    useEffect(() => {
        if (!open || !mounted) return;
        const dialog = ref.current;
        const trigger = document.activeElement;
        if (locks++ === 0) {
            previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        }
        dialog.showModal();
        if (initialFocus) dialog.querySelector(initialFocus)?.focus({ preventScroll: true });
        return () => {
            dialog.close();
            if (--locks === 0) document.body.style.overflow = previousOverflow;
            if (trigger?.isConnected) trigger.focus({ preventScroll: true });
        };
    }, [open, initialFocus, mounted]);

    if (!mounted) return null;
    return createPortal(
        <dialog ref={ref} className={`site-dialog ${className}`} aria-labelledby={titleId}
            aria-describedby={descriptionId} onCancel={(event) => { event.preventDefault(); onClose(); }}
            onKeyDown={(event) => {
                if (event.key !== 'Tab') return;
                const controls = [...event.currentTarget.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]')]
                    .filter((element) => element.getClientRects().length > 0);
                const first = controls[0];
                const last = controls[controls.length - 1];
                if (!event.currentTarget.contains(document.activeElement) || document.activeElement === event.currentTarget) {
                    event.preventDefault();
                    (event.shiftKey ? last : first)?.focus();
                } else if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last?.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first?.focus();
                }
            }}
            onPointerDown={(event) => { backdropPress.current = event.target === event.currentTarget; }}
            onClick={(event) => {
                if (backdropPress.current && event.target === event.currentTarget) onClose();
                backdropPress.current = false;
            }}>
            <div className="dialog-content">
                <button type="button" className="dialog-close" aria-label="Close dialog" onClick={onClose}><X size={21} /></button>
                {children}
            </div>
        </dialog>, document.body,
    );
}
