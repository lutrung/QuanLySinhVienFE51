var SinhVienService = function(){
    // Phương thức giao tiếp BE qua api => lấy thông tin sinh viên từ server
    this.layDanhSachSinhVien = function(){
        var promise = axios ({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',//đường dẫn BE cung cấp để lấy dữ liệu
            method: 'GET' //giao thức BE cung cấp
        })
        return promise;
    }
    this.xoaSinhVien = function(maSinhVien){
        var promise = axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,    
            method: 'DELETE'
        })
        return promise;
    }
    this.layThongTinSinhVien = function(maSinhVien){
        var promise = axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSinhVien}`,
            method: 'GET'
        })
        return promise;
    }
    this.capNhatThongTinSinhVien = function(maSinhVien,sinhVienUpdate){
        var promise = axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${maSinhVien}`,
            method: 'PUT',
            data: sinhVienUpdate
        })
        return promise;
    }
    this.timKiemSinhVien = function (keyword){
        console.log('Tìm kiếm sinh viên');
        return ''
    }
    
}
