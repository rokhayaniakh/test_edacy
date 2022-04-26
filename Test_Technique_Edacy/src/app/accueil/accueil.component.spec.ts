import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { delay } from 'rxjs';
import { PostService } from '../services/post.service';
import * as Rx from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccueilComponent } from './accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        PostService,
      ],
      declarations: [ AccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create the app', () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('call ngOnInit', () => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const component = fixture.debugElement.componentInstance;
    let spy_getPost = spyOn(component,"getPost").and.returnValue([]);
    component.ngOnInit();
    expect(component.listpost).toEqual([]);
  })

  it('should call getPost and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(AccueilComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(PostService);
    let spy_getPost = spyOn(service,"getPost").and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.getPost();
    tick(100);
    expect(component.listpost).toEqual([]);
  }))


});
