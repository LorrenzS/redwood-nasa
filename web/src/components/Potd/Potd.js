export const QUERY = gql`
  query {
    getPOTD {
      date
      explanation
      media_type
      service_version
      title
      url
    }
  }
`

const Potd = ({ getPOTD }) => {
  console.log(getPOTD)

  return (
    <div>
      <h2>{'Potd'}</h2>
      <p>{'Find me in ./web/src/components/Potd/Potd.js'}</p>
    </div>
  )
}

export default Potd
