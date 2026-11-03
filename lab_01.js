
// TASK 1
function addition(a,b)
{
    return a+b;
}
console.log(addition(10,20));

// TASK 2
function bitwiseAND(a,b)
{
    return a&b;
}

function bitwiseOR(a,b)
{
    return a|b;
}

function bitwiseXOR(a,b)
{
    return a^b;
}
console.log(bitwiseAND(5,3));
console.log(bitwiseOR(5,3));
console.log(bitwiseXOR(5,3));

// TASK 3
function addUp(a)
{
    return a*(a+1)/2;
}
console.log(addUp(4));

// TASK 4
function progressBar(a)
{
    console.log(a);
    if(a<0) a=0;
    if(a>100) a=100;
    var filled=Math.floor(a/10);
    var empty=10-filled;
    return "#".repeat(filled)+"-".repeat(empty);
}
console.log(progressBar(40));

// TASK 5
function minMax(arr)
{
    if(arr.length===0) return [];
    var min=Math.min(...arr);
    var max=Math.max(...arr);
    return [min,max];
}
console.log(minMax([1,2,3,4,5,6]));

// TASK 6
function calculateRepoStats(repos)
{
    if(repos.length===0)
        return {maxStars:0,minStars:0,avgStars:0,varianceScore:0};

    const starCounts=repos.map(repo=>repo.stars);
    const maxStars=Math.max(...starCounts);
    const minStars=Math.min(...starCounts);
    const totalStars=starCounts.reduce((sum,stars)=>sum+stars,0);
    const avgStars=Math.floor(totalStars/starCounts.length);
    const varianceScore=Math.abs(maxStars-minStars);

    return {maxStars,minStars,avgStars,varianceScore};
}

const repos=[{name:'repo-a',stars:12},{name:'repo-b',stars:45},{name:'repo-c',stars:3}];
console.log(calculateRepoStats(repos));

// TASK 7
function calculateFinalPrice(basePrice,taxRate,discountPercentage)
{
    var discountedPrice=basePrice*(1-discountPercentage/100);
    discountedPrice=Math.round((discountedPrice+Number.EPSILON)*100)/100;

    var finalPrice=discountedPrice*(1+taxRate/100);
    finalPrice=Math.round((finalPrice+Number.EPSILON)*100)/100;

    var loyaltyPoints=Math.ceil(finalPrice);

    return {finalPrice,loyaltyPoints};
}

console.log(calculateFinalPrice(1000.564,10.43,20.32));
// TASK 8
function paginateData(items,pageNumber,pageSize=5)
{
    var totalPages=Math.ceil(items.length/pageSize);
    var currentPage=Math.max(1,Math.min(pageNumber,totalPages||1));
    var startIndex=(currentPage-1)*pageSize;
    var endIndex=startIndex+pageSize;
    var data=items.slice(startIndex,endIndex);

    return {data:data,currentPage:currentPage,totalPages:totalPages,hasNext:currentPage<totalPages,hasPrev:currentPage>1 && totalPages>0};
}
const allProducts=['Laptop','Mouse','Keyboard','Monitor','Desk','Chair','Webcam','Headphones'];
console.log(paginateData(allProducts,2,3));
