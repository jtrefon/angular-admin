import { TestBed } from '@angular/core/testing';
import { ChartCardComponent } from './chart-card.component';

describe('ChartCardComponent', () => {
  it('renders series labels and metric content', async () => {
    await TestBed.configureTestingModule({
      imports: [ChartCardComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(ChartCardComponent);
    fixture.componentRef.setInput('label', 'Weekly requests');
    fixture.componentRef.setInput('total', '18.4K');
    fixture.componentRef.setInput('series', [
      { label: 'Mon', value: 42 },
      { label: 'Tue', value: 56 },
    ]);
    fixture.componentRef.setInput('metric', { value: '84%', progress: 84 });
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Weekly requests');
    expect(text).toContain('18.4K');
    expect(text).toContain('Mon');
    expect(text).toContain('Tue');
    expect(text).toContain('84%');
  });

  it('hides the legend when showLegend is false', async () => {
    await TestBed.configureTestingModule({
      imports: [ChartCardComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(ChartCardComponent);
    fixture.componentRef.setInput('label', 'Weekly requests');
    fixture.componentRef.setInput('total', '18.4K');
    fixture.componentRef.setInput('series', [{ label: 'Mon', value: 42 }]);
    fixture.componentRef.setInput('showLegend', false);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.chart-legend')).toBeNull();
  });
});
