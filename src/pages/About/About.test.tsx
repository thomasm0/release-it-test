import { render } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders the component', () => {
    const { container } = render(<About />);
    expect(container.firstChild).toBeDefined();
  });

  it('has the expected content', () => {
    const { container } = render(<About />);
    expect(container.textContent?.trim()).toContain('About');
  });
});
