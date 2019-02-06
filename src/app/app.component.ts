import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {PriceQuote} from './price-quote/price-quote.component';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor(private router: Router) {
  }
  stock = '';
  priceQuote: PriceQuote = new PriceQuote('', 0);

  @ViewChild('child1')
  child1: ChildComponent;

  message: string;
  title = 'Hello';
  divContent = '<div>angular yeah</div>';
  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }

  buyHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
  toProductDetails() {
    // this.router.navigate(['/product']);
    this.router.navigate(['/product', 2]);
  }

  ngOnInit(): void {
    // setInterval( () => {
    //   this.child1.greeting('Tom');
    // }, 5000);
  }

  ngAfterViewInit(): void {
    console.log('父组件的视图初始化完毕');
    setTimeout( () => {
      this.message = 'Hello';
    }, 5000);
  }
  ngAfterViewChecked(): void {
    console.log('父组件的视图变更检测完毕');
  }
}
