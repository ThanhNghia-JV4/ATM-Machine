pragma solidity >=0.7.0 <0.9.0;

import "openzeppelin-solidity/contracts/token/ERC20/utils/SafeERC20.sol"; //gui nhan token, tra ve boolean
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-solidity/contracts/access/Ownable.sol";
import "openzeppelin-solidity/contracts/access/AccessControlEnumerable.sol"; //Game FI, Nap token bat su kien roi cong balence cho user va ko cho user tuong tac truc tiep vs funcition rut tranh bi Hacker hack cho day. ko phai ai cung goi dc funcition RUT


contract Vault is Ownable, AccessControlEnumerable {

    IERC20 private token; //token va setToken, xet VAULT no se nhan nap vao va rut ra cai token nao.
    uint256 public maxWithdrawAmount; //so luong toi da user co the rut ra trong 1 lan
    bool public withdrawEnable; //co the bat tat chuc nang RUT
    bytes32 public constant WITHDRAWER_ROLE = keccak256("WITHDRAWER_ROLE"); // bam WITHDRAWER_ROLE

    function setWithdrawEnable(bool _isEnable) public onlyOwner{ //
        withdrawEnable = _isEnable; //Ko cho nguoi dung rut tien thi set _isEnable = false
    }

    function setMaxWithdrawAmount(uint _maxAmount) public onlyOwner{
        maxWithdrawAmount = _maxAmount;
    }

    function setToken(IERC20 _token) public onlyOwner{
        token = _token;
    }

    constructor(){
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function withdraw(
        uint256 _amount, //nguoid dung rut bao nhieu
        address _to // rut ve vi nao ?
    ) external onlyWithdrawer {
        require(withdrawEnable,"Withdraw is not available"); //kiem tra coi cos dc rut tien chua. cho rut moi dc rut
        require(_amount<=maxWithdrawAmount,"Exceed maximum amount"); // kiem tra so tien rut ko lon hon so tien dang co
        token.transfer(_to, _amount);
    }

    function deposit(uint256 _amount) external { //gui tien
        require(
            token.balanceOf(msg.sender) >= _amount,
            "Insufficient account balance"
        );
        SafeERC20.safeTransferFrom(token, msg.sender, address(this), _amount); //chuyen tien tu vi cua user vao cais smartcontract
    }

    modifier onlyWithdrawer() {
        require(owner() == _msgSender()||hasRole(WITHDRAWER_ROLE,_msgSender()), "Caller is not a withdrawer"); //chi co 2 nguoi dc rut tien, 1 chu, 2 nguoi dc chi phep
        _;
    }

}
 

