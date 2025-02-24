// eslint-disable-next-line react/prop-types
const Error = ({ message }) => (
  <div className="error-container">
    <div className="error-icon">!</div>
    <span>{message}</span>
  </div>
);

export default Error;
