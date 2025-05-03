import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export function Home() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen container mx-auto pt-5">
      <Helmet>
        <title>Sparkit Boilerplate</title>
      </Helmet>
      <div className="pt-6">
        <h1 className="text-5xl font-bold">{t('home.welcome')}</h1>
        <p className="text-xl mt-4">{t('home.description')}</p>
      </div>
    </div>
  )
}
