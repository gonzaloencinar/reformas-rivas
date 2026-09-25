import { createFileRoute } from '@tanstack/react-router'
import { ServicePage, serviceHead } from '~/components/ServicePage'
import { reformasBanos } from '~/content/services'

export const Route = createFileRoute('/reformas-banos')({
  head: () => serviceHead(reformasBanos),
  component: () => <ServicePage content={reformasBanos} />,
})
