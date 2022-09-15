import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[upb]',
})
export class UpbDirective implements OnInit {
  @Input() upb!: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    //Eliminan o adicionan html
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['upb'] && changes['upb'].currentValue) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
