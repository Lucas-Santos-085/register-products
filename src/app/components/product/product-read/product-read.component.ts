import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ProductService } from "../product.service";
// import { Pipe, PipeTransform } from "@angular/core";
// import { debounceTime } from "rxjs/internal/operators/debounceTime";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];

  displayedColumns = ["id", "name", "classification", "price", "action"];

  buttonEscritorio = "escritorio";
  buttonInformatica = "informatica";

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }

  filtrar(palavraChave: string) {
    //this.load();
    //if (palavraChave) {
    palavraChave = palavraChave.toUpperCase();

    this.products = this.products.filter(
      (a) => a.classification.toUpperCase().indexOf(palavraChave) >= 0
    );
    //}
  }

  private load() {
    //Session storage salva os dados como string

    location.reload();
  }
}
