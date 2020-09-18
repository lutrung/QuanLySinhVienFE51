// Tạo ra 1 object chứa các thông tin backend cung cấp
// var objectGetSinhVien = {
//     url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',//đường dẫn BE cung cấp để lấy dữ liệu
//     method: 'GET' //giao thức BE cung cấp
// }


// DÙng thư viện AXIOS gửi yêu cầu tới server
// var promise = axios({
//     url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',//đường dẫn BE cung cấp để lấy dữ liệu
//     method: 'GET' //giao thức BE cung cấp
// });


// var layDuLieuThanhCong = function (result) { //hàm xử lý khi kết quả trả về thành công
//     console.log(result.data);
//     var content = ''
//     // từ dữ liệu table
//     for (var i = 0; i < result.data.length; i++) {
//         // lấy ra từng sinh viên từ kết quả server trả về
//         var sv = result.data[i];

//         // tạo đối tượng sinhVien chứa dữ liệu đó
//         var sinhVien = new SinhVien();
//         sinhVien.maSinhVien = sv.maSinhVien;
//         sinhVien.tenSinhVien = sv.tenSinhVien;
//         sinhVien.loaiSinhVien = sv.loaiSinhVien;
//         sinhVien.email = sv.email;
//         sinhVien.diemToan = sv.diemToan;
//         sinhVien.diemLy = sv.diemLy;
//         sinhVien.diemHoa = sv.diemHoa;
//         sinhVien.diemRenLuyen = sv.diemRenLuyen;

//         content += `
//         <tr>
//             <td>${sinhVien.maSinhVien}</td>
//             <td>${sinhVien.tenSinhVien}</td>
//             <td>${sinhVien.email}</td>
//             <td>${sinhVien.loaiSinhVien}</td>
//             <td>${sinhVien.diemTrungBinh().toFixed(2)}</td>
//             <td>${sinhVien.diemRenLuyen}</td>
//         </tr>
//         `
//     }
//     document.getElementById('tblSinhVien').innerHTML = content;
// }


// var layDuLieuThatBai = function (err) { //hàm xử lý khi kết quả trả về thất bại
//     console.log(err.response.data);
// }

// // phương thức then(callback): nhận vào 1 hàm có 1 tham số là kết quả trả về thành công từ phía server (trả về dữ liệu)
// // phương thức .catch(callback):nhận vào 1 hàm có tham số là kết quả trả về từ phía server thất bại (trả lỗi)
// promise.then(layDuLieuThanhCong).catch(layDuLieuThatBai);


// Khai báo Service
var svService = new SinhVienService();

var layThongTinSinhVien = function(){
    var promise = svService.layDanhSachSinhVien();
    promise.then(function(result){
        var content = ''
    // từ dữ liệu table
    for (var i = 0; i < result.data.length; i++) {
        // lấy ra từng sinh viên từ kết quả server trả về
        var sv = result.data[i];

        // tạo đối tượng sinhVien chứa dữ liệu đó
        var sinhVien = new SinhVien();
        sinhVien.maSinhVien = sv.maSinhVien;
        sinhVien.tenSinhVien = sv.tenSinhVien;
        sinhVien.loaiSinhVien = sv.loaiSinhVien;
        sinhVien.email = sv.email;
        sinhVien.diemToan = sv.diemToan;
        sinhVien.diemLy = sv.diemLy;
        sinhVien.diemHoa = sv.diemHoa;
        sinhVien.diemRenLuyen = sv.diemRenLuyen;

        content += `
        <tr>
            <td>${sinhVien.maSinhVien}</td>
            <td>${sinhVien.tenSinhVien}</td>
            <td>${sinhVien.email}</td>
            <td>${sinhVien.loaiSinhVien}</td>
            <td>${sinhVien.diemTrungBinh().toFixed(2)}</td>
            <td>${sinhVien.diemRenLuyen}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaSinhVien(${sinhVien.maSinhVien})">Xóa
                </button>

                <button class="btn btn-primary" onclick="chinhSua(${sinhVien.maSinhVien})">Chỉnh sửa
                </button>
            </td>    
        </tr>
        `
    }
    document.getElementById('tblSinhVien').innerHTML = content;
    }).catch(function(err){
        console.log('Thất bại',err.response.data)
    })
}
layThongTinSinhVien();

// -------------POST: Chức năng thêm sinh viên vào SERVER
document.getElementById('btnThemSinhVien').onclick = function(){
    // Lấy thông tin ng dùng nhập vào từ giao diện
    var sv = new SinhVien();
    sv.maSinhVien = document.getElementById('maSinhVien').value;
    sv.tenSinhVien = document.getElementById('tenSinhVien').value;
    sv.email = document.getElementById('email').value;
    sv.loaiSinhVien = document.getElementById('loaiSinhVien').value;
    sv.diemToan = document.getElementById('diemToan').value;
    sv.diemLy = document.getElementById('diemLy').value;
    sv.diemHoa = document.getElementById('diemHoa').value;
    sv.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    console.log(sv);

    // tạo ra object BE cần (vì tên đặt giống BE r nên ko cần tạo maSinhVien của code bài này giống maSinhVien của BE)
    
    axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
        method: 'POST',
        data:sv // theo định dạng BE yêu cầu
    }).then(function(result){
        console.log('Kết quả',result.data)
        //Cách 1: location.reload => load lạo file script => gọi api lấy danh sácch sinh viên mới về lại (nói chung là bấm xong nó tự F5 lại trang)
        location.reload();
        // Cách 2: gọi lại api layDanhSachSinhVien tại đây
    }).catch(function(err){
        console.log('Thất bại',err.response.data)
    })
}

var xoaSinhVien = function(maSinhVien){
    // gọi api từ BE > trả về promise
    var promise = svService.xoaSinhVien(maSinhVien);
    // dùng promise xử lý thành công hoặc thất bại
    promise.then(function(result){
        console.log(result.data);
        // Load lại api thấy thông tin sinh viên
        layThongTinSinhVien();
    }).catch(function(err){
        console.log(err.response.data)
    });
    // alert(maSinhVien);
}

var chinhSua = function(maSinhVien){
    // Gọi api lấy về thông tin sinh viên từ server dựa vào mã sinh viên
    var promise = svService.layThongTinSinhVien(maSinhVien);
    promise.then(function(result){
        // Lấy về thành công > gán dữ liệu lên các thẻ input
        var sinhVien = result.data; 

        document.getElementById('maSinhVien').value = sinhVien.maSinhVien;
        document.getElementById('tenSinhVien').value = sinhVien.tenSinhVien;
        document.getElementById('email').value = sinhVien.email;
        document.getElementById('loaiSinhVien').value = sinhVien.loaiSinhVien;
        document.getElementById('diemToan').value = sinhVien.diemToan;
        document.getElementById('diemLy').value = sinhVien.diemLy;
        document.getElementById('diemHoa').value = sinhVien.diemHoa;
        document.getElementById('diemRenLuyen').value = sinhVien.diemRenLuyen;
    }).catch(function(err){
        console.log('Thất bại');
    });
}


document.getElementById('btnCapNhatSinhVien').onclick = function(){
    // lấy thông tin ng dùng sau khi chỉnh sửa
    var sinhVienUpdate = new SinhVien();
    sinhVienUpdate.maSinhVien = document.getElementById('maSinhVien').value;
    sinhVienUpdate.tenSinhVien = document.getElementById('tenSinhVien').value;
    sinhVienUpdate.email = document.getElementById('email').value;
    sinhVienUpdate.loaiSinhVien = document.getElementById('loaiSinhVien').value;
    sinhVienUpdate.diemToan = document.getElementById('diemToan').value;
    sinhVienUpdate.diemLy = document.getElementById('diemLy').value;
    sinhVienUpdate.diemHoa = document.getElementById('diemHoa').value;
    sinhVienUpdate.diemRenLuyen = document.getElementById('diemRenLuyen').value;

    // gọi api cập nhật sonh viê từ BE cung cấp
    var promise = svService.capNhatThongTinSinhVien(sinhVienUpdate.maSinhVien,sinhVienUpdate);
    promise.then(function(result){
        console.log(result.data);
        // Xử lý khi cập nhật thành công
        layThongTinSinhVien();
    }).catch(function(err){
        console.log(err.response.data)
    });
}












