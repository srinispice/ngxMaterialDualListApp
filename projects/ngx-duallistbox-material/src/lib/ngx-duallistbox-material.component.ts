import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-duallistbox-material',
  templateUrl: './ngx-duallistbox-material.component.html',
  styleUrls: ['./ngx-duallistbox-material.component.scss'],
})
export class NgxDuallistboxMaterialComponent implements OnInit {
  checked: boolean = false;

  @Input() dualListData: any;

  libDualListData: any;
  libIncStartNumber: number = Math.floor(1000 + Math.random() * 9000);

  ngOnInit() {
    this.libUpdateInitData();
    // console.log('dualListData', this.libDualListData);
  }

  libUpdateInitData() {
    this.libDualListData = structuredClone(this.dualListData);
    this.libDualListData.map((val: any) => {
      val.libId = this.libIncStartNumber++;
      val.checked = false;
    });
    console.log('libDualListData', this.libDualListData);
  }

  libMoveAllElement(moveDirection: string) {
    this.libDualListData.map((val: any) => {
      val.selected = moveDirection === 'left' ? false : true;
    });
  }
}
