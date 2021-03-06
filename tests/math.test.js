const {calculateTip,fahrenheitToCelsius,celsiusToFahrenheit,add}=require('../src/math');

test('Should calculate Total with Tip',()=>{
    const total=calculateTip(10,0.3);

    expect(total).toBe(13);
    // if(total!=13){
    //     throw new Error('Total tip should be 13.Got '+total);
    // }
})

test('Should calculate Total with default Tip',()=>{
    const total=calculateTip(10);

    expect(total).toBe(12.5);
})

test('Should convert 32 F to 0 C',()=>{
    const temp=fahrenheitToCelsius(32);
    expect(temp).toBe(0);
})

test('Should convert 0 C to 32 F',()=>{
    const temp=celsiusToFahrenheit(0);
    expect(temp).toBe(32);
})

/
test('Should add two numbers',(done)=>{
    add(2,3).then((sum)=>{
        expect(sum).toBe(5);
        done();
    })
})

test('Should add two numbers async/wait',async()=>{
        const sum=await add(10,12);
        expect(sum).toBe(22);
})