function tinhhieu(a, b, c, d){
    return a++ * b-- % ++c - --d;
}

console.log('Giá trị của biểu thức này là: ', tinhhieu(6,2,8,2));