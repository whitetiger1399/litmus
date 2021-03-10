const loc = window.location;
let sockURL;
let authURL;
let apiURL;
if (loc.protocol === 'https:') {
  sockURL = 'wss:';
} else {
  sockURL = 'ws:';
}
if (
  process.env.NODE_ENV.trim() === 'development' ||
  process.env.NODE_ENV.trim() === 'test'
) {
  // authURL = `${window.location.protocol}//${window.location.hostname}:3000`;
  // apiURL = `${window.location.protocol}//${window.location.hostname}:8080`;
  // sockURL += `//${window.location.hostname}:8080`;
  authURL = `http://a52ae9ceb2bf9436d9c6e91008963246-1877477097.us-east-2.elb.amazonaws.com:9003`;
  apiURL = `http://a52ae9ceb2bf9436d9c6e91008963246-1877477097.us-east-2.elb.amazonaws.com:9002`;
  sockURL += `//a52ae9ceb2bf9436d9c6e91008963246-1877477097.us-east-2.elb.amazonaws.com:9002`;
} else {
  authURL = '/auth';
  apiURL = '/api';
  sockURL += `//${loc.host}/ws`;
}
export default {
  environment: process.env.NODE_ENV,
  analytics: {
    url:
      process.env.ANALYTICS_API || 'https://hub.litmuschaos.io/api/community',
  },
  auth: {
    url: process.env.AUTH_API || authURL,
  },
  grahqlEndpoint: process.env.GQL_API || apiURL,
  grahqlEndpointSubscription: process.env.GQL_API || sockURL,
};
