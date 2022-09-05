import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiAuditLogsService } from "../service/api.audit.logs.servce";
import { ChartService } from "../service/chart.servce";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  

  constructor(
    private _router: Router,
    private apiAuditLogsService: ApiAuditLogsService,
    private chartService: ChartService
  ) {
    let dt = new Date();

   
  }
 

  /**
   * On init
   */
  ngOnInit() {}
}
