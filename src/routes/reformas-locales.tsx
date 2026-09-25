import { createFileRoute } from '@tanstack/react-router'
import { ServicePage, serviceHead } from '~/components/ServicePage'
import { reformasLocales } from '~/content/services'

export const Route = createFileRoute('/reformas-locales')({
  head: () => serviceHead(reformasLocales),
  component: () => <ServicePage content={reformasLocales} />,
})
