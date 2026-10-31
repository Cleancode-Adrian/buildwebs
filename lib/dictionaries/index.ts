import type { Locale } from '../i18n'
import { en, type Dictionary } from './en'
import { de } from './de'

const dictionaries: Record<Locale, Dictionary> = { en, de }

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang]
}

export type { Dictionary }
