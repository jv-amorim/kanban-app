import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class TestUtils {

  public static findElementByTestId<T>(fixture: ComponentFixture<T>, testId: string): DebugElement {
    return fixture.debugElement.query(By.css(`[data-testid="${testId}"]`));
  }

  public static triggerElementClick<T>(fixture: ComponentFixture<T>, elementTestId: string): void {
    const element = TestUtils.findElementByTestId(fixture, elementTestId);
    const event = TestUtils.makeClickEvent(element.nativeElement);
    element.triggerEventHandler('click', event);
  }

  public static triggerDocumentKeyUp<T>(key: string): void {
    const event = new KeyboardEvent('keyup', { key });
    document.dispatchEvent(event);
  }

  public static expectElementToBeTruthy<T>(fixture: ComponentFixture<T>, elementTestId: string): void {
    const element = TestUtils.findElementByTestId(fixture, elementTestId);
    expect(element).toBeTruthy();
  }

  public static expectElementToBeFalsy<T>(fixture: ComponentFixture<T>, elementTestId: string): void {
    const element = TestUtils.findElementByTestId(fixture, elementTestId);
    expect(element).toBeFalsy();
  }

  public static makeClickEvent(target: EventTarget): Partial<MouseEvent> {
    return {
      preventDefault(): void { },
      stopPropagation(): void { },
      stopImmediatePropagation(): void { },
      type: 'click',
      target,
      currentTarget: target,
      bubbles: true,
      cancelable: true,
      button: 0
    };
  }

}
