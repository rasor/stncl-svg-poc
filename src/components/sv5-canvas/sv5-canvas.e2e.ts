import { newE2EPage } from '@stencil/core/testing';

describe('sv5-canvas', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<sv5-canvas></sv5-canvas>');
    const element = await page.find('sv5-canvas');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<sv5-canvas></sv5-canvas>');
    const component = await page.find('sv5-canvas');
    const element = await page.find('sv5-canvas >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
