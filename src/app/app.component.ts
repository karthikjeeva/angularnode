import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class appComponent implements OnInit {
  apiMsg = "";
  Name="";
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
   this.http.get('/api/getMsg').subscribe(data => {
    //console.log(JSON.stringify(data));  
    this.apiMsg = data['data'];
   })
  }

  onBtnClick() {
    let req = {
      body: {
        name: this.Name
      }
    }
    this.http.post('/api/postMsg', JSON.stringify(req),{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(data => {
      //console.log(JSON.stringify(data));  
      this.apiMsg = data['data'];
    })  
  }

}
