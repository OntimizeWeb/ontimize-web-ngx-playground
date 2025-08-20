import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IServiceResponseAdapter } from "ontimize-web-ngx";
import { RickAndMortyServiceResponse } from "./rickandmorty-service.response";

@Injectable()
export class RickAndMortyResponseAdapter implements IServiceResponseAdapter<RickAndMortyServiceResponse> {
  context: any;
  adaptError(httpError: HttpErrorResponse) {
    return httpError.error.error;
  }

  adapt(resp: HttpResponse<any>): RickAndMortyServiceResponse {
    let code = 1;
    let data = [];

    // Adapt the data received from the service
    if (resp.body) {
      code = 0;
      if (resp.body.results) {
        data = resp.body.results;

      } else {
        data = [resp.body];
      }
    }

    // // Create RickAndMorty service response with the data adapted
    return new RickAndMortyServiceResponse(
      resp.status,
      resp.statusText,
      resp.headers,
      resp.ok,
      resp.body
    );
  }
}
