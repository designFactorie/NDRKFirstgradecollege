// Preserve existing bookmarks when moving from the repository-based hash URLs.
export function getLegacyRedirect(location) {
    const prefix = '/NDRKFirstgradecollege';
    const oldPath = location.pathname === prefix || location.pathname.startsWith(prefix + '/');
    const oldHash = /^#\/(?!\/)/.test(location.hash);
    if (!oldPath && !oldHash) return null;

    const target = oldHash
        ? new URL(location.hash.slice(1), location.origin)
        : new URL(location.pathname.slice(prefix.length) || '/', location.origin);
    if (target.origin !== location.origin) return null;
    return {
        path: target.pathname + (target.search || location.search),
        section: (oldHash ? target.hash : location.hash).slice(1),
    };
}
