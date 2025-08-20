import { HttpHeaders } from "@angular/common/http";
import { ServiceResponse } from "ontimize-web-ngx";



export class SwapiResponse implements ServiceResponse {
  public code: number;
  public message: string;
  public sqlTypes: { [key: string]: number; };
  public startRecordIndex: number;
  public totalQueryRecordsNumber: number;
  public data: any;

  constructor(
    public status: number,
    public statusText: string,
    public headers: HttpHeaders,
    public ok: boolean,
    public body: any
  ) {
    this.data = body.results;
    if (body.count) {
      this.totalQueryRecordsNumber = body.count;
      this.startRecordIndex = 0;
    }


    if (this.status >= 200 || this.status < 300) {
      this.code = 0;
    } else if (this.status === 404) {
      this.code = 3;
    } else {
      this.code = 1;
    }
    this.message = this.statusText;

  }

  isSuccessful(): boolean {
    return this.status >= 200 || this.status < 300;
  }

  isFailed(): boolean {
    return this.status > 300;
  }

  isUnauthorized(): boolean {
    return this.status === 403;
  }

}
