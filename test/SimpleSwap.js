const { expect } = require("chai");
const { ethers } = require("hardhat");
const decimals = 18;
const toWei = (value) => BigInt(value) * 10n ** BigInt(decimals);

describe("SimpleSwap", function() {
    let owner, user1, user2;
    let tokenA, tokenB, swap;
    const initialSupply = toWei(10000);

    beforeEach(async function(){
        [owner, user1, user2] = await ethers.getSigners();
        const MockERC20 = await ethers.getContractFactory("MockERC20");
        tokenA = await MockERC20.deploy("TokenA", "TKA", initialSupply);
        tokenB = await MockERC20.deploy("TokenB", "TKB", initialSupply);
        await tokenA.waitForDeployment();
        await tokenB.waitForDeployment();
        const SimpleSwap = await ethers.getContractFactory("SimpleSwap");
        swap = await SimpleSwap.deploy();
        await swap.waitForDeployment();
        await tokenA.approve(swap.target, initialSupply);
        await tokenB.approve(swap.target, initialSupply);
    });

    it("should revert if addLiquidity results in zero liquidity", async function() {
        await expect(
            swap.addLiquidity(
                tokenA.target,
                tokenB.target,
                0,
                0,
                0,
                0,
                owner.address,
                (await ethers.provider.getBlock('latest')).timestamp + 1000
            )
        ).to.be.revertedWith("Zero liquidity");
    });

    it("should revert if addLiquidity with low A or B", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await expect(
            swap.addLiquidity(
                tokenA.target,
                tokenB.target,
                amountA,
                amountB,
                amountA + 1n,
                amountB,
                owner.address,
                (await ethers.provider.getBlock('latest')).timestamp + 1000
            )
        ).to.be.revertedWith("Low A");
        await expect(
            swap.addLiquidity(
                tokenA.target,
                tokenB.target,
                amountA,
                amountB,
                amountA,
                amountB + 1n,
                owner.address,
                (await ethers.provider.getBlock('latest')).timestamp + 1000
            )
        ).to.be.revertedWith("Low B");
    });

    it("should revert removeLiquidity with low A or B", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        const liquidity = await swap.balanceOf(owner.address);
        await swap.approve(swap.target, liquidity);
        await expect(
            swap.removeLiquidity(
                tokenA.target,
                tokenB.target,
                liquidity,
                toWei(100000),
                1,
                owner.address,
                (await ethers.provider.getBlock('latest')).timestamp + 1000
            )
        ).to.be.revertedWith("Low A");
        await expect(
            swap.removeLiquidity(
                tokenA.target,
                tokenB.target,
                liquidity,
                1,
                toWei(100000),
                owner.address,
                (await ethers.provider.getBlock('latest')).timestamp + 1000
            )
        ).to.be.revertedWith("Low B");
    });

    it("should revert removeLiquidity with not enough LP", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        const liquidity = await swap.balanceOf(owner.address);
        await swap.approve(swap.target, liquidity);
        await expect(
            swap.connect(user1).removeLiquidity(
                tokenA.target,
                tokenB.target,
                liquidity,
                1,
                1,
                user1.address,
                (await ethers.provider.getBlock('latest')).timestamp + 1000
            )
        ).to.be.revertedWith("Not enough LP");
    });

    it("should revert swap with invalid path", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        await tokenA.transfer(user1.address, amountA);
        await tokenA.connect(user1).approve(swap.target, amountA);
        await expect(
            swap.connect(user1).swapExactTokensForTokens(
                toWei(100),
                1,
                [tokenA.target],
                user1.address,
                (await ethers.provider.getBlock('latest')).timestamp + 1000
            )
        ).to.be.revertedWith("Only 2-token swaps");
    });

    it("should revert swap with invalid token pair", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        await tokenA.transfer(user1.address, amountA);
        await tokenA.connect(user1).approve(swap.target, amountA);
        await expect(
            swap.connect(user1).swapExactTokensForTokens(
                toWei(100),
                1,
                [tokenA.target, user2.address],
                user1.address,
                (await ethers.provider.getBlock('latest')).timestamp + 1000
            )
        ).to.be.revertedWith("Invalid swap path");
    });

    it("should revert swap with slippage", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        await tokenA.transfer(user1.address, amountA);
        await tokenA.connect(user1).approve(swap.target, amountA);
        const path = [tokenA.target, tokenB.target];
        await expect(
            swap.connect(user1).swapExactTokensForTokens(
                toWei(100),
                toWei(1000), 
                path,
                user1.address,
                (await ethers.provider.getBlock('latest')).timestamp + 1000
            )
        ).to.be.revertedWith("Slippage");
    });

    it("should revert swap with empty reserves", async function() {
        const path = [tokenA.target, tokenB.target];
        await tokenA.transfer(user1.address, toWei(100));
        await tokenA.connect(user1).approve(swap.target, toWei(100));
        await expect(
            swap.connect(user1).swapExactTokensForTokens(
                toWei(100),
                1,
                path,
                user1.address,
                (await ethers.provider.getBlock('latest')).timestamp + 1000
            )
        ).to.be.reverted;
    });

    it("should initialize token addresses on first addLiquidity", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        expect(await swap.tokenAAddres()).to.equal(tokenA.target);
        expect(await swap.tokenBAddres()).to.equal(tokenB.target);
    });

    it("should mint LP tokens on addLiquidity", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        expect(await swap.totalSupply()).to.be.gt(0);
        expect(await swap.balanceOf(owner.address)).to.be.gt(0);
    });

    it("should revert if addLiquidity is called with expired deadline", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await expect(
            swap.addLiquidity(
                tokenA.target,
                tokenB.target,
                amountA,
                amountB,
                amountA,
                amountB,
                owner.address,
                1 
            )
        ).to.be.revertedWith("Expired");
    });

    it("should revert if addLiquidity is called with same token addresses", async function() {
        const amount = toWei(1000);
        await expect(
            swap.addLiquidity(
                tokenA.target,
                tokenA.target,
                amount,
                amount,
                amount,
                amount,
                owner.address,
                (await ethers.provider.getBlock('latest')).timestamp + 1000
            )
        ).to.be.revertedWith("Tokens must differ");
    });

    it("should revert if addLiquidity is called with invalid token pair after init", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        // First addLiquidity to set tokens
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        // Try with wrong pair
        await expect(
            swap.addLiquidity(
                tokenB.target,
                user1.address, // invalid
                amountA,
                amountB,
                amountA,
                amountB,
                owner.address,
                (await ethers.provider.getBlock('latest')).timestamp + 1000
            )
        ).to.be.revertedWith("Invalid token pair");
    });

    it("should allow removeLiquidity and update reserves", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        const liquidity = await swap.balanceOf(owner.address);
        await swap.approve(swap.target, liquidity);
        const prevReserveA = await swap.reserveA();
        const prevReserveB = await swap.reserveB();
        await swap.removeLiquidity(
            tokenA.target,
            tokenB.target,
            liquidity,
            1,
            1,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        expect(await swap.reserveA()).to.be.lt(prevReserveA);
        expect(await swap.reserveB()).to.be.lt(prevReserveB);
    });

    it("should revert removeLiquidity with expired deadline", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        const liquidity = await swap.balanceOf(owner.address);
        await swap.approve(swap.target, liquidity);
        await expect(
            swap.removeLiquidity(
                tokenA.target,
                tokenB.target,
                liquidity,
                1,
                1,
                owner.address,
                1 
            )
        ).to.be.revertedWith("Expired");
    });

    it("should swap tokens and update reserves", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        await tokenA.transfer(user1.address, amountA);
        await tokenA.connect(user1).approve(swap.target, amountA);
        const path = [tokenA.target, tokenB.target];
        const prevReserveA = await swap.reserveA();
        const prevReserveB = await swap.reserveB();
        await swap.connect(user1).swapExactTokensForTokens(
            toWei(100),
            1,
            path,
            user1.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        expect(await swap.reserveA()).to.be.gt(prevReserveA);
        expect(await swap.reserveB()).to.be.lt(prevReserveB);
    });

    it("should revert swap with expired deadline", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        await tokenA.transfer(user1.address, amountA);
        await tokenA.connect(user1).approve(swap.target, amountA);
        const path = [tokenA.target, tokenB.target];
        await expect(
            swap.connect(user1).swapExactTokensForTokens(
                toWei(100),
                1,
                path,
                user1.address,
                1 
            )
        ).to.be.revertedWith("Expired");
    });

    it("should return correct price from getPrice", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        const price = await swap.getPrice(tokenA.target, tokenB.target);
        expect(price).to.equal(amountB * 10n ** 18n / amountA);
    });

    it("should revert getPrice with invalid token pair", async function() {
        const amountA = toWei(1000);
        const amountB = toWei(2000);
        await swap.addLiquidity(
            tokenA.target,
            tokenB.target,
            amountA,
            amountB,
            amountA,
            amountB,
            owner.address,
            (await ethers.provider.getBlock('latest')).timestamp + 1000
        );
        await expect(
            swap.getPrice(tokenA.target, user1.address)
        ).to.be.revertedWith("Invalid token pair");
    });

    it("should return correct amount from getAmountOut", async function() {
        const amountIn = toWei(100);
        const reserveIn = toWei(1000);
        const reserveOut = toWei(2000);
        const out = await swap.getAmountOut(amountIn, reserveIn, reserveOut);
        expect(out).to.equal(amountIn * reserveOut / (reserveIn + amountIn));
    });

    it("should revert getAmountOut with zero input", async function() {
        const reserveIn = toWei(1000);
        const reserveOut = toWei(2000);
        await expect(
            swap.getAmountOut(0, reserveIn, reserveOut)
        ).to.be.revertedWith("Zero input");
    });

    it("should revert getAmountOut with empty reserves", async function() {
        const amountIn = toWei(100);
        await expect(
            swap.getAmountOut(amountIn, 0, 0)
        ).to.be.revertedWith("Empty reserves");
    });


});