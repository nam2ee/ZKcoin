"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[475],{

/***/ 9475:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   game: function() { return /* binding */ game; }
/* harmony export */ });
/* harmony import */ var o1js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9466);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let answer = 10;
let hash = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon */ .jm.hash(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN.from(answer).toFields());
class game extends o1js__WEBPACK_IMPORTED_MODULE_0__/* .SmartContract */ .C3 {
    constructor() {
        super(...arguments);
        this.counter = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)((0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0));
        this.answer = (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
    }
    //    @method async init() {
    //      this.account.provedState.getAndRequireEquals();
    //      this.account.provedState.get().assertFalse();
    //      this.counter.set(Field(0));
    //      super.init();
    //    }
    // 이게 왜 안될까? 
    async setAnswer(answer) {
        this.counter.requireEquals((0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(0));
        const answerHash = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon */ .jm.hash([(0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(100), answer]);
        this.answer.set(answerHash);
        //console.log(answerHash);
        this.counter.set((0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(1));
    }
    async guess(guess) {
        // this.counter.requireEquals(Field(1)); 이게 왜 안될까?
        const guessHash = o1js__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon */ .jm.hash([(0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(100), guess]);
        const answer = this.answer.get();
        this.answer.requireEquals(answer);
        //when you access state variables, 
        //you need to explicitly declare that 
        //you're using the current on-chain state.
        guessHash.assertEquals(answer);
        console.log("정답입니다!");
    }
}
__decorate([
    (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], game.prototype, "counter", void 0);
__decorate([
    (0,o1js__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], game.prototype, "answer", void 0);
__decorate([
    o1js__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", Promise)
], game.prototype, "setAnswer", null);
__decorate([
    o1js__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [o1js__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", Promise)
], game.prototype, "guess", null);
//# sourceMappingURL=lotto.js.map

/***/ })

}]);