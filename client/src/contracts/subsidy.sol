// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.9;

contract subsidy {
    Transaction[] Transactions;

    mapping(address => Customer) public customers;
    mapping(address => Shopkepper) public shopkeppers;

    address public owner;

    enum CATEGORY {
        BPL,
        APL,
        REFUGEE
    }

    //add public
    constructor() {
        owner = msg.sender;
    }

    struct product {
        string itemName;
        uint256 amount;
    }

    struct Transaction {
        Shopkepper seller;
        Customer buyer;
        product[] items;
        uint256 total;
        uint256 discount;
        uint256 time;
    }

    struct Customer {
        address add;
        string name;
        // uint256 monthly_limit;
        uint256 start_date;
        CATEGORY cat;
    }

    struct Shopkepper {
        address add;
        string name;
        // uint256 monthly_limit;
        uint256 start_date;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        // Underscore is a special character only used inside
        // a function modifier and it tells Solidity to
        // execute the rest of the code.
        _;
    }

    function addShopkeeper(address address_, string memory name_)
        public
        onlyOwner
    {
        uint256 start_date = block.timestamp;
        Shopkepper memory shopkepper = Shopkepper(address_, name_, start_date);
        shopkeppers[address_] = shopkepper;
    }

    function addCustomer(
        address address_,
        string memory name_,
        uint256 cat
    ) public onlyOwner {
        uint256 start_date = block.timestamp;
        CATEGORY cat_;
        if (cat == 0) {
            cat_ = CATEGORY.BPL;
        } else if (cat == 1) {
            cat_ = CATEGORY.APL;
        } else {
            cat_ = CATEGORY.REFUGEE;
        }

        Customer memory customer = Customer(address_, name_, start_date, cat_);
        customers[address_] = customer;
    }

    function showShopkeeper(address address_)
        public
        view
        returns (string memory)
    {
        return shopkeppers[address_].name;
    }

    function showCustomer(address address_)
        public
        view
        returns (string memory)
    {
        return customers[address_].name;
    }

    function showCcatergory(address address_) public view returns (CATEGORY) {
        return customers[address_].cat;
    }

    function addFunds() external payable onlyOwner {}

    function showBalance() public view onlyOwner returns (uint256) {
        return address(this).balance;
    }

    function payment(address payable shop_add) external payable {
        (bool sent, bytes memory data) = shop_add.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}
