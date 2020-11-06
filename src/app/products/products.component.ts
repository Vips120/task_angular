import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public fundsData:any;
public loading;
public imgUrl="../../assets/images/funds_logo/sbi.jpg";
  constructor(private fundService: FundService) { }

  ngOnInit(): void {
    this.loading = true;
    this.fundService.fetchfundsData().subscribe((data:any) => {
    // console.log(data.result.funds.slice(0,10));
    this.loading = false;
      this.fundsData = data.result.funds.slice(0,10);
    })
  }

}
