function puterkanan (a, b) {
    for (let i = 0; i < b; i++){
        let akhir = a.pop();
        a.unshift(akhir);    
    }
    console.log(a)
}

puterkanan([1,2,3,4,5], 3)
