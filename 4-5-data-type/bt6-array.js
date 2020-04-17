var banHung = {
    phoneNumber: 1234555,
    email: 'hung123@gmail.com',
    isMale: true
};
var banAnh = {
    phoneNumber: 12443329,
    email: 'Anh098@gmail.com',
    isMale: false
};
var banNgoc = {
    phoneNumber: 4587333,
    email: 'ngoc456@gmail.com',
    isMale: false
};
var myFriendLists = [banHung, banAnh, banNgoc];
//console.log(myFriendLists[0]);
var banTuan = {
    phoneNumber: 394802348,
    email: 'Tuan48938@gmail.com',
    isMale: true
};

myFriendLists[0] = banTuan;

console.log(myFriendLists); // đã là kiểu dữ liệu boolean thì chỉ có true hoặc fasle, không có ' ',
// ở đâu tức là cho tất cả các object kia vô mảng myriendlists, ở đây tách ra đó chứ bình thường em sẽ thấy như màn hình terminal kia kìa,
//ở đây em thấy OBJECT anHung dước thay thế bằng bạn tuấn, em tìm hiểu về kiểu dữ liệu nguyên thủy và kiểu dữ liệ tham chiếu nhé
// còn console.log là đi với () chứ không đi với [] đúng ko anh,
//syntax (cú pháp) của console.log(...), ở đây em nhìn kĩ: myriendLists ở trên là 1 mảng array
//em console.log(myriendList ) tức là em đang console.log cái array đó, làm gì phải []
// ồ ra thế hhihi để em tìm hiểu 2 kiểu dữ liệu anh vừa nói.
