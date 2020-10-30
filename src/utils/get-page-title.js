import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Indi Loan'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    //return `${pageTitle} - ${title}`
    return `${pageTitle}`
  }
  return `${title}`
}
