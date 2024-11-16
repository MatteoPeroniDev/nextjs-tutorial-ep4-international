import { ReactElement } from 'react'
import { I18nProviderClient } from '../../locales/client'
import Navbar from '@/components/Navbar'
 
export default function SubLayout({ params: { locale }, children }: { params: { locale: string }, children: ReactElement }) {
  return (
    <I18nProviderClient locale={locale}>
      <Navbar />
      {children}
    </I18nProviderClient>
  )
}