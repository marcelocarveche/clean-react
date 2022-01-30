import { HttpPostClient } from "data/protocolos/http/http-post-client"

export class HttpPostClientSpy implements HttpPostClient {
  url?: string 

  async post(url: string): Promise<void> {
    this.url = url

    return Promise.resolve()
  }
}