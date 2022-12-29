import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'lib-ngx-duallistbox-material',
  templateUrl: './ngx-duallistbox-material.component.html',
  styleUrls: ['./ngx-duallistbox-material.component.scss'],
})
export class NgxDuallistboxMaterialComponent implements OnInit {
  checked: boolean = false;

  @Input() dualListConfigData: any;
  @Input() dualListData: any;
  @Output() dualListEmitSelData: EventEmitter<any> = new EventEmitter();

  libDualListData: any;
  libIncStartNumber: number = Math.floor(1000 + Math.random() * 9000);
  libsrchTxtLeft: string = '';
  libsrchTxtRight: string = '';
  libIsMoveAllLeftBtnDisable: boolean = false;
  libIsMoveAllRightBtnDisable: boolean = false;
  libIsMoveLeftBtnDisable: boolean = false;
  libIsMoveRightBtnDisable: boolean = false;
  libSelLeftArr: Array<any> = [];
  libSelRightArr: Array<any> = [];
  libSelLeftOpt: boolean = false;
  libSelRightOpt: boolean = false;
  libSelAllLeft: boolean = false;
  libSelAllRight: boolean = false;
  libSelListArr: Array<any> = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.libUpdateInitData();
    // console.log('dualListData', this.libDualListData);
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
    // call or add here your code
  }

  libUpdateInitData() {
    this.libDualListData = structuredClone(this.dualListData);
    this.libDualListData.map((val: any) => {
      val.libId = this.libIncStartNumber++;
      val.libShowList = true;
      val.checked = false;
      val.libSelOpt = false;
    });
    console.log('libDualListData', this.libDualListData);
  }

  libMoveAllElement(moveDirection: string) {
    this.libDualListData.map((val: any) => {
      val.selected = moveDirection === 'left' ? false : true;
      val.libSelOpt = false;
    });
    this.libSelRightArr = [];
    this.libSelLeftArr = [];
    this.libSelAllLeft = false;
    this.libSelAllRight = false;
    this.libGetSelListdata();
  }

  libSrchDualList(e: any, srchListPos: string) {
    const srchTxtVal = e ? e.target.value : '';
    let selCondition: boolean;

    if (srchListPos === 'left') {
      selCondition = false;
      this.libSelLeftOpt = false;
      this.libSelLeftArr = [];
      this.libSelAllLeft = false;
    } else {
      selCondition = true;
      this.libSelRightOpt = false;
      this.libSelRightArr = [];
      this.libSelAllRight = false;
    }
    this.libDualListData.map((val: any) => {
      if (srchListPos === 'left') {
        val.libSelOpt = false;
      }
      if (srchListPos === 'right') {
        val.libSelOpt = false;
      }
      if (
        srchTxtVal &&
        val.label.toLowerCase().includes(srchTxtVal.toLowerCase()) &&
        val.selected === selCondition
      ) {
        val.libShowList = true;
      } else if (
        srchTxtVal &&
        !val.label.toLowerCase().includes(srchTxtVal.toLowerCase()) &&
        val.selected === selCondition
      ) {
        val.libShowList = false;
      }
    });
    this.libCheckAllBtnStatus();
  }

  libCheckAllBtnStatus() {
    this.libIsMoveAllRightBtnDisable = true;
    for (let i = 0; i < this.libDualListData.length; i++) {
      if (
        !this.libDualListData[i]['selected'] &&
        this.libDualListData[i]['libShowList']
      ) {
        this.libIsMoveAllRightBtnDisable = false;
        break;
      }
    }

    this.libIsMoveAllLeftBtnDisable = true;
    for (let i = 0; i < this.libDualListData.length; i++) {
      if (
        this.libDualListData[i]['selected'] &&
        this.libDualListData[i]['libShowList']
      ) {
        this.libIsMoveAllLeftBtnDisable = false;
        break;
      }
    }

    if (this.libSelAllLeft || this.libSelAllRight) {
      this.libIsMoveAllRightBtnDisable = true;
      this.libIsMoveAllLeftBtnDisable = true;
    } else {
      this.libIsMoveAllRightBtnDisable = false;
      this.libIsMoveAllLeftBtnDisable = false;
    }
    return '';
  }

  libSelListData(libId: any, listPos: string) {
    let oprName: string;
    if (listPos === 'left') {
      const dataIndex = this.libSelLeftArr.indexOf(libId);

      if (dataIndex > -1) {
        oprName = 'remove';
        this.libSelLeftArr.splice(dataIndex, 1);
      } else {
        oprName = 'add';
        this.libSelLeftArr.push(libId);
      }

      //   console.log(this.libDualListData);
      console.log(this.libSelLeftArr);
    }

    if (listPos === 'right') {
      const dataIndex = this.libSelRightArr.indexOf(libId);
      if (dataIndex > -1) {
        oprName = 'remove';
        this.libSelRightArr.splice(dataIndex, 1);
      } else {
        oprName = 'add';
        this.libSelRightArr.push(libId);
      }
      console.log(this.libSelRightArr);
    }
    let libSelCheckLeftCount = 0;
    let libSelCheckRightCount = 0;
    this.libDualListData.map((val: any) => {
      if (val.libId === libId) {
        val.libSelOpt = oprName === 'add' ? true : false;
      }
      if (!val.selected) {
        libSelCheckLeftCount = libSelCheckLeftCount + 1;
      } else {
        libSelCheckRightCount = libSelCheckRightCount + 1;
      }
    });

    this.libSelAllLeft =
      this.libSelLeftArr.length === libSelCheckLeftCount ? true : false;
    this.libSelAllRight =
      this.libSelRightArr.length === libSelCheckRightCount ? true : false;
  }

  libSelectAll(listPos: string) {
    if (listPos === 'left') {
      this.libSelLeftArr = [];
      this.libSelLeftOpt = this.libSelAllLeft;
      this.libDualListData.map((val: any) => {
        if (!val.selected) {
          val.libSelOpt = this.libSelAllLeft;
          this.libSelLeftArr.push(val.libId);
        }
      });
      if (!this.libSelAllLeft) {
        this.libSelLeftArr = [];
      }
    }
    if (listPos === 'right') {
      this.libSelRightArr = [];
      this.libSelRightOpt = this.libSelAllRight;
      this.libDualListData.map((val: any) => {
        if (val.selected) {
          val.libSelOpt = this.libSelAllRight;
          this.libSelRightArr.push(val.libId);
        }
      });
      if (!this.libSelAllRight) {
        this.libSelRightArr = [];
      }
    }
  }

  libMoveSelElement(listPos: string) {
    this.libDualListData.map((val: any) => {
      if (listPos === 'right' && this.libSelLeftArr.includes(val.libId)) {
        val.selected = true;
      }
      if (listPos === 'left' && this.libSelRightArr.includes(val.libId)) {
        val.selected = false;
      }
      val.libSelOpt = false;
    });
    this.libSelRightArr = [];
    this.libSelLeftArr = [];
    this.libSelAllLeft = false;
    this.libSelAllRight = false;
    this.libSrchDualList('', listPos);
    this.libGetSelListdata();
  }

  libGetSelListdata() {
    this.libSelListArr = [];
    this.libDualListData.map((val: any) => {
      if (val.selected) {
        this.libSelListArr.push({
          label: val.label,
          value: val.value,
        });
      }
    });
    this.dualListEmitSelData.emit(this.libSelListArr);
    console.log('libSelListArr', this.libSelListArr);
  }
}
