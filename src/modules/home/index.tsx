import { rootRoute } from '@/routes/routeTree'
import { Button } from '@/shared/components/ui/button'
import { authGuard } from '@/shared/lib/classes/AuthGuard'
import { createRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  loader: authGuard.resolve,
  component: Home
})

function Home() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen container mx-auto pt-5">
      <Helmet>
        <title>Sparkit Boilerplate</title>
      </Helmet>
      <div className="pt-6 mb-5">
        <h1 className="text-5xl font-bold">{t('home.welcome')}</h1>
        <p className="text-xl mt-4">{t('home.description')}</p>
      </div>
      <Button>Hi there</Button>
    </div>
  )
}
