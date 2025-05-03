import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export function Header() {
  const { i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }
  return (
    <header className="border-b border-stone-200">
      <div className="flex justify-between items-center container mx-auto py-3">
        <h1 className="text-2xl font-semibold">
          <span className="text-indigo-700">Sparkit</span> Boiler Plate
        </h1>
        <nav>
          <ul className="flex gap-5 items-center">
            <li className="underline">
              <Link to="/">Home</Link>
            </li>
            <li className="underline">
              <Link to="/about">About</Link>
            </li>
            <li>
              <select
                name="lang"
                id="lang"
                onChange={(e) => changeLanguage(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="en">English</option>
                <option value="ur">Urdu</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
