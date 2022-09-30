pragma solidity 0.6.12;

contract LendingPool {
  address public addressesProvider;
  uint256 public constant LENDINGPOOL_REVISION = 0x1;

  function getRevision() internal pure returns (uint256) {
    return LENDINGPOOL_REVISION;
  }

  function initialize(address provider) public {
    addressesProvider = provider;
  }
}
