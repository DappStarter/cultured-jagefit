require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember equip guess clinic olympic trophy'; 
let testAccounts = [
"0x55af6661392e190d19578831ae88ff247c7f104c1a148d833e0ee1ed91058b05",
"0x7f5672b756f1627caac5fcd289d4360eb62940bde1ad129c6cfabb56f10f5f60",
"0xbffd0b2cddd4f5872cac0a496bcdca46b546ed9ea7fdb25932c5f5bda1bc5b4c",
"0xdddd9937e25cd41dc90ba03c8b8930415fd6c8b1132737049195acf976c48009",
"0xb0b5f64d1d73ee0cad844949048acbb6d510f59119ebcb7329696ee0d5ea675a",
"0x9fe5c6f05aa58903367a290e47275f3f8ad7500934b14f44510dc0fea6248c76",
"0x8c6227a22d093ff2ad251707638af22a0c21d478853de49f2edaf56880af0f7e",
"0xf9e822b6c3691eaeca074d07ac8b3ca44c144b5aa3370e3f56d146f5d1101561",
"0x1e9566f2f9cb184fb2af816c7a4e744b45f6bea3c65e84ce2fd9118f42a80954",
"0xbc0a8d05aa746e4d11d8f0c8e80fa5ccf56b0200329726e38cbdd9661d371c5a"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
