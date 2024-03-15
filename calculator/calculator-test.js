
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 50000,
    years: 10,
    rate: 6.9
  }

  expect(calculateMonthlyPayment(values)).toEqual('577.97');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = { 
    amount: 10053,
    years: 6,
    rate: 6.6
  }

  expect(calculateMonthlyPayment(values)).toEqual('169.47');
});

/// etc
