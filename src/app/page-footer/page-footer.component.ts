import { Component } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.css']
})
export class PageFooterComponent {

  logoPath:string='assets/images/logo.png';
  logoAltText:string='logo image';

  qrPath:string='assets/images/QR.png';
  qrAltText:string='QR code image';

}
