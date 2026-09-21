import { useSiteActions } from './siteActions';

export default function ActionButton({ resource, program, message, purpose = 'apply', children, ...props }) {
    const { openEnquiry, showResource } = useSiteActions();
    return <button {...props} type="button" onClick={() => {
        if (resource) showResource(resource);
        else openEnquiry({ purpose, ...(program ? { program } : {}), ...(message ? { message } : {}) });
    }}>{children}</button>;
}
