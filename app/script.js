document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.getElementById('connectButton');
    const walletAddressDisplay = document.getElementById('walletAddress');

    connectButton.addEventListener('click', async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                console.log('Connected accounts:', accounts);
                
                connectButton.textContent = 'Switch Wallet';
                walletAddressDisplay.textContent = `${accounts[0].substring(0, 6)}...${accounts[0].substring(accounts[0].length - 4)}`;
            } catch (error) {
                console.error('User denied account access or an error occurred:', error);
            }
        } else {
            alert('Please install MetaMask or another Ethereum wallet.');
        }
    });
});
