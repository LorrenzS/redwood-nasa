export const schema = gql`
  type POTD {
    date: String
    explanation: String
    media_type: String
    service_version: String
    title: String
    url: String
  }
  type Query {
    getPOTD: POTD
  }
`
