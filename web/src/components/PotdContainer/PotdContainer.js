import Potd from 'src/components/Potd/Potd'

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
export const Loading = () => (
  <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export const Empty = () => (
  <div>
    <h3>
      We couldn't find your image, but we discovered something new in space!
    </h3>
    <img src="/whoops.png" alt="whoops" />
  </div>
);

export const Failure = ({ error }) => <div>Error: {error.message}</div>;

export const Success = ({ getPOTD }) => {
  return <div>SUCCESS</div>
}
