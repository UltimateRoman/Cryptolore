pragma solidity >=0.5.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Cryptolore is ERC721 {
  constructor() ERC721("Cryptolore", "CPL") {}

  uint public worksId;

  mapping(uint=>Work) public works;

  struct Work {
    uint id;
    uint256 price;
    string title;
    string content;
    address payable writer;
    address owner;
    bool isSold;
  }

  function addWork(uint256 _price, string memory _title, string memory _content) public {
    require(_price>0);
    worksId++;
    works[worksId] = Work(worksId, _price, _title, _content, msg.sender, msg.sender, false);
  }

  function buyWork(uint _wId) public payable {
    Work memory work = works[_wId];
    work.writer.transfer(msg.value);
    _safeMint(msg.sender, _wId);
    _setTokenURI(_wId, work.content);
    work.owner = msg.sender;
    work.isSold = true;
    works[_wId] = work;
  }
}