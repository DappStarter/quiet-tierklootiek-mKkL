require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'imitate prize flock tribe struggle cruise noise estate hockey kiwi tackle spirit'; 
let testAccounts = [
"0x24e164103d41932c9679277715669c8b4dc009cbda218464c64c2b6c91f4b4f0",
"0xbc97beda9ce6a8af777e902a4607e5123e47383d54817904a5ffb45183b26fb5",
"0x4c79133e68e10c4f944e5185ef2b4947cfb118c404927c7c6931212b4962ab8b",
"0xf9a0d7394fe5d55c8aa3128897cc596183e24ca34fdf9d3a4f62aacc17ff4b42",
"0x0a4dc6b1c1251e482b41901e1619c025225e662ef98b79d9a9b6e3f803b5a0b4",
"0x0b2f24c36e11b3114681459e38325de513b0fb7c96c9763a8eb9af8512171a5d",
"0x625ff8a1a18e3b6e92940acd6dec23818571384c216425987f17946bf27865f8",
"0xe084c120259458ea09403a740bc48f3453683ef16b21083ad503d973c7fea77a",
"0xe1fd5f659d111e331d7355fdf234324dcad0b4a47b28edb1183fd3b8924e1e94",
"0xc0657d2ec6bde3240da53679d63abe72f46c15474d6f505dbb2497cdd8d055e8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


