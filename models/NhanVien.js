function NhanVien() {
  this.maNhanVien = "";
  this.tenNhanVien = "";
  this.chucVu = "";
  this.luongCoBan = "";
  this.gioLam = "";
  this.heSoChucVu = "";

  this.tinhTongLuong = function () {
    var tongLuong = this.luongCoBan * this.heSoChucVu;
    return tongLuong;
  };

  this.xetXepLoai = function () {
    var xepLoai = "";
    if (this.gioLam >= 120) {
      xepLoai = "Nhân viên xuất sắc";
    } else if (this.gioLam >= 100 && this.gioLam < 120) {
      xepLoai = "Nhân viên giỏi";
    } else if (this.gioLam >= 80 && this.gioLam < 100) {
      xepLoai = "Nhân viên khá";
    } else if (this.gioLam >= 50 && this.gioLam < 80) {
      xepLoai = "Nhân viên trung bình";
    } else {
      xepLoai = "Không hợp lệ";
    }

    return xepLoai;
  };
}
