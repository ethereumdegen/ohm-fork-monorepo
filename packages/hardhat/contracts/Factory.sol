
pragma solidity ^0.8.0;

import './CloneFactory.sol';



contract Factory is CloneFactory {
     Child[] public children;
     address masterContract;

     constructor(address _masterContract){
         masterContract = _masterContract;
     }

     function createChild(string memory name_, string memory symbol_) external{
        Child child = Child(createClone(masterContract));
        child.init(name_,symbol_);
        children.push(child);
     }

     function getChildren() external view returns(Child[] memory){
         return children;
     }
}

contract Child{
    uint public data;
    
    // use this function instead of the constructor
    // since creation will be done using createClone() function
    function init(string memory name_, string memory symbol_) public {
         
    }
}