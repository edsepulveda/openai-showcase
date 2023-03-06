import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'

export const Alerts = ({ status, title }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
    </Alert>
  )
}
