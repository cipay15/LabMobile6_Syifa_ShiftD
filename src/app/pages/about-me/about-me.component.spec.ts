import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AboutMeComponent } from './about-me.component';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeComponent ],
      imports: [IonicModule.forRoot()],
      // providers: [/* any services the component needs */] // Uncomment if necessary
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // This triggers Angular's change detection
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
