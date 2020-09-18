var SinhVien = function(masv,tensv,email,loaisinhvien,diemtoan,diemly,diemhoa,diemrenluyen){
    this.maSinhVien = masv;
    this.tenSinhVien = tensv;
    this.email = email;
    this.loaiSinhVien = loaisinhvien;
    this.diemToan = diemtoan;
    this.diemLy = diemly;
    this.diemHoa = diemhoa;
    this.diemRenLuyen = diemrenluyen;
    this.diemTrungBinh = function(){
        return (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3
    }
    this.xepLoai = function(){
        return 'gioi'
    }
}