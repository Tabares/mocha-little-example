describe("calculator", function(){
  it('should be able to compare 3 and 3', function(){
    i = 3;
    //global leak
    chai.assert.equal(3, 3, '3 equal 3');
  });
});
mocha.setup({timeout: 3000});
describe("outer describe ", function(){
  this.timeout(3000);
  it('should be asynchronous', function(){
    setTimeout(
      function(){
        expect(1).to.equal(1);
        done();
      }, 2500);
  });
});

describe("my first suite", function(){

  mocha.setup({globals: ['i']});
  mocha.setup({ignoreLeaks: true});

  setup(function(){
    console.log('setup');
  });

  teardown(function(){
    console.log('setup');
  });

  before(function(){
    console.log('before');
  });

  after(function(){
    console.log('after');
  });

  it('test 1', function(){
    expect(1).to.equal(1);
  });

  describe('inner suite', function(){

    it.only('test 2', function(){
      expect(2).to.equal(2);
      console.log('test2');
    });

    it.skip('test 2', function(){
      //debugger;
      expect(2).to.equal(2);
      console.log('test2');
    });

    xit.skip('test 2', function(){
      expect(2).to.equal(2);
      console.log('test2');
    });
  });
});
