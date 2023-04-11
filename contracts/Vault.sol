pragma solidity >=0.7.0 <0.9.0;

import "openzeppelin-solidity/contracts/token/ERC20/utils/SafeERC20.sol"; //gui nhan token, tra ve boolean
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-solidity/contracts/access/Ownable.sol";
import "openzeppelin-solidity/contracts/access/AccessControlEnumerable.sol"; //Game FI, Nap token bat su kien roi cong balence cho user va ko cho user tuong tac truc tiep vs funcition rut tranh bi Hacker hack cho day. ko phai ai cung goi dc funcition RUT


contract Vault is Ownable, AccessControlEnumerable {

    IERC20 private token; //token va setToken, xet VAULT no se nhan nap vao va rut ra cai token nao.
    uint256 public maxWithdrawAmount; //so luong toi da user co the rut ra trong 1 lan
    bool public withdrawEnabled; //co the bat tat chuc nang RUT
    bytes32 public constant WITHDRAWER_ROLE = keccak256("WITHDRAWER_ROLE"); // bam WITHDRAWER_ROLE

    

}
 

