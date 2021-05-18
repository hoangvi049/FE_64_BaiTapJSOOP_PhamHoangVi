//1. Định nghĩa sự kiện cho nút btn

document.querySelector("#btnXacNhan").onclick = function () {
  var nv = new NhanVien();
  var tagChucVu = document.querySelector("#chucVu");
  //   var tagOptionDuocChon = tagChucVu[tagChucVu.selectedIndex];
  //2. Lấy thông tin từ ip người dùng
  nv.maNhanVien = document.querySelector("#maNhanVien").value;
  nv.tenNhanVien = document.querySelector("#tenNhanVien").value;
  nv.chucVu = tagChucVu[tagChucVu.selectedIndex].text;
  nv.heSoChucVu = document.querySelector("#chucVu").value;
  nv.luongCoBan = document.querySelector("#luongCoBan").value;
  nv.gioLam = document.querySelector("#gioLam").value;
  nv.tinhTongLuong();
  nv.xetXepLoai();

  //3.Hiển thị thông tin trên giao diện(mã nv, tên nv, chức vụ)
  document.querySelector("#txtMa").innerHTML = " " + nv.maNhanVien;
  document.querySelector("#txtTen").innerHTML = " " + nv.tenNhanVien;
  document.querySelector("#txtChucVu").innerHTML = " " + nv.chucVu;
  document.querySelector("#txtTongLuong").innerHTML = nv.tinhTongLuong();
  document.querySelector("#txtXepLoai").innerHTML = " " + nv.xetXepLoai();

  //Dom đến thẻ select

  //selectedIndex: là vị trí của thẻ option được chọn trong thẻ <select></select>
};
