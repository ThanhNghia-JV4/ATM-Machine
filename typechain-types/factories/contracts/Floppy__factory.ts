/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Floppy, FloppyInterface } from "../../contracts/Floppy";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526012600a62000014919062000818565b640ba43b740062000026919062000869565b6006553480156200003657600080fd5b506040518060400160405280600681526020017f466c6f70707900000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f464c5000000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb929190620005db565b508060049080519060200190620000d4929190620005db565b505050620000f7620000eb6200017160201b60201c565b6200017960201b60201c565b620001466040518060400160405280601481526020017f6f776e65723a202573206d61786361703a202573000000000000000000000000815250336006546200023f60201b620007fc1760201c565b6200015a33600654620002e860201b60201c565b6200016b336200045660201b60201c565b62000c63565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620002e38383836040516024016200025a93929190620009c4565b6040516020818303038152906040527f0d26b925000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620004ed60201b60201c565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200035b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003529062000a58565b60405180910390fd5b6200036f600083836200051660201b60201c565b806002600082825462000383919062000a7a565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000436919062000ad7565b60405180910390a362000452600083836200051b60201b60201c565b5050565b620004666200052060201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620004d9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004d09062000b6a565b60405180910390fd5b620004ea816200017960201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b505050565b505050565b620005306200017160201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1662000556620005b160201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620005af576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005a69062000bdc565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b828054620005e99062000c2d565b90600052602060002090601f0160209004810192826200060d576000855562000659565b82601f106200062857805160ff191683800117855562000659565b8280016001018555821562000659579182015b82811115620006585782518255916020019190600101906200063b565b5b5090506200066891906200066c565b5090565b5b80821115620006875760008160009055506001016200066d565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156200071957808604811115620006f157620006f06200068b565b5b6001851615620007015780820291505b80810290506200071185620006ba565b9450620006d1565b94509492505050565b60008262000734576001905062000807565b8162000744576000905062000807565b81600181146200075d576002811462000768576200079e565b600191505062000807565b60ff8411156200077d576200077c6200068b565b5b8360020a9150848211156200079757620007966200068b565b5b5062000807565b5060208310610133831016604e8410600b8410161715620007d85782820a905083811115620007d257620007d16200068b565b5b62000807565b620007e78484846001620006c7565b925090508184048111156200080157620008006200068b565b5b81810290505b9392505050565b6000819050919050565b600062000825826200080e565b915062000832836200080e565b9250620008617fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000722565b905092915050565b600062000876826200080e565b915062000883836200080e565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620008bf57620008be6200068b565b5b828202905092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101562000906578082015181840152602081019050620008e9565b8381111562000916576000848401525b50505050565b6000601f19601f8301169050919050565b60006200093a82620008ca565b620009468185620008d5565b935062000958818560208601620008e6565b62000963816200091c565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200099b826200096e565b9050919050565b620009ad816200098e565b82525050565b620009be816200080e565b82525050565b60006060820190508181036000830152620009e081866200092d565b9050620009f16020830185620009a2565b62000a006040830184620009b3565b949350505050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000a40601f83620008d5565b915062000a4d8262000a08565b602082019050919050565b6000602082019050818103600083015262000a738162000a31565b9050919050565b600062000a87826200080e565b915062000a94836200080e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000acc5762000acb6200068b565b5b828201905092915050565b600060208201905062000aee6000830184620009b3565b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600062000b52602683620008d5565b915062000b5f8262000af4565b604082019050919050565b6000602082019050818103600083015262000b858162000b43565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600062000bc4602083620008d5565b915062000bd18262000b8c565b602082019050919050565b6000602082019050818103600083015262000bf78162000bb5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000c4657607f821691505b6020821081141562000c5d5762000c5c62000bfe565b5b50919050565b611d7c8062000c736000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a257806395d89b411161007157806395d89b41146102a6578063a457c2d7146102c4578063a9059cbb146102f4578063dd62ed3e14610324578063f2fde38b146103545761010b565b806370a0823114610232578063715018a61461026257806379cc67901461026c5780638da5cb5b146102885761010b565b8063313ce567116100de578063313ce567146101ac57806339509351146101ca57806340c10f19146101fa57806342966c68146102165761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610370565b60405161012591906112a7565b60405180910390f35b61014860048036038101906101439190611362565b610402565b60405161015591906113bd565b60405180910390f35b610166610425565b60405161017391906113e7565b60405180910390f35b61019660048036038101906101919190611402565b61042f565b6040516101a391906113bd565b60405180910390f35b6101b461045e565b6040516101c19190611471565b60405180910390f35b6101e460048036038101906101df9190611362565b610467565b6040516101f191906113bd565b60405180910390f35b610214600480360381019061020f9190611362565b61049e565b005b610230600480360381019061022b919061148c565b61050b565b005b61024c600480360381019061024791906114b9565b61051f565b60405161025991906113e7565b60405180910390f35b61026a610567565b005b61028660048036038101906102819190611362565b61057b565b005b61029061059b565b60405161029d91906114f5565b60405180910390f35b6102ae6105c5565b6040516102bb91906112a7565b60405180910390f35b6102de60048036038101906102d99190611362565b610657565b6040516102eb91906113bd565b60405180910390f35b61030e60048036038101906103099190611362565b6106ce565b60405161031b91906113bd565b60405180910390f35b61033e60048036038101906103399190611510565b6106f1565b60405161034b91906113e7565b60405180910390f35b61036e600480360381019061036991906114b9565b610778565b005b60606003805461037f9061157f565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab9061157f565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b5050505050905090565b60008061040d61089b565b905061041a8185856108a3565b600191505092915050565b6000600254905090565b60008061043a61089b565b9050610447858285610a6e565b610452858585610afa565b60019150509392505050565b60006012905090565b60008061047261089b565b905061049381858561048485896106f1565b61048e91906115e0565b6108a3565b600191505092915050565b6104a6610d72565b600654816104b2610425565b6104bc91906115e0565b11156104fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f490611682565b60405180910390fd5b6105078282610df0565b5050565b61051c61051661089b565b82610f47565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61056f610d72565b6105796000611115565b565b61058d8261058761089b565b83610a6e565b6105978282610f47565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546105d49061157f565b80601f01602080910402602001604051908101604052809291908181526020018280546106009061157f565b801561064d5780601f106106225761010080835404028352916020019161064d565b820191906000526020600020905b81548152906001019060200180831161063057829003601f168201915b5050505050905090565b60008061066261089b565b9050600061067082866106f1565b9050838110156106b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ac90611714565b60405180910390fd5b6106c282868684036108a3565b60019250505092915050565b6000806106d961089b565b90506106e6818585610afa565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610780610d72565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e7906117a6565b60405180910390fd5b6107f981611115565b50565b610896838383604051602401610814939291906117c6565b6040516020818303038152906040527f0d26b925000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506111db565b505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610913576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090a90611876565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610983576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097a90611908565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a6191906113e7565b60405180910390a3505050565b6000610a7a84846106f1565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610af45781811015610ae6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610add90611974565b60405180910390fd5b610af384848484036108a3565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6190611a06565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd190611a98565b60405180910390fd5b610be5838383611204565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6290611b2a565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d5991906113e7565b60405180910390a3610d6c848484611209565b50505050565b610d7a61089b565b73ffffffffffffffffffffffffffffffffffffffff16610d9861059b565b73ffffffffffffffffffffffffffffffffffffffff1614610dee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de590611b96565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5790611c02565b60405180910390fd5b610e6c60008383611204565b8060026000828254610e7e91906115e0565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f2f91906113e7565b60405180910390a3610f4360008383611209565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fb7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fae90611c94565b60405180910390fd5b610fc382600083611204565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611049576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104090611d26565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110fc91906113e7565b60405180910390a361111083600084611209565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561124857808201518184015260208101905061122d565b83811115611257576000848401525b50505050565b6000601f19601f8301169050919050565b60006112798261120e565b6112838185611219565b935061129381856020860161122a565b61129c8161125d565b840191505092915050565b600060208201905081810360008301526112c1818461126e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112f9826112ce565b9050919050565b611309816112ee565b811461131457600080fd5b50565b60008135905061132681611300565b92915050565b6000819050919050565b61133f8161132c565b811461134a57600080fd5b50565b60008135905061135c81611336565b92915050565b60008060408385031215611379576113786112c9565b5b600061138785828601611317565b92505060206113988582860161134d565b9150509250929050565b60008115159050919050565b6113b7816113a2565b82525050565b60006020820190506113d260008301846113ae565b92915050565b6113e18161132c565b82525050565b60006020820190506113fc60008301846113d8565b92915050565b60008060006060848603121561141b5761141a6112c9565b5b600061142986828701611317565b935050602061143a86828701611317565b925050604061144b8682870161134d565b9150509250925092565b600060ff82169050919050565b61146b81611455565b82525050565b60006020820190506114866000830184611462565b92915050565b6000602082840312156114a2576114a16112c9565b5b60006114b08482850161134d565b91505092915050565b6000602082840312156114cf576114ce6112c9565b5b60006114dd84828501611317565b91505092915050565b6114ef816112ee565b82525050565b600060208201905061150a60008301846114e6565b92915050565b60008060408385031215611527576115266112c9565b5b600061153585828601611317565b925050602061154685828601611317565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061159757607f821691505b602082108114156115ab576115aa611550565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115eb8261132c565b91506115f68361132c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561162b5761162a6115b1565b5b828201905092915050565b7f466c6f7070793a20636170206578636565646564000000000000000000000000600082015250565b600061166c601483611219565b915061167782611636565b602082019050919050565b6000602082019050818103600083015261169b8161165f565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006116fe602583611219565b9150611709826116a2565b604082019050919050565b6000602082019050818103600083015261172d816116f1565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611790602683611219565b915061179b82611734565b604082019050919050565b600060208201905081810360008301526117bf81611783565b9050919050565b600060608201905081810360008301526117e0818661126e565b90506117ef60208301856114e6565b6117fc60408301846113d8565b949350505050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611860602483611219565b915061186b82611804565b604082019050919050565b6000602082019050818103600083015261188f81611853565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006118f2602283611219565b91506118fd82611896565b604082019050919050565b60006020820190508181036000830152611921816118e5565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061195e601d83611219565b915061196982611928565b602082019050919050565b6000602082019050818103600083015261198d81611951565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006119f0602583611219565b91506119fb82611994565b604082019050919050565b60006020820190508181036000830152611a1f816119e3565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611a82602383611219565b9150611a8d82611a26565b604082019050919050565b60006020820190508181036000830152611ab181611a75565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611b14602683611219565b9150611b1f82611ab8565b604082019050919050565b60006020820190508181036000830152611b4381611b07565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611b80602083611219565b9150611b8b82611b4a565b602082019050919050565b60006020820190508181036000830152611baf81611b73565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611bec601f83611219565b9150611bf782611bb6565b602082019050919050565b60006020820190508181036000830152611c1b81611bdf565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611c7e602183611219565b9150611c8982611c22565b604082019050919050565b60006020820190508181036000830152611cad81611c71565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611d10602283611219565b9150611d1b82611cb4565b604082019050919050565b60006020820190508181036000830152611d3f81611d03565b905091905056fea2646970667358221220a1047351b9cf1603f2f779e0e2b0f3e81d742522b0aec3de3ca72b15ef29d73864736f6c63430008090033";

type FloppyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FloppyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Floppy__factory extends ContractFactory {
  constructor(...args: FloppyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Floppy> {
    return super.deploy(overrides || {}) as Promise<Floppy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Floppy {
    return super.attach(address) as Floppy;
  }
  override connect(signer: Signer): Floppy__factory {
    return super.connect(signer) as Floppy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FloppyInterface {
    return new utils.Interface(_abi) as FloppyInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Floppy {
    return new Contract(address, _abi, signerOrProvider) as Floppy;
  }
}