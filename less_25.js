// *********************************** LESS 25 ********************************************

// # 1 Random Resolve

const randomResolve = () => {
    const random =Math.floor(Math.random() * ( 5 - 1 )) + 1 ;
    const randomSecond = random * 1000;
    
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            
            if ( random % 2 === 0 ) {
                resolve(`${random} number is even`);
            } else {
                reject(`${random} number is odd`);
            };

        }, randomSecond);
    })

    return promise;
};

randomResolve()
    .then((num) => {
    console.log(num);
})
    .catch((err) => {
        console.error(err);
});

randomResolve();

// ===========================================================================

// # 2  Promise API


const createPromiseArr = (n) => {

    const promisesArr = [];
        
    for ( let i = 0; i < n; i++ ) {
        promisesArr.push(randomResolve());
    }

    Promise.all(promisesArr)
        .then(() => {
            console.log('🥳 Ура');
        })
        .catch(() => {
            console.log('🫠🫡 Ок');
        });
    
};


createPromiseArr(3);

// ===========================================================================

// # 3  Async/Await

const printResponse = async (n) => {
    
    const promisesArr = [];
        
    for ( let i = 0; i < n; i++ ) {
        promisesArr.push(randomResolve());
    };

    await Promise.all(promisesArr)
    .then(() => {
        console.log('🥳 Ура');
    })
    .catch(() => {
        console.log('🫠🫡 Ок');
    });

};

printResponse(29);