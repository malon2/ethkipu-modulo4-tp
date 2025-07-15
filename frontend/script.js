/**
 * @notice ABI definition for the SimpleSwap contract.
 * @dev Contains all function, event, and error signatures required for contract interaction.
 */
const simpleSwapAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidity","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidity","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":false,"internalType":"address","name":"tokenIn","type":"address"},{"indexed":false,"internalType":"address","name":"tokenOut","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountOut","type":"uint256"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reserveB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAAddres","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenBAddres","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
/**
 * @notice ABI definition for the ERC20 token contract.
 * @dev Contains all function, event, and error signatures required for ERC20 token interaction.
 */
const erc20Abi = [{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"initialOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}];

/**
 * @notice Contract addresses for SimpleSwap and ERC20 tokens.
 * @dev Used for contract instantiation and interaction.
 */
const simpleSwapAddress = "0x0043b851D8a740356c355E05cCf36ec3D422Bc5c";
const tokenAAddress = "0xB5D0840Bc3C0Cd5745a278f4e06045c3e70941cc";
const tokenBAddress = "0xFB2C7F65Cc5ec3128703CD5116e96dbD32697811";

/**
 * @notice Global variables for wallet and contract interaction.
 * @dev Stores account, provider, signer, and contract instance references.
 */
let account;
let provider;
let signer;
let simpleSwap;

/**
 * @notice DOM element references for UI controls.
 * @dev Used to interact with input fields, buttons, and display elements in the frontend.
 */
const connectBtn = document.getElementById('connectBtn');
const tokenAInput = document.getElementById('tokenA');
const tokenBInput = document.getElementById('tokenB');
const swapBtn = document.getElementById('swapBtn');
const priceSpan = document.getElementById('price');
const refreshPriceBtn = document.getElementById('refreshPriceBtn');
const refreshAmountBtn = document.getElementById('refreshAmountBtn');
const receiveValue = document.getElementById('receiveValue');

/**
 * @notice Initializes and displays the wallet status label in the UI.
 * @dev Ensures the wallet status is shown and updated for the user.
 */
defineWalletStatusLabel();
const walletStatus = document.getElementById('walletStatus');
updateWalletStatus(false);

/**
 * @notice Validates token input fields to ensure non-negative values.
 * @dev Sets input value to 0 if a negative number is entered.
 */
function validateInputs() {
    if (Number(tokenAInput.value) < 0) tokenAInput.value = 0;
    if (Number(tokenBInput.value) < 0) tokenBInput.value = 0;
}
tokenAInput.addEventListener('input', validateInputs);
tokenBInput.addEventListener('input', validateInputs);

/**
 * @notice Connects the user's wallet using MetaMask.
 * @dev Initializes provider, signer, and account. Updates UI and fetches price.
 */
connectBtn.onclick = async () => {
    if (window.ethereum) {
        try {
            provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            await provider.send("eth_requestAccounts", []);
            signer = provider.getSigner();
            account = await signer.getAddress();
            connectBtn.innerText = 'Connected';
            updateWalletStatus(true);
            simpleSwap = new ethers.Contract(simpleSwapAddress, simpleSwapAbi, signer);
            fetchPrice();
        } catch (err) {
            alert('Connection rejected or failed.');
            updateWalletStatus(false);
        }
    } else {
        alert('MetaMask not detected');
        updateWalletStatus(false);
    }
};

/**
 * @notice Fetches and displays the current price from the SimpleSwap contract.
 * @dev Converts BigNumber price to human-readable format and updates the UI.
 */
async function fetchPrice() {
    if (!simpleSwap) return;
    try {
        const price = await simpleSwap.getPrice(tokenAAddress, tokenBAddress);
        // price is a BigNumber, convert to string then to float
        const priceFloat = parseFloat(ethers.utils.formatUnits(price, 18));
        priceSpan.innerText = ethers.utils.formatUnits(price, 18);
    } catch (e) {
        priceSpan.innerText = 'Error';
    }
}

/**
 * @notice Calculates and displays the amount to be received for a given input using getAmountOut.
 * @dev Uses reserves from the contract and updates the UI with the calculated value.
 */
async function updateReceiveAmount() {
    if (!simpleSwap || !tokenAInput.value || Number(tokenAInput.value) <= 0) {
        receiveValue.innerText = '-';
        return;
    }
    try {
        const amountInWei = ethers.utils.parseUnits(tokenAInput.value, 18);
        const reserveA = await simpleSwap.reserveA();
        const reserveB = await simpleSwap.reserveB();
        const amountOut = await simpleSwap.getAmountOut(amountInWei, reserveA, reserveB);
        receiveValue.innerText = ethers.utils.formatUnits(amountOut, 18);
    } catch (e) {
        receiveValue.innerText = '-';
    }
}

if (refreshAmountBtn) {
    refreshAmountBtn.onclick = updateReceiveAmount;
}

/**
 * @notice Executes a token swap from Token A to Token B using SimpleSwap.
 * @dev Handles allowance, slippage, and transaction confirmation. Updates price after swap.
 */
swapBtn.onclick = async () => {
    if (!simpleSwap || !signer) {
        alert('Connect wallet first');
        return;
    }
    const amountIn = tokenAInput.value;
    if (!amountIn || Number(amountIn) <= 0) {
        alert('Enter a valid amount for Token A');
        return;
    }
    // Convert to wei
    const amountInWei = ethers.utils.parseUnits(amountIn, 18);
    const path = [tokenAAddress, tokenBAddress];
    const to = account;
    const deadline = Math.floor(Date.now() / 1000) + 600; // 10 minutes

    try {
        const reserveA = await simpleSwap.reserveA();
        const reserveB = await simpleSwap.reserveB();
        const amountOut = await simpleSwap.getAmountOut(amountInWei, reserveA, reserveB);
        const slippage = 0.005; // 0.5%
        const amountOutMin = amountOut.sub(amountOut.mul(slippage * 1000).div(1000));

        // Check if allowance is sufficient
        const tokenA = new ethers.Contract(tokenAAddress, erc20Abi, signer);
        const allowance = await tokenA.allowance(account, simpleSwapAddress);
        if (allowance.lt(amountInWei)) {
            const txApprove = await tokenA.approve(simpleSwapAddress, amountInWei);
            await txApprove.wait();
        }

        const tx = await simpleSwap.swapExactTokensForTokens(
            amountInWei,
            amountOutMin,
            path,
            to,
            deadline
        );
        await tx.wait();
        alert('Swap completed!');
        fetchPrice();
    } catch (e) {
        alert('Swap error: ' + (e.data?.message || e.message));
    }
};

/**
 * @notice Updates the displayed price when token input values change.
 * @dev Adds event listeners to input fields and refresh button to trigger price fetch.
 */
tokenAInput.addEventListener('input', fetchPrice);
tokenBInput.addEventListener('input', fetchPrice);
if (refreshPriceBtn) {
    refreshPriceBtn.onclick = fetchPrice;
}


/**
 * @notice Helper functions for wallet status label management.
 * @dev Creates and updates the wallet status label in the UI.
 */
function defineWalletStatusLabel() {
    if (!document.getElementById('walletStatus')) {
        const label = document.createElement('span');
        label.id = 'walletStatus';
        label.style.display = 'block';
        label.style.margin = '10px 0';
        label.style.fontWeight = 'bold';
        label.style.textAlign = 'center';
        connectBtn.parentNode.insertBefore(label, connectBtn.nextSibling);
    }
}

/**
 * @notice Updates the wallet status label in the UI based on connection state.
 * @dev Changes label text and color depending on whether the wallet is connected.
 * @param {boolean} connected - True if wallet is connected, false otherwise.
 */
function updateWalletStatus(connected) {
    const label = document.getElementById('walletStatus');
    if (connected) {
        label.innerText = 'Wallet connected';
        label.style.color = '#27ae60';
    } else {
        label.innerText = 'Wallet not connected';
        label.style.color = '#c0392b';
    }
}

/**
 * @notice Mints 10 units of both HTokenA and HTokenB to the user's wallet.
 * @dev Requires wallet connection. Handles minting transactions and error reporting.
 */
const faucetBtn = document.getElementById('faucetBtn');
if (faucetBtn) {
    faucetBtn.onclick = async () => {
        if (!signer || !account) {
            alert('Connect wallet first');
            return;
        }
        const mintAmount = ethers.utils.parseUnits('10', 18);
        const tokenA = new ethers.Contract(tokenAAddress, erc20Abi, signer);
        const tokenB = new ethers.Contract(tokenBAddress, erc20Abi, signer);
        try {
            const txA = await tokenA.mint(account, mintAmount);
            await txA.wait();
            const txB = await tokenB.mint(account, mintAmount);
            await txB.wait();
            alert('Minted 10 HTokenA and 10 HTokenB to your wallet!');
        } catch (err) {
            alert('Mint failed: ' + (err?.info?.error?.message || err.message));
        }
    };
}
