import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { locale as en } from "../i18n/en";
import { locale as fr } from "../i18n/fr";
import { locale as de } from "../i18n/de";
import { locale as pt } from "../i18n/pt";
import { CoreTranslationService } from "@core/services/translation.service";
import {
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-form-grid",
  templateUrl: "./form-grid.component.html",
  styleUrls: ["./form-grid.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class FormGridComponent implements OnInit {
   
  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(
    private _coreTranslationService: CoreTranslationService,
  
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {
    this._coreTranslationService.translate(en, fr, de, pt);
    
  }
 

  onGetRowClass = (row) => {
    if (row.flag) {
      return "color-transaction-row-red";
    } else {
      // return "color-transaction-row-green";
    }
  };
  ngOnInit(): void {
   
   
  }
  
}
