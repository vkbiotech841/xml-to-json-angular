import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   title = 'xml-to-json-converter-angular';

   ngOnInit(): void {
      console.log("window", window);
   }




   jsonObj: any;

   selectedFile: any;

   selectExcelFile(event) {
      this.selectedFile = event.target.files[0];
      console.log("event", this.selectedFile);
   };

   rowObject: any;
   fileInJson: any;

   xmlData: any;

   excelToJsonConverter() {
      if (this.selectedFile) {
         let fileReader: FileReader = new FileReader();
         fileReader.readAsBinaryString(this.selectedFile);
         fileReader.onload = (event: Event) => {
            this.xmlData = fileReader.result;

            this.jsonObj = (window as any).parser.parse(this.xmlData, { ignoreAttributes: false, attributeNamePrefix: "" });
            console.log("xmlToJson", this.jsonObj.catalog);


         }
      }
   }

}
