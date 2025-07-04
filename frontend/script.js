// Frontend JS to connect metamask wallet
let account;
document.getElementById('connectBtn').onclick = async () => {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        account = accounts[0];
        document.getElementById('connectBtn').innerText = 'Connected';
    } else {
        alert('MetaMask not detected');
    }
};
