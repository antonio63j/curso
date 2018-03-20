import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.css']
})
export class EjdirectivangforComponent implements OnInit {
  cursos: string[];
  precios: number[];

  constructor(private http: Http) {
    this.cursos = ['java', 'cobol', 'angular'];
    this.precios = [10.5, 11.6, 2.125];
  }
    ngOnInit() {
      this.readData ('./app/ejdirectivangfor/ejdirectivangfor.component.ts');
  }

  readData (fileName: string) {
    this.http.get(fileName)
    .subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
    );
  }

  private extractData(res: Response) {
    console.log (res);

  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error("error:" + errMsg); // log to console instead
    return errMsg;
  }
}

}
