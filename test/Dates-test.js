
QUnit.module('Dates', function() {

  QUnit.module('equals', function() {

    QUnit.test('when other is undefined return false', function( assert ) {
      assert.notOk(new Date().equals(undefined), 'Passed!');
    });

    QUnit.test('when other has same identity return true', function( assert ) {
      var actual = new Date();
      var expected = actual;
      assert.ok(actual.equals(expected), 'Passed!');
    });

    QUnit.test('when other has not the same identity return false', function( assert ) {
      var actual = new Date();
      var expected = new Date();
      assert.notOk(actual.equals(expected), 'Passed!');
    });
  });

});

