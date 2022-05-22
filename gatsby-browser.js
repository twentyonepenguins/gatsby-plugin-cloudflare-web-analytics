export const onRouteUpdate = (args, pluginOptions) => {
  const { token } = pluginOptions;

  if(!token || typeof token != 'string') {
    throw Error('gatsby-plugin-cloudflare-web-analytics: No token provided in gatsby-config.js');
  }
  
  const head = document.head;
  const script = document.createElement('script');
  script.id = 'cloudflare-web-analytics'
  script.defer = true;
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  script.setAttribute('data-cf-beacon', `{"token": "${token}"}`);

  const existingScript = head.querySelector(`#${script.id}`);
  if(existingScript) {
    head.removeChild(existingScript)
  }

  head.appendChild(script);
}