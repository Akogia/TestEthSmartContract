const Users = artifacts.require("Users");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Users", function (/* accounts */) {
  it("should assert true", async function () {
    await Users.deployed();
    return assert.isTrue(true);
  });
});
