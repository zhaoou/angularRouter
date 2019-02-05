import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PriceQuote} from './price-quote/price-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stock = '';
  priceQuote: PriceQuote = new PriceQuote('', 0);
  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }

  buyHandler(event: PriceQuote) {
    this.priceQuote = event;
  }

  constructor(private router: Router) {
  }
  toProductDetails() {
    // this.router.navigate(['/product']);
    this.router.navigate(['/product', 2]);
  }
}
