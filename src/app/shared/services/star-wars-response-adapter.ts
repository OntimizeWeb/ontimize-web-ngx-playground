import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IServiceResponseAdapter } from "ontimize-web-ngx";
import { SwapiResponse } from "./wapi-service-response.class";

@Injectable()
export class StarsWarsResponseAdapter implements IServiceResponseAdapter<SwapiResponse> {
  context: any;
  adaptError(error: HttpErrorResponse) {
    throw new Error("Method not implemented.");
  }

  adapt(resp: HttpResponse<any>): SwapiResponse {
    let code = 1;
    let data = [];
    const message = '';

    // Adapt the data received from the service
    if (resp.body) {
      code = 0;
      if (resp.body.results) {
        data = resp.body.results;
        data.forEach(element => {
          const urlArray = element.valueOf()['url'].split('/');
          const uuid = urlArray[urlArray.length - 2];
          element['uuid'] = uuid;
        }

        );
      } else {
        data = [resp.body];
      }
    }

    // // Create Ontimize service response with the data adapted
    return new SwapiResponse(
      resp.status,
      resp.statusText,
      resp.headers,
      resp.ok,
      resp.body
    );
  }
}
