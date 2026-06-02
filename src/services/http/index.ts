import { LocalStorageService } from "../local-storage";
import "./interceptors";

const localStorageService = new LocalStorageService();
export class HttpService {
  getTimeOutDuration() {
    // all api calls will be timeout
    // if server didn't responsed in 15 seconds
    const timeOutDuration = 600000;
    return timeOutDuration;
  }

  async getHeaders(
    options?: IHttpRequestOptions
  ): Promise<Record<string, string>> {
    let headers: Record<string, string> = {};

    // eslint-disable-next-line prefer-destructuring
    if (options && options.headers) {
      const { headers: customHeaders } = options;
      headers = customHeaders;
      // return headers;
    }

    const token = await localStorageService.fetch("token");
    if (token && typeof token === "string" && !headers.Authorization)
      headers.Authorization = `Bearer ${token}`;

    if (!headers["Content-Type"]) {
      headers["Content-Type"] = "application/json";
    }

    headers["App-Type"] = "CONSUMER";
    // prevent axios from caching the API data
    headers["Cache-Control"] = "no-cache";
    return headers;
  }
}
