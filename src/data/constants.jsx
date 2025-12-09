/**
 * =================================================================================
 *  CONTENT CONTROL CENTER
 * =================================================================================
 *  This file now exports content from 'user_config.jsx'.
 *  
 *  TO EDIT CONTENT:
 *  Open 'src/data/user_config.jsx' and make your changes there.
 *  That file is git-ignored, so your personal data stays private.
 * =================================================================================
 */

import USER_CONFIG from './user_config.json';

export const COLLABORATION_STATUS = USER_CONFIG.collaborationStatus;
export const PROJECT_DATA = USER_CONFIG.projects;
export const ARTICLE_DATA = USER_CONFIG.articles;
export const EXPERIENCE_DATA = USER_CONFIG.experience;
export const EDUCATION_DATA = USER_CONFIG.education;
