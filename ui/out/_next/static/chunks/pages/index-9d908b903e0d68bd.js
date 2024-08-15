(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[405],{

/***/ 9208:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(1259);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 1259:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/o1js/dist/web/index.js
var web = __webpack_require__(9466);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/ethers/lib.esm/providers/provider-browser.js + 37 modules
var provider_browser = __webpack_require__(7408);
// EXTERNAL MODULE: ./node_modules/ethers/lib.esm/contract/contract.js + 2 modules
var contract_contract = __webpack_require__(7583);
// EXTERNAL MODULE: ./node_modules/ethers/lib.esm/utils/units.js + 1 modules
var units = __webpack_require__(8470);
// EXTERNAL MODULE: ./src/styles/Home.module.css
var Home_module = __webpack_require__(2003);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./src/components/GradientBG.js
// @ts-nocheck



function GradientBG(param) {
    let { children } = param;
    const canvasRef = (0,react.useRef)(null);
    const [context, setContext] = (0,react.useState)(null);
    const [pixels, setPixels] = (0,react.useState)([]);
    function Color(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
        this.dir = Math.random() > 0.5 ? -1 : 1;
        this.toString = function() {
            return "hsla(" + this.h + ", " + this.s + "%, " + this.l + "%, " + this.a + ")";
        };
    }
    function Pixel(x, y, w, h, color) {
        this.x = {
            c: x,
            min: 0,
            max: canvasRef.current.width,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.y = {
            c: y,
            min: 0,
            max: canvasRef.current.height,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.w = {
            c: w,
            min: 2,
            max: canvasRef.current.width,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.h = {
            c: h,
            min: 2,
            max: canvasRef.current.height,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.color = color;
        this.direction = Math.random() > 0.1 ? -1 : 1;
        this.velocity = (Math.random() * 100 + 100) * 0.01 * this.direction;
    }
    function updatePixel(pixel) {
        if (pixel.x.c <= pixel.x.min || pixel.x.c >= pixel.x.max) {
            pixel.x.dir *= -1;
        }
        if (pixel.y.c <= pixel.y.min || pixel.y.c >= pixel.y.max) {
            pixel.y.dir *= -1;
        }
        if (pixel.w.c <= pixel.w.min || pixel.w.c >= pixel.w.max) {
            pixel.w.dir *= -1;
        }
        if (pixel.h.c <= pixel.h.min || pixel.h.c >= pixel.h.max) {
            pixel.h.dir *= -1;
        }
        if (pixel.color.a <= 0 || pixel.color.a >= 0.75) {
            pixel.color.dir *= -1;
        }
        pixel.x.c += 0.005 * pixel.x.dir;
        pixel.y.c += 0.005 * pixel.y.dir;
        pixel.w.c += 0.005 * pixel.w.dir;
        pixel.h.c += 0.005 * pixel.h.dir;
    }
    function renderPixel(pixel) {
        context.restore();
        context.fillStyle = pixel.color.toString();
        context.fillRect(pixel.x.c, pixel.y.c, pixel.w.c, pixel.h.c);
    }
    function paint() {
        if (canvasRef.current) {
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            for(let i = 0; i < pixels.length; i++){
                updatePixel(pixels[i]);
                renderPixel(pixels[i]);
            }
        }
    }
    (0,react.useEffect)(()=>{
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            setContext(ctx);
            const currentPixels = [
                new Pixel(1, 1, 3, 4, new Color(252, 70, 67, 0.8)),
                new Pixel(0, 0, 1, 1, new Color(0, 0, 98, 1)),
                new Pixel(0, 3, 2, 2, new Color(11, 100, 62, 0.8)),
                new Pixel(4, 0, 4, 3, new Color(190, 94, 75, 0.8)),
                new Pixel(3, 1, 1, 2, new Color(324, 98, 50, 0.1))
            ];
            setPixels(currentPixels);
        }
    }, []);
    (0,react.useEffect)(()=>{
        let animationFrameId;
        if (context) {
            const animate = ()=>{
                paint();
                animationFrameId = window.requestAnimationFrame(animate);
            };
            animate();
        }
        return ()=>{
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [
        paint,
        pixels,
        context
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: Home_module.background,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("canvas", {
                    className: Home_module.backgroundGradients,
                    width: "6",
                    height: "6",
                    ref: canvasRef
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: Home_module.container,
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/pages/reactCOIServiceWorker.tsx
var reactCOIServiceWorker = __webpack_require__(3612);
;// CONCATENATED MODULE: ./src/pages/zkappWorkerClient.ts

class ZkappWorkerClient {
    // ---------------------------------------------------------------------------------------
    setActiveInstanceToDevnet() {
        return this._call("setActiveInstanceToDevnet", {});
    }
    loadContract() {
        return this._call("loadContract", {});
    }
    compileContract() {
        return this._call("compileContract", {});
    }
    fetchAccount(param) {
        let { publicKey } = param;
        const result = this._call("fetchAccount", {
            publicKey58: publicKey.toBase58()
        });
        return result;
    }
    initZkappInstance(publicKey) {
        return this._call("initZkappInstance", {
            publicKey58: publicKey.toBase58()
        });
    }
    async getCounter() {
        const result = await this._call("getCounter", {});
        return web/* Field */.gN.fromJSON(JSON.parse(result));
    }
    async getAnswer() {
        const result = await this._call("getAnswer", {});
        return web/* Field */.gN.fromJSON(JSON.parse(result));
    }
    createSetAnswerTransaction(answer) {
        return this._call("createSetAnswerTransaction", {
            answer
        });
    }
    createGuessTransaction(guess) {
        return this._call("createGuessTransaction", {
            guess
        });
    }
    proveTransaction() {
        return this._call("proveTransaction", {});
    }
    async getTransactionJSON() {
        const result = await this._call("getTransactionJSON", {});
        return result;
    }
    _call(fn, args) {
        return new Promise((resolve, reject)=>{
            this.promises[this.nextId] = {
                resolve,
                reject
            };
            const message = {
                id: this.nextId,
                fn,
                args
            };
            this.worker.postMessage(message);
            this.nextId++;
        });
    }
    constructor(){
        this.worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(333), __webpack_require__.b)));
        this.promises = {};
        this.nextId = 0;
        this.worker.onmessage = (event)=>{
            this.promises[event.data.id].resolve(event.data.data);
            delete this.promises[event.data.id];
        };
    }
}


;// CONCATENATED MODULE: ./src/pages/abi.json
var abi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ECDSAInvalidSignature","type":"error"},{"inputs":[{"internalType":"uint256","name":"length","type":"uint256"}],"name":"ECDSAInvalidSignatureLength","type":"error"},{"inputs":[{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"ECDSAInvalidSignatureS","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"ERC2612ExpiredSignature","type":"error"},{"inputs":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC2612InvalidSigner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"currentNonce","type":"uint256"}],"name":"InvalidAccountNonce","type":"error"},{"inputs":[],"name":"InvalidShortString","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"StringTooLong","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"guessFailed","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"minaPassed","type":"bool"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approveIf","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/pages/index.page.tsx








 // Assume you've created this ABI file
let transactionFee = 0.1;
const ZKAPP_ADDRESS = "B62qpY2EeyAkZ2bWrJ2Ry8yP6k4rcteYeH2KHpZGouVDFro7aGWSLrX";
const SEX_TOKEN_ADDRESS = "0x0D775E267D8214B7B2b4eB8eaC8b1f1cC186B051"; // Replace with your deployed ERC20 contract address
function Home() {
    const [state, setState] = (0,react.useState)({
        zkappWorkerClient: null,
        hasWallet: null,
        hasBeenSetup: false,
        accountExists: false,
        currentCounter: null,
        currentAnswer: null,
        publicKey: null,
        zkappPublicKey: null,
        creatingTransaction: false
    });
    const [displayText, setDisplayText] = (0,react.useState)("");
    const [transactionlink, setTransactionLink] = (0,react.useState)("");
    const [guess, setGuess] = (0,react.useState)("");
    const [answer, setAnswer] = (0,react.useState)("");
    const [ethAddress, setEthAddress] = (0,react.useState)("");
    const [isVerified, setIsVerified] = (0,react.useState)(false);
    const [tokenAmount, setTokenAmount] = (0,react.useState)("");
    // -------------------------------------------------------
    // Ethereum setup
    const connectWallet = async ()=>{
        if (typeof window.ethereum !== "undefined") {
            try {
                // Request account access
                await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                const provider = new provider_browser/* BrowserProvider */.Q(window.ethereum);
                const signer = await provider.getSigner();
                const address = await signer.getAddress();
                setEthAddress(address);
                // Switch to Arbitrum Sepolia
                try {
                    await window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [
                            {
                                chainId: "0x66eee"
                            }
                        ]
                    });
                } catch (switchError) {
                    // This error code indicates that the chain has not been added to MetaMask
                    if (switchError.code === 4902) {
                        try {
                            await window.ethereum.request({
                                method: "wallet_addEthereumChain",
                                params: [
                                    {
                                        chainId: "0x66eee",
                                        chainName: "Arbitrum Sepolia",
                                        nativeCurrency: {
                                            name: "Ethereum",
                                            symbol: "ETH",
                                            decimals: 18
                                        },
                                        rpcUrls: [
                                            "https://sepolia-rollup.arbitrum.io/rpc"
                                        ],
                                        blockExplorerUrls: [
                                            "https://sepolia.arbiscan.io/"
                                        ]
                                    }
                                ]
                            });
                        } catch (addError) {
                            console.error("Failed to add the Arbitrum Sepolia network", addError);
                        }
                    } else {
                        console.error("Failed to switch to the Arbitrum Sepolia network", switchError);
                    }
                }
            } catch (error) {
                console.error("Failed to connect wallet", error);
            }
        } else {
            console.log("Please install MetaMask!");
        }
    };
    const mintTokens = async ()=>{
        if (typeof window.ethereum !== "undefined" && isVerified) {
            const provider = new provider_browser/* BrowserProvider */.Q(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new contract_contract/* Contract */.CH(SEX_TOKEN_ADDRESS, abi_namespaceObject, signer);
            try {
                const tx = await contract.mint(ethAddress, units/* parseEther */.fi(tokenAmount));
                await tx.wait();
                console.log("Tokens minted successfully");
            } catch (error) {
                console.error("Error minting tokens", error);
            }
        }
    };
    // -------------------------------------------------------
    // Mina Setup
    (0,react.useEffect)(()=>{
        (async ()=>{
            if (!state.hasBeenSetup) {
                setDisplayText("Loading web worker...");
                const zkappWorkerClient = new ZkappWorkerClient();
                await new Promise((resolve)=>setTimeout(resolve, 5000));
                setDisplayText("Done loading web worker");
                await zkappWorkerClient.setActiveInstanceToDevnet();
                const mina = window.mina;
                if (mina == null) {
                    setState({
                        ...state,
                        hasWallet: false
                    });
                    return;
                }
                const publicKeyBase58 = (await mina.requestAccounts())[0];
                const publicKey = web/* PublicKey */.nh.fromBase58(publicKeyBase58);
                setDisplayText("Using key:".concat(publicKey.toBase58()));
                setDisplayText("Checking if fee payer account exists...");
                const res = await zkappWorkerClient.fetchAccount({
                    publicKey: publicKey
                });
                const accountExists = res.error == null;
                await zkappWorkerClient.loadContract();
                setDisplayText("Compiling zkApp...");
                await zkappWorkerClient.compileContract();
                setDisplayText("zkApp compiled...");
                const zkappPublicKey = web/* PublicKey */.nh.fromBase58(ZKAPP_ADDRESS);
                await zkappWorkerClient.initZkappInstance(zkappPublicKey);
                setDisplayText("Getting zkApp state...");
                await zkappWorkerClient.fetchAccount({
                    publicKey: zkappPublicKey
                });
                const currentCounter = await zkappWorkerClient.getCounter();
                const currentAnswer = await zkappWorkerClient.getAnswer();
                setDisplayText("");
                setState({
                    ...state,
                    zkappWorkerClient,
                    hasWallet: true,
                    hasBeenSetup: true,
                    publicKey,
                    zkappPublicKey,
                    accountExists,
                    currentCounter,
                    currentAnswer
                });
            }
        })();
    }, []);
    // -------------------------------------------------------
    // Wait for account to exist, if it didn't
    (0,react.useEffect)(()=>{
        (async ()=>{
            if (state.hasBeenSetup && !state.accountExists) {
                for(;;){
                    setDisplayText("Checking if fee payer account exists...");
                    const res = await state.zkappWorkerClient.fetchAccount({
                        publicKey: state.publicKey
                    });
                    const accountExists = res.error == null;
                    if (accountExists) {
                        break;
                    }
                    await new Promise((resolve)=>setTimeout(resolve, 5000));
                }
                setState({
                    ...state,
                    accountExists: true
                });
            }
        })();
    }, [
        state.hasBeenSetup
    ]);
    // -------------------------------------------------------
    // Send a transaction
    const onSetAnswer = async ()=>{
        setState({
            ...state,
            creatingTransaction: true
        });
        setDisplayText("Creating a transaction...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.publicKey
        });
        await state.zkappWorkerClient.createSetAnswerTransaction(Number(answer));
        setDisplayText("Creating proof...");
        await state.zkappWorkerClient.proveTransaction();
        setDisplayText("Requesting send transaction...");
        const transactionJSON = await state.zkappWorkerClient.getTransactionJSON();
        setDisplayText("Getting transaction JSON...");
        const { hash } = await window.mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: ""
            }
        });
        const transactionLink = "https://minascan.io/devnet/tx/".concat(hash);
        console.log("View transaction at ".concat(transactionLink));
        setTransactionLink(transactionLink);
        setDisplayText(transactionLink);
        setState({
            ...state,
            creatingTransaction: false
        });
    };
    const onGuess = async ()=>{
        setState({
            ...state,
            creatingTransaction: true
        });
        setDisplayText("Creating a transaction...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.publicKey
        });
        await state.zkappWorkerClient.createGuessTransaction(Number(guess));
        setDisplayText("Creating proof...");
        await state.zkappWorkerClient.proveTransaction();
        setDisplayText("Requesting send transaction...");
        const transactionJSON = await state.zkappWorkerClient.getTransactionJSON();
        setDisplayText("Getting transaction JSON...");
        const { hash } = await window.mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: ""
            }
        });
        const transactionLink = "https://minascan.io/devnet/tx/".concat(hash);
        console.log("View transaction at ".concat(transactionLink));
        setTransactionLink(transactionLink);
        setDisplayText(transactionLink);
        setState({
            ...state,
            creatingTransaction: false
        });
        // Check if the guess was correct and update verification status
        const currentCounter = await state.zkappWorkerClient.getCounter();
        if (currentCounter.toString() === "1") {
            setIsVerified(true);
        }
    };
    // -------------------------------------------------------
    // Refresh the current state
    const onRefreshState = async ()=>{
        console.log("Getting zkApp state...");
        setDisplayText("Getting zkApp state...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        const currentCounter = await state.zkappWorkerClient.getCounter();
        const currentAnswer = await state.zkappWorkerClient.getAnswer();
        setState({
            ...state,
            currentCounter,
            currentAnswer
        });
        setDisplayText("");
    };
    // -------------------------------------------------------
    // Create UI elements
    let hasWallet;
    if (state.hasWallet != null && !state.hasWallet) {
        const auroLink = "https://www.aurowallet.com/";
        const auroLinkElem = /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
            href: auroLink,
            target: "_blank",
            rel: "noreferrer",
            children: "Install Auro wallet here"
        });
        hasWallet = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                "Could not find a wallet. ",
                auroLinkElem
            ]
        });
    }
    const stepDisplay = transactionlink ? /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
        href: transactionlink,
        target: "_blank",
        rel: "noreferrer",
        style: {
            textDecoration: "underline"
        },
        children: "View transaction"
    }) : displayText;
    let setup = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Home_module_default()).start,
        style: {
            fontWeight: "bold",
            fontSize: "1.5rem",
            paddingBottom: "5rem"
        },
        children: [
            stepDisplay,
            hasWallet
        ]
    });
    let accountDoesNotExist;
    if (state.hasBeenSetup && !state.accountExists) {
        const faucetLink = "https://faucet.minaprotocol.com/?address=" + state.publicKey.toBase58();
        accountDoesNotExist = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    style: {
                        paddingRight: "1rem"
                    },
                    children: "Account does not exist."
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                    href: faucetLink,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Visit the faucet to fund this fee payer account"
                })
            ]
        });
    }
    let mainContent;
    if (state.hasBeenSetup && state.accountExists) {
        var _state_currentCounter, _state_currentAnswer;
        mainContent = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                justifyContent: "center",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Home_module_default()).center,
                    style: {
                        padding: 0
                    },
                    children: [
                        "Current counter in zkApp: ",
                        (_state_currentCounter = state.currentCounter) === null || _state_currentCounter === void 0 ? void 0 : _state_currentCounter.toString(),
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Home_module_default()).center,
                    style: {
                        padding: 0
                    },
                    children: [
                        "Current answer in zkApp: ",
                        (_state_currentAnswer = state.currentAnswer) === null || _state_currentAnswer === void 0 ? void 0 : _state_currentAnswer.toString(),
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                    type: "number",
                    value: answer,
                    onChange: (e)=>setAnswer(e.target.value),
                    placeholder: "Enter answer"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: (Home_module_default()).card,
                    onClick: onSetAnswer,
                    disabled: state.creatingTransaction,
                    children: "Set Answer"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                    type: "number",
                    value: guess,
                    onChange: (e)=>setGuess(e.target.value),
                    placeholder: "Enter guess"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: (Home_module_default()).card,
                    onClick: onGuess,
                    disabled: state.creatingTransaction,
                    children: "Make Guess"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: (Home_module_default()).card,
                    onClick: onRefreshState,
                    children: "Get Latest State"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: (Home_module_default()).card,
                    onClick: connectWallet,
                    children: "Connect Ethereum Wallet"
                }),
                ethAddress && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                    children: [
                        "Connected Ethereum Address: ",
                        ethAddress
                    ]
                }),
                isVerified && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            type: "number",
                            value: tokenAmount,
                            onChange: (e)=>setTokenAmount(e.target.value),
                            placeholder: "Enter token amount"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            className: (Home_module_default()).card,
                            onClick: mintTokens,
                            children: "Mint Tokens"
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(GradientBG, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (Home_module_default()).main,
            style: {
                padding: 0
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Home_module_default()).center,
                style: {
                    padding: 0
                },
                children: [
                    setup,
                    accountDoesNotExist,
                    mainContent
                ]
            })
        })
    });
}


/***/ }),

/***/ 2003:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"Home_main__2uIek","background":"Home_background__CTycG","backgroundGradients":"Home_backgroundGradients__VUGb4","container":"Home_container__9OuOz","tagline":"Home_tagline__Jw01K","start":"Home_start__ELciH","code":"Home_code__BZK8z","grid":"Home_grid__vo_ES","card":"Home_card__HIlp_","center":"Home_center__Y_rV4","logo":"Home_logo__ZEOng","content":"Home_content__Qnbja"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [674,457,888,774,179], function() { return __webpack_exec__(9208); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);