import { Link } from 'react-router-dom';

// Keep section navigation in router state so the visible URL stays a clean path.
export default function SectionLink({ to, section, children, ...props }) {
    return <Link {...props} to={to} state={{ section }}>{children}</Link>;
}
