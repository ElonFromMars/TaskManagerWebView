const localServerHost = 'http://localhost:8080';
const remoteServerHost =  'https://task-manager-smart-api.azurewebsites.net';

export const API_BASE_URL = IsLocalhost() ? localServerHost : remoteServerHost;

export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = window.location.hostname + '/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;


function IsLocalhost() {
    return Boolean(
        window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )   
    );
}
