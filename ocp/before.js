class Request {
  static doSend(clientData, endpoint) {
    const options = { headers: {} }

    options.headers[
      clientData.authHeader
    ] = `${clientData.tokenType} ${clientData.token}`

    if (clientData.enableCompression) {
      options.headers["Accept-Encoding"] = "gzip,deflate"
      options["decompress"] = true
    }

    console.log(`Sending an HTTP request to ${endpoint} with ${JSON.stringify(options)}`)
  }
}

class BaseResource {
  static endpoint = ""

  constructor(clientData) {
    Request.doSend(clientData, this.constructor.endpoint)
  }
}

class Branches extends BaseResource {
  static endpoint = "/branches"
}
class Comments extends BaseResource {
  static endpoint = "/comments"
}

class ApiClient {
  clientData = {
    token: "",
    tokenType: "",
    authHeader: "x-api-token",
    enableCompression: false,
  }

  constructor(params) {
    const apiKey = params["apiKey"]
    this.clientData.token = apiKey

    const compression = Object(params)["enableCompression"]

    if (compression !== null) {
      this.clientData.enableCompression = compression
    }
  }

  branches() {
    console.log("Fetching branches")
    return new Branches(this.clientData)
  }

  comments() {
    console.log("Fetching comments")
    return new Comments(this.clientData)
  }
}

const client = new ApiClient({ apiKey: '123abc', enableCompression: true })
client.branches()