// --------------------- LÀM THEO HƯỚNG GIAO DIỆN--------------------------------------------------

// // định nghĩa sự kiện khi click chuột
// document.getElementById('btnThemSinhVien').onclick = function(){
//     // tạo đối tượng lưu trữ thông tin người dùng nhập
//     var sv = new SinhVien();
//     sv.maSinhVien = document.getElementById('maSinhVien').value;
//     sv.tenSinhVien = document.getElementById('tenSinhVien').value;
//     sv.email = document.getElementById('email').value;
//     sv.loaiSinhVien = document.getElementById('loaiSinhVien').value;
//     sv.diemToan = document.getElementById('diemToan').value;
//     sv.diemLy = document.getElementById('diemLy').value;
//     sv.diemHoa = document.getElementById('diemHoa').value;
//     sv.diemRenLuyen = document.getElementById('diemRenLuyen').value;

//     // Tạo thẻ td chứa nội dung người dùng nhập vào
//     var tdMaSinhVien = document.createElement('td');
//     tdMaSinhVien.innerHTML = sv.maSinhVien;

//     var tdTenSinhVien = document.createElement('td');
//     tdTenSinhVien.innerHTML = sv.tenSinhVien

//     var tdEmmail = document.createElement('td');
//     tdEmmail.innerHTML = sv.email;

//     var tdLoaiSinhVien = document.createElement('td');
//     tdLoaiSinhVien.innerHTML = sv.loaiSinhVien;

//     var tdDiemTrungBinh = document.createElement('td');
//     tdDiemTrungBinh.innerHTML = sv.diemTrungBinh().toFixed(2);

//     var tdDiemRenLuyen = document.createElement('td');
//     tdDiemRenLuyen.innerHTML = sv.diemRenLuyen;

//     // Tạo button xóa
//     var btnXoaSinhVien = document.createElement('button');
//     btnXoaSinhVien.className = 'btn btn-danger'
//     btnXoaSinhVien.innerHTML = "Xóa";
//     // Đặt sự kiện cho nút xóa
//     btnXoaSinhVien.onclick = function(){
//         // this đại diện cho nút button #btnXoaSinhVien
//         this.parentElement.parentElement.remove()
//     }

//     var tdChucNang = document.createElement('td')
//     // Thêm nút xóa và tdChucNang
//     tdChucNang.appendChild(btnXoaSinhVien);

//     // Tạo thẻ tr
//     var trSinhVien = document.createElement('tr');
//     // Thêm thẻ td vào tr
//     trSinhVien.appendChild(tdMaSinhVien);
//     trSinhVien.appendChild(tdTenSinhVien);
//     trSinhVien.appendChild(tdEmmail);
//     trSinhVien.appendChild(tdLoaiSinhVien);
//     trSinhVien.appendChild(tdDiemTrungBinh);
//     trSinhVien.appendChild(tdDiemRenLuyen);
//     trSinhVien.appendChild(tdChucNang);


//     var tbodySinhVien = document.getElementById('tblSinhVien');
//     tbodySinhVien.appendChild(trSinhVien);
// }








// --------------------- LÀM THEO HƯỚNG ĐỐI TƯỢNG--------------------------------------------------
var mangSinhVien = [];

var validate = new Validation();
// định nghĩa sự kiện khi click chuột
document.getElementById('btnThemSinhVien').onclick = function () {
    // tạo đối tượng lưu trữ thông tin người dùng nhập
    var sv = new SinhVien();
    sv.maSinhVien = document.getElementById('maSinhVien').value;
    sv.tenSinhVien = document.getElementById('tenSinhVien').value;
    sv.email = document.getElementById('email').value;
    sv.loaiSinhVien = document.getElementById('loaiSinhVien').value;
    sv.diemToan = document.getElementById('diemToan').value;
    sv.diemLy = document.getElementById('diemLy').value;
    sv.diemHoa = document.getElementById('diemHoa').value;
    sv.diemRenLuyen = document.getElementById('diemRenLuyen').value;

    // Kiểm tra dữ liệu hợp lệ
    var valid = true;
    // Kiểm tra rỗng
    //valid &=... ===> valid = valid & kiemTraRong
    valid &= validate.kiemTraRong(sv.maSinhVien, 'Mã sinh viên', '#err_maSinhVien_ktRong') &
        validate.kiemTraRong(sv.tenSinhVien, 'Tên sinh viên', '#err_tenSinhVien_ktRong') &
        validate.kiemTraRong(sv.email, 'Email', '#err_email_ktRong') &
        validate.kiemTraRong(sv.diemToan, 'Điểm toán', '#err_diemToan_ktRong') &
        validate.kiemTraRong(sv.diemLy, 'Điểm lý', '#err_diemLy_ktRong') &
        validate.kiemTraRong(sv.diemHoa, 'Điểm hóa', '#err_diemHoa_ktRong') &
        validate.kiemTraRong(sv.diemRenLuyen, 'Điểm rèn luyện', '#err_diemRenLuyen_ktRong');

    // Kiểm tra tất cả là ký tự
    valid &= validate.kiemTraLaChu(sv.tenSinhVien, 'Tên sinh viên', '#err_tenSinhVien_allLetters');

    // Kiểm tra email
    valid &= validate.kiemTraEmail(sv.email, 'Email', '#err_email_format');

    // Kiểm tra số
    valid &= validate.kiemTraLaSo(sv.maSinhVien,'Mã sinh viên','#err_maSinhVien_allNumber') &
    validate.kiemTraLaSo(sv.diemToan,'Điểm toán','#err_diemToan_allNumber') &
    validate.kiemTraLaSo(sv.diemLy,'Điểm lý','#err_diemLy_allNumber') &
    validate.kiemTraLaSo(sv.diemHoa,'Điểm hóa','#err_diemHoa_allNumber') &
    validate.kiemTraLaSo(sv.diemRenLuyen,'Điểm rèn luyện','#err_diemRenLuyen_allNumber') ;

    // Kiểm tra độ dài
    valid &= validate.kiemTraDoDai(sv.maSinhVien,'Mã sinh viên','#err_maSinhVien_maxMinLength',4,6);

    // Kiểm tra giá trị
    valid &= validate.kiemTraGiaTri(sv.diemToan,'Điểm toán','#err_diemToan_maxMinValue',1,10) &
    validate.kiemTraGiaTri(sv.diemLy,'Điểm lý','#err_diemLy_maxMinValue',1,10) &
    validate.kiemTraGiaTri(sv.diemHoa,'Điểm hóa','#err_diemHoa_maxMinValue',1,10) &
    validate.kiemTraGiaTri(sv.diemRenLuyen,'Điểm toán','#err_diemRenLuyen_maxMinValue',1,10) ;

    console.log(typeof Number("0.2"));

    if (!valid) {
        return;
    }



    // Kiểm tra mã sinh viên
    // trim(): loại bỏ khoảng trắng đầu và cuối chuỗi
    // if (sv.maSinhVien.trim() === '') {
    //     document.getElementById('err_maSinhVien_ktRong').innerHTML = 'Mã sinh viên không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.getElementById('err_maSinhVien_ktRong').innerHTML = '';
    // }
    // // Kiểm tra tên sinh viên
    // if (sv.tenSinhVien.trim() === '') {
    //     document.getElementById('err_tenSinhVien_ktRong').innerHTML = 'Tên sinh viên không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.getElementById('err_tenSinhVien_ktRong').innerHTML = '';
    // }
    // // Kiểm tra email
    // if (sv.email.trim() === '') {
    //     document.getElementById('err_email_ktRong').innerHTML = 'Email không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.getElementById('err_email_ktRong').innerHTML = '';
    // }
    // // Kiểm tra điểm toán   
    // if (sv.diemToan.trim() === '') {
    //     document.getElementById('err_diemToan_ktRong').innerHTML = 'Điểm toán không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.getElementById('err_diemToan_ktRong').innerHTML = '';
    // }
    // // Kiểm tra điểm lý
    // if (sv.diemLy.trim() === '') {
    //     document.getElementById('err_diemLy_ktRong').innerHTML = 'Điểm lý không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.getElementById('err_diemLy_ktRong').innerHTML = '';
    // }
    // // Kiểm tra điểm hóa
    // if (sv.diemHoa.trim() === '') {
    //     document.getElementById('err_diemHoa_ktRong').innerHTML = 'Điểm hóa không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.getElementById('err_diemHoa_ktRong').innerHTML = '';
    // }
    // // Kiểm tra điểm rèn luyện
    // if (sv.diemRenLuyen.trim() === '') {
    //     document.getElementById('err_diemRenLuyen_ktRong').innerHTML = 'Điểm rèn luyện không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.getElementById('err_diemRenLuyen_ktRong').innerHTML = '';
    // }

    // ------Kiểm tra tất cả là kí tự--------
    // Kiểm tra định dạng chuỗi regex
    // var regexAllLetters = /^[A-Za-z]+$/; 
    // if(!regexAllLetters.test(sv.tenSinhVien)){
    //     document.getElementById('err_tenSinhVien_allLetters').innerHTML = 'Tên sinh viên phải là chữ!';
    //     valid = false;
    // }else{
    //     document.getElementById('err_tenSinhVien_allLetters').innerHTML = '';
    // }
    // if(!valid){
    //     return;
    // }

    mangSinhVien.push(sv);
    // Gọi hàm tạo bảng
    taoBang(mangSinhVien);
    luuLocalStorage();
}

var taoBang = function (arrSinhVien) {
    var contentTable = '';
    // Duyệt qua mảng sinhVien tạo ra các tr
    for (var index = 0; index < arrSinhVien.length; index++) {
        // Mỗi lần duyệt lấy ra 1 đối tượng sinhVien từ trong mảng
        var sv = arrSinhVien[index];

        // tạo đối tượng(vì chuỗi không hỗ trợ function(diemTrungBinh) nên phải tạo 1 đối tượng mới rồi gán giá trị của đối tượng sv vào)
        var sinhVien = new SinhVien(sv.maSinhVien,sv.tenSinhVien,sv.email,sv.loaiSinhVien,sv.diemToan,sv.diemLy,sv.diemHoa,sv.diemRenLuyen);
        // sinhVien.maSinhVien = sv.maSinhVien;
        // sinhVien.tenSinhVien = sv.tenSinhVien;
        // sinhVien.loaiSinhVien = sv.loaiSinhVien;
        // sinhVien.email = sv.email;
        // sinhVien.diemToan = sv.diemToan;
        // sinhVien.diemLy = sv.diemLy;
        // sinhVien.diemHoa = sv.diemHoa;
        // sinhVien.diemRenLuyen = sv.diemRenLuyen;

        // Tạo thẻ tr + dồn vào nội dung contentTable
        contentTable += `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.diemTrungBinh()}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td><button class="btn btn-primary" onclick="chinhSuaSinhVien('${sinhVien.maSinhVien}')">Chỉnh sửa</button></td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xóa</button></td>
            </tr>
        `
    }
    document.getElementById('tblSinhVien').innerHTML = contentTable;
}
var chinhSuaSinhVien = function(maSV){
    // khóa nút chỉnh sửa mã sinh vien
    document.getElementById('maSinhVien').disabled = true;
    // tìm sinh viên có mã sinh viên trong mảng
    for(var index = 0; index < mangSinhVien.length; index++){
        var sv = mangSinhVien[index];
        // kiểm tra từng sinh viên coi sinh viên nào có mã = maSV khi click ? gán lên control phía trên
        if(sv.maSinhVien === maSV){
            document.getElementById('maSinhVien').value = sv.maSinhVien;
            document.getElementById('tenSinhVien').value = sv.tenSinhVien;
            document.getElementById('email').value = sv.email;
            document.getElementById('loaiSinhVien').value = sv.loaiSinhVien;
            document.getElementById('diemToan').value = sv.diemToan;
            document.getElementById('diemLy').value = sv.diemLy;
            document.getElementById('diemHoa').value = sv.diemHoa;
            document.getElementById('diemRenLuyen').value = sv.diemRenLuyen;
        }
    }
    // gán thông tin sinh viên tìm được lên các control (thẻ input) phía trên

}

// xây dụng phương thức cập nhật sinh viên
document.getElementById('btnCapNhatSinhVien').onclick = function(){
    // lấy thông tin ng dùng nhập từ giao diện(sau khi người dùng đã thay đổi thông tin) gán cho đối tượng sinh viên
    var svUpdate = new SinhVien();
    svUpdate.maSinhVien = document.getElementById('maSinhVien').value;
    svUpdate.tenSinhVien = document.getElementById('tenSinhVien').value;
    svUpdate.email = document.getElementById('email').value;
    svUpdate.diemToan = document.getElementById('diemToan').value;
    svUpdate.diemHoa = document.getElementById('diemHoa').value;
    svUpdate.diemLy = document.getElementById('diemLy').value;
    svUpdate.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    svUpdate.loaiSinhVien = document.getElementById('loaiSinhVien').value;
    console.log('svUpdate',svUpdate);

    // tìm svUpdate có mã trùng vs maSV trong mảng > gán dữ liệu sinhVien đó = svUpdate
    for(var index=0; index < mangSinhVien.length; index++){
        var sv = mangSinhVien[index];
        if(svUpdate.maSinhVien === sv.maSinhVien){
            sv.tenSinhVien = svUpdate.tenSinhVien;
            sv.maSinhVien = svUpdate.maSinhVien;
            sv.loaiSinhVien = svUpdate.loaiSinhVien;
            sv.email = svUpdate.email;
            sv.diemToan = svUpdate.diemToan;
            sv.diemLy = svUpdate.diemLy;
            sv.diemHoa = svUpdate.diemHoa;
            sv.diemRenLuyen = svUpdate.diemRenLuyen;
        }
    }
    // gọi hàm tạo lại bảng
    taoBang(mangSinhVien);
    luuLocalStorage();

    // clear tất cả thông tin và bật lại input mã
    document.getElementById('maSinhVien').disabled = false;
    var mangTheInput = document.querySelectorAll('input');
    for(var i = 0; i < mangTheInput.length; i++){
        var tagInput = mangTheInput[i];
        // gán lại value = rỗng chp từng thẻ 1
        tagInput.value = '';
    }
}



var xoaSinhVien = function (maSV) {
    // alert(maSv)
    // mangSinhVien là biến toàn cục khai báo ở trên đầu file
    for (var index = mangSinhVien.length - 1; index >= 0; index--) {
        // Mỗi lần duyệt lấy ra 1 đối tượng sinhVien
        var sv = mangSinhVien[index];

        // Kiểm tra từng phần tử sinhVien có mã = vs maSV đc click ở nút xóa hay không
        if (sv.maSinhVien === maSV) {
            mangSinhVien.splice(index, 1); // Hàm xóa phần tử của mảng trong js, index: vị trí xóa, 1 là tại vị trí đó xóa 1 phần tử
        }
    }
    // Sau khi xóa thì tạo lại bảng = mảng dữ liệu đã xóa
    taoBang(mangSinhVien);
    // lưu vào localstorage sau khi xóa sinh viên
    luuLocalStorage();
}

// ------------day6----------------
var luuLocalStorage = function(){
    // Các bước lưu trữ mảng sinh viên xuống localStorage
    var sMangSinhVien = JSON.stringify(mangSinhVien); // > biến mảng sinh viên thành chuỗi
     console.log('sMangSinhVien',sMangSinhVien);
     console.log('mangSinhVien',mangSinhVien);

    localStorage.setItem('mangSinhVien',sMangSinhVien);
}

var layDuLieuLocalStorage = function(){

    // Kiểm tra dữ liệu có trong localstorage chưa
    if(localStorage.getItem('mangSinhVien')){
    // Lấy dữ liệu từ localstorage (lấy ra dữ liệu là chuỗi)
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        // biến đổi dữ liệu thành chuỗi json => mảng và gán vào mảng sinh viên
        mangSinhVien = JSON.parse(sMangSinhVien);
        // Gọi hàm tạo bảng =>tạo html
        taoBang(mangSinhVien);
    }
}
// gọi hàm local
layDuLieuLocalStorage();    
