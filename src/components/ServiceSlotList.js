var m = 10, n = 7;
var arr1 = new Array(m);
var arr2 = new Array(m);
var arr3 = new Array(m);
for (var i = 0; i < m; i++) {
    arr1[i] = new Array(n);
    arr2[i] = new Array(n);
    arr3[i] = new Array(n);
}
for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
        arr1[i][j]={val:false,key:i*n+j};
        arr2[i][j]={val:false,key:i*n+j};
        arr3[i][j]={val:false,key:i*n+j};
    }
}
arr1[2][3].val=true;arr1[5][4].val=true;
arr2[4][6].val=true;arr2[9][2].val=true;
arr3[5][1].val=true;arr3[3][6].val=true;
export {arr1,arr2,arr3};