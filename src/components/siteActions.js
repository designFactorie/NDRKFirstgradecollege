import { createContext, useContext } from 'react';

export const SiteActionsContext = createContext(null);
export const useSiteActions = () => useContext(SiteActionsContext);

export const resourceMessages = {
    prospectus: ['College prospectus', 'The prospectus is not available to download yet. Please check back for the official document.'],
    subjects: ['Program subjects', 'The official subjects document is not available to download yet. You can explore the program information on the Courses page.'],
    syllabus: ['Program syllabus', 'The official syllabus is not available online yet. Please check back for the published document.'],
    tour: ['College virtual tour', 'The virtual tour is not available yet. You can explore the campus photographs and activities on this page.'],
    linkedin: ['Connect on LinkedIn', 'The college’s official LinkedIn link is not available here yet. Please check back soon.'],
    alumni: ['Alumni portal', 'Online alumni portal access is not available yet. You can still browse alumni stories and the event registration link on this page.'],
    network: ['Alumni network', 'Online alumni network registration is not available yet. Your email address has not been sent or saved.'],
    subscribe: ['Academic updates', 'Email subscriptions are not available yet. Your email address has not been sent or saved. Please check this website for updates.'],
    coursera: ['Coursera Career Academy', 'The NDRK-sponsored registration link is not available here yet. Please contact the college office for access to your sponsored account.'],
    directory: ['Campus directory', 'The campus directory is not available online yet. Please visit the college administrative office in Hassan for assistance.'],
};
