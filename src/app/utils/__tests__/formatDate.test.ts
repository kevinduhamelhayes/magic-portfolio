import { formatDate } from '../formatDate';

describe('formatDate', () => {
  // Mock the current date to ensure consistent test results
  const originalDate = global.Date;
  const mockDate = new Date('2025-03-10T12:00:00');
  
  beforeAll(() => {
    global.Date = class extends Date {
      constructor(date) {
        if (date) {
          return new originalDate(date);
        }
        return mockDate;
      }
    } as any;
  });

  afterAll(() => {
    global.Date = originalDate;
  });

  it('handles undefined date gracefully', () => {
    const result = formatDate(undefined);
    expect(result).toBe('No date');
  });

  it('formats date without time component', () => {
    const result = formatDate('2025-03-01');
    expect(result).toBe('March 1, 2025');
  });

  it('formats date with time component', () => {
    const result = formatDate('2025-03-01T10:30:00');
    expect(result).toBe('March 1, 2025');
  });

  it('includes relative time when requested', () => {
    const result = formatDate('2025-03-01', true);
    expect(result).toContain('March 1, 2025');
    expect(result).toContain('9d ago');
  });

  it('shows "Today" for current date', () => {
    const result = formatDate('2025-03-10', true);
    expect(result).toContain('Today');
  });

  it('shows months for older dates', () => {
    const result = formatDate('2025-02-01', true);
    expect(result).toContain('1mo ago');
  });

  it('shows years for much older dates', () => {
    const result = formatDate('2024-03-01', true);
    expect(result).toContain('1y ago');
  });
}); 