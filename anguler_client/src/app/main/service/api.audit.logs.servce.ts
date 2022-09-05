import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "environments/environment";
import { User } from "app/auth/models";
import { HttpCommonService } from "./http.common.servce";
import { BuyerSellerResponse, FileRespons, Graph, LogsResponse, ResponseRet } from "../model/response.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ApiAuditLogsService {
  /**
   *
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpCommonService) {}

  /**
   * Get all users
   */
  getAllTransaction(): Observable<Array<string>> {
    let url = `${environment.apiUrl}`  + `/api/audit/all/transaction`;
    return this._http.getWithoutError(url);
  }

  /**
   * Get user by id
   */
  getByTansationId(
    id: string
  ): Observable<Map<string, Array<Map<string, any>>>> {
    let url = `${environment.apiUrl}`  + `/api/audit/get/transaction/${id}`;
    return this._http.getWithoutError(url);
  }


  getLogsBySubsribeId(
    id: string
  ): Observable< ResponseRet<Array<LogsResponse>>> {
    let url = `${environment.apiUrl}`  + `/api/audit/dashboard/logs`;
    return this._http.postWithoutError(url,{subsciberId:id});
  }

  getByAuditbyDate(
    start: string,end:string,page:number
  ): Observable<Map<string, Array<Map<string, any>>>> {
    let url = `${environment.apiUrl}`  + `/api/audit/get/transaction/by/date/${start}/${end}/${page}`;
    return this._http.getWithoutError(url);
  }

  getDashboardBytype(api:string,
    type: string,start:string,end:string,select:string
  ): Observable< Array<Graph<number>>> {
    if(api == 'transaction')
    return this._http.getWithoutError(`${environment.apiUrl}`+`/api/audit/dashboard/${select}/${type}/${start}/${end}`);
    else if(api == 'lookup')
    return this._http.getWithoutError(`${environment.apiUrl}`+`/api/audit/dashboard/lookup/${select}/${type}/${start}/${end}`);
    else if(api == 'seller')
    return this._http.getWithoutError(`${environment.apiUrl}`+`/api/audit/dashboard/seller/${select}/${type}/${start}/${end}`);
    else if(api == 'buyer')
    return this._http.getWithoutError(`${environment.apiUrl}`+`/api/audit/dashboard/buyer/${select}/${type}/${start}/${end}`);
 
  }

  getDashboardSellerBuyerBytype(api:string,start:string,end:string
  ): Observable< Array<BuyerSellerResponse>> {
    if(api == 'seller')
    return this._http.getWithoutError(`${environment.apiUrl}`+`/api/audit/dashboard/grid/seller/${start}/${end}`);
    else if(api == 'buyer')
    return this._http.getWithoutError(`${environment.apiUrl}`+`/api/audit/dashboard/grid/buyer/${start}/${end}`);
    
 
  }
  getFormatDate(date):string {
    let month=date.getMonth()+1;
    let dateStr= (
      (date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate()) +
      "-" +
      (month < 10 ? "0" +month : "" + month) +
      "-" +
      date.getFullYear()
     
    );
    return dateStr;
  }

  downloadFileSerivce(start: string,end:string): Observable<FileRespons> {
    return this._http.getWithoutError(`${environment.apiUrl}`+`/api/audit/dashboard/summary/report/${start}/${end}`);
}

downloadFile( file:FileRespons)
{
   
     let c = this.base64ToArrayBuffer(file.blob);
      var blobdata = new Blob([c], {
        type: "application/octet-stream"
      });
      var downloadUrl = URL.createObjectURL(blobdata);
      var a = document.createElement("a");
      a.href = downloadUrl;
      a.download = file.fileName;
      a.click();
  
  }
  base64ToArrayBuffer(base64: string) {
    
      var binary_string = window.atob(base64);
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes.buffer;
    }

}
