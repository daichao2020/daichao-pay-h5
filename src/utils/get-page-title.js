import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Money Loan'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    //return `${pageTitle} - ${title}`
    return `${pageTitle}`
  }
  return `${title}`
}
