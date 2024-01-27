import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type:string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  
  constructor() {
    console.log('Constructor Called!');
  }
  ngOnInit () {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Context Paragraph: ' + this.paragraph.nativeElement.textContent);

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges called!');
    console.log(changes);
  }

  ngDoCheck(): void {
      console.log('ngDoCheck Called');
  }
  ngAfterContentChecked(): void {
    console.log('ngcontent after check');

}
  ngAfterContentInit(): void {
      console.log('ngcontent after init');
  }

  ngAfterViewChecked(): void {
    console.log('ngview after check');

}
  ngAfterViewInit(): void {
      console.log('ngview after init');
      console.log('Text Content: ' + this.header.nativeElement.textContent);
      console.log('Context Paragraph: ' + this.paragraph.nativeElement.textContent);

  }
  ngOnDestroy(): void {
      console.log('ngondestroy called');
  }
}
