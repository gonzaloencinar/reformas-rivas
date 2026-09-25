import { createFileRoute } from '@tanstack/react-router'
import { ServicePage, serviceHead } from '~/components/ServicePage'
import { reformasPisos } from '~/content/services'

export const Route = createFileRoute('/reformas-pisos')({
  head: () => serviceHead(reformasPisos),
  component: () => <ServicePage content={reformasPisos} />,
})
