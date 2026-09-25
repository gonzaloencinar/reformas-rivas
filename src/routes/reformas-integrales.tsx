import { createFileRoute } from '@tanstack/react-router'
import { ServicePage, serviceHead } from '~/components/ServicePage'
import { reformasIntegrales } from '~/content/services'

export const Route = createFileRoute('/reformas-integrales')({
  head: () => serviceHead(reformasIntegrales),
  component: () => <ServicePage content={reformasIntegrales} />,
})
