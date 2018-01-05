import Block from "./Block";

function createStore(initialState, reducer) {
    let blockchain = [
        new Block({
            previousBlock: {
                index:0, 
                hash: "0", 
                timestamp: new Date().getTime()
            }, 
            data: "genesis block"
        })
    ];

    function getLastBlock() {
        return blockchain[blockchain.length -1 ];
    }

    function dispatch(action) {
        const lastBlock = getLastBlock();
        const nextData = reducer(lastBlock.data, actoin);
        blockchain.push(new Block({ prevoiusBlock: lastBlock, data: data}));
    }

    return  {
        getState: () => getLastBlock().data,
        dispathc: dispatch
    }
}