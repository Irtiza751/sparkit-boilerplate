// import viteLogo from '/vite.svg'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Sparkit Boilerplate</title>
      </Helmet>
      <div>
        <h1 className="text-3xl font-bold">{t('welcome')}</h1>
        <p className="mb-2">{t('description')}</p>
        <button
          className="py-2 px-3 bg-stone-800 rounded text-white"
          onClick={() => changeLanguage('fr')}
        >
          Switch to French
        </button>
      </div>
    </div>
  )
}

export default App
