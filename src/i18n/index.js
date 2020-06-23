import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLanguage } from '@/utils/auth'
import { Locale } from 'vant';

import en from '../i18n/en'

import vantEnUS from 'vant/lib/locale/lang/en-US'

import vi_VN from '../i18n/vi_VN'
import vantViVN from '../i18n/vant_vi_VN'

Vue.use(VueI18n)

const langConfig = {
    "en": {
        ...en, //引入自定义国际化
        ...vantEnUS
    },
	"vi_VN": {//越南
        ...vi_VN,
        ...vantViVN
    },

}

export function getLanguageIn() {
    const chooseLanguage = getLanguage('language')
    if(chooseLanguage) return chooseLanguage

    const language = (navigator.language || navigator.browserLanguage).toLowerCase()
    const locales = Object.keys(langConfig)

    for(const locale of locales) {
        if(language.indexOf(locale) > -1) {
            return locale
        }
    }

    return 'en'
}

const i18n = new VueI18n({
    locale: getLanguageIn(),
    messages: langConfig
})

// 更新vant组件库本身的语言变化，支持国际化
function vantLocales (lang) {
    if (lang === 'vi_VN') {
        Locale.use(lang, vantViVN)
    } else {
        Locale.use(lang, vantEnUS)
    }
}
export { i18n, vantLocales }