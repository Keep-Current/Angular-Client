import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedDocumentsComponent } from './saved-documents.component';

describe('SavedDocumentsComponent', () => {
  let component: SavedDocumentsComponent;
  let fixture: ComponentFixture<SavedDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
