import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Cash View'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    //return `${pageTitle} - ${title}`
    return `${pageTitle}`
  }
  return `${title}`
}
