module.exports = async promise => {
  try {
    await promise;
  } catch (error) {
    const revert = error.message.search('revert') >= 1;
    const invalidOpcode = error.message.search('invalid opcode') >= 0;
    const outOfGas = error.message.search('out of gas') >= 0;
    const checkAmount = error.message.search('The contract code couldn\'t be stored, please check your gas amount') >= 0;
    assert(
      invalidOpcode || outOfGas || revert || checkAmount,
      'Expected throw, got \'' + error + '\' instead',
    );
    return;
  }
  assert.fail('Expected throw not received');
}
// module.exports = async promise => {
//     try {
//       await promise
//       assert.fail('Expected revert not received')
//     } catch (error) {
//       const revertOrAssertFound = error.message.search('revert') >= 0 || error.message.search('assert') >= 0
//       assert(revertOrAssertFound, `Expected "revert", got ${error} instead`)
//     }
//   }

  // export default async (promise) => {
  //   try {
  //     await promise;
  //   } catch (error) {
  //     const revert = error.message.search('revert') >= 1;
  //     const invalidOpcode = error.message.search('invalid opcode') >= 0;
  //     const outOfGas = error.message.search('out of gas') >= 0;
  //     assert(
  //       invalidOpcode || outOfGas || revert,
  //       'Expected throw, got \'' + error + '\' instead',
  //     );
  //     return;
  //   }
  //   assert.fail('Expected throw not received');
  // };