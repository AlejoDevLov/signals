import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
  // standalone: true,
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input()
  set color(color:string) {
    this._color = color;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined){
    this._errors = value;
    console.log(value);
    this.setMessageErrors();
  }

  constructor( private el: ElementRef<HTMLElement> ){
    this.htmlElement = el;
    // this.htmlElement.nativeElement.textContent = 'Hola mundo';
  }

  ngOnInit(): void {
    // console.log('Desde OnInit de la directiva')
  }

  setStyle(): void{
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setMessageErrors(){
    if(!this.htmlElement) return;

    if(!this._errors) {
      this.htmlElement.nativeElement.textContent = '';
      return;
    }

    const errors = Object.keys(this._errors);
    errors.forEach( error => {
      if(error == 'required'){
        this.htmlElement!.nativeElement.textContent = 'Este campo es requerido';
        return;
      }
      if(error == 'email'){
        this.htmlElement!.nativeElement.textContent = 'Debes ingresar un email';
        return;
      }
      if(error == 'minlength'){
        this.htmlElement!.nativeElement.textContent = 'La cantidad minima de caracteres es de 6';
        return;
      }
    })

  }
}
