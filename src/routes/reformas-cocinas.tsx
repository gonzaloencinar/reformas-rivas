import { createFileRoute } from '@tanstack/react-router'
import { ServicePage, serviceHead } from '~/components/ServicePage'
import { reformasCocinas } from '~/content/services'

export const Route = createFileRoute('/reformas-cocinas')({
  head: () => serviceHead(reformasCocinas),
  component: () => <ServicePage content={reformasCocinas} />,
})
