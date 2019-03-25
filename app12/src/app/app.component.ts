import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Certificate, Record } from './shared/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  public queryForm: FormGroup;
  public recordForm: FormGroup;
  public transferForm: FormGroup;
  public currentCertificate: Certificate = new Certificate({});
  public all_cert: Certificate[] = [];
  public PRno: any;
  public cert_CName: any;
  public cert_Seatno: any;
  public cert_examination: any;
  public cert_YOP: any;
  public cert_sububject: any;
  public data: string;


  title = 'SecureCert Demo';

  constructor(
    private _httpClient: HttpClient,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    //below function call queryAllCerts when page is refresh
  //  this.queryAllCerts();

    this.queryForm = this._fb.group({
      seatNo: null
    });

    this.recordForm = this._fb.group({
      cert_PRno: null,
      cert_CName: null,
      cert_Seatno: null,
      cert_examination: null,
      cert_YOP: null,
      cert_sububject: null
    });


    this.transferForm = this._fb.group({
      seatNo:null,
      studentName:null
    });

  }



/*
/*
  queryAllCerts() {
    this._httpClient.get(`http://localhost:3000/queryAllCert`).subscribe((res: any[]) => {
      this.all_cert = res.map(cert => new Certificate(cert));
    });
  }
  */

  queryCert() {
//${this.queryForm.get('seatNo').value}
    this._httpClient.get(`http://localhost:4000/queryCert`,this.queryForm.value).subscribe(data => {
      console.log(data);
      //this.currentCertificate.record = new Record(res);
    });

  }
/*
  recordCert() {
    
    this._httpClient.post(`http://localhost:4000/addStudent`,this.recordForm.value).subscribe(data => {
      console.log(data);
      this.recordForm.reset();
    });
  }
*/

/*

  transferCertificate() {
    //${this.transferForm.get('seatNo').value}
    this._httpClient.post(`http://localhost:3000/transferCert`, this.transferForm.value).subscribe((data: any) => {
      console.log(data);
    });
  }

  */
  

}
