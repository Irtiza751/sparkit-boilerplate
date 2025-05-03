import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export function Home() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="min-h-screen container mx-auto pt-5">
      <Helmet>
        <title>Sparkit Boilerplate</title>
      </Helmet>
      <div>
        <h1 className="text-3xl font-bold">{t('welcome')}</h1>
        <p className="mb-2">{t('description')}</p>
        <select
          name="lang"
          id="lang"
          onChange={(e) => changeLanguage(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="en">English</option>
          <option value="ur">Urdu</option>
        </select>
      </div>
    </div>
  )
}
