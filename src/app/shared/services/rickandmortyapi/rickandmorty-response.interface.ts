import { BaseResponse } from "ontimize-web-ngx";

export interface IRickAndMortyResponse extends BaseResponse {

  info?: PageInfo;
  results?: any;
}

interface PageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;

}
