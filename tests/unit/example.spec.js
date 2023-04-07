describe("Example component", () => {
  test('Debe de ser mayor a 10', () => {
    let value = 7

    value = value + 4

    expect(value).toBeGreaterThan(10)
  });
})