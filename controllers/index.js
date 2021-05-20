//1. Định nghĩa sự kiện cho nút btn

var arryNhanVien = [];
var validator = new Validation();
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

  var valid = true;
  valid &=
    validator.kiemtraRong(
      nv.maNhanVien,
      "#error_requirement_maNhanVien_kiemTraRong",
      "mã nhân viên"
    ) &
    validator.kiemtraRong(
      nv.maNhanVien,
      "#error_requirement_tenNhanVien_kiemTraRong",
      "tên nhân viên"
    ) &
    validator.kiemtraRong(
      nv.luongCoBan,
      "#error_requirement_luongCoBan_kiemTraRong",
      "lương cơ bản"
    ) &
    validator.kiemtraRong(
      nv.maNhanVien,
      "#error_requirement_gioLam_kiemTraRong",
      "số giờ làm"
    );
  if (!valid) {
    return;
  }

  arryNhanVien.push(nv);
  renderTableNhanVien(arryNhanVien);
  //3.Hiển thị thông tin trên giao diện(mã nv, tên nv, chức vụ)
  // document.querySelector("#txtMa").innerHTML = " " + nv.maNhanVien;
  // document.querySelector("#txtTen").innerHTML = " " + nv.tenNhanVien;
  // document.querySelector("#txtChucVu").innerHTML = " " + nv.chucVu;
  // document.querySelector("#txtTongLuong").innerHTML = nv.tinhTongLuong();
  // document.querySelector("#txtXepLoai").innerHTML = " " + nv.xetXepLoai();

  //Dom đến thẻ select

  //selectedIndex: là vị trí của thẻ option được chọn trong thẻ <select></select>
};

function renderTableNhanVien(arrNV) {
  var contentTable = "";
  for (var i = 0; i < arrNV.length; i++) {
    var nhanVien = arrNV[i];
    contentTable += `
    <tr>
    <td>${nhanVien.maNhanVien}</td>
    <td>${nhanVien.tenNhanVien}</td>
    <td>${nhanVien.chucVu}</td>
    <td>${nhanVien.luongCoBan}</td>
    <td>${nhanVien.tinhTongLuong()}</td>
    <td>${nhanVien.gioLam}</td>

    <td>${nhanVien.xetXepLoai()}</td>
    <td><button class="btn btn-danger" onclick="xoaNhanVien('${
      nhanVien.maNhanVien
    }')">Xóa</button></td>
    <td><button class="btn btn-info" onclick="suaNhanVien('${
      nhanVien.maNhanVien
    }')">Sửa</button></td>
    </tr>`;
  }
  document.querySelector("#tblNhanVien").innerHTML = contentTable;
}

function xoaNhanVien(maNV) {
  for (var i = arryNhanVien.length - 1; i >= 0; i--) {
    var nv = arryNhanVien[i];
    if (nv.maNhanVien == maNV) {
      arryNhanVien.splice(i, 1);
    }
  }
  renderTableNhanVien(arryNhanVien);
}

function suaNhanVien(maSV) {
  for (var i = 0; i < arryNhanVien.length; i++) {
    var nv = arryNhanVien[i];
    if ((nv.maNhanVien = maSV)) {
      document.getElementById("maNhanVien").value = nv.maNhanVien;
      document.getElementById("tenNhanVien").value = nv.tenNhanVien;
      document.getElementById("luongCoBan").value = nv.luongCoBan;
      document.getElementById("gioLam").value = nv.gioLam;
    }
  }
}

document.getElementById("btnLuu").onclick = function () {
  var nhanVien = new NhanVien();
  var tagChucVu = document.querySelector("#chucVu");
  nhanVien.maNhanVien = document.querySelector("#maNhanVien").value;
  nhanVien.tenNhanVien = document.querySelector("#tenNhanVien").value;
  nhanVien.chucVu = tagChucVu[tagChucVu.selectedIndex].text;
  nhanVien.heSoChucVu = document.querySelector("#chucVu").value;
  nhanVien.luongCoBan = document.querySelector("#luongCoBan").value;
  nhanVien.gioLam = document.querySelector("#gioLam").value;
  nhanVien.tinhTongLuong();
  nhanVien.xetXepLoai();
  for (var i = 0; i < arryNhanVien.length; i++) {
    var nvUpdate = arryNhanVien[i];
    if ((nvUpdate.maNhanVien = nhanVien.maNhanVien)) {
      nvUpdate.tenNhanVien = nhanVien.tenNhanVien;
      nvUpdate.luongCoBan = nhanVien.luongCoBan;
      nvUpdate.chucVu = nhanVien.chucVu;
      nvUpdate.gioLam = nhanVien.gioLam;
      nhanVien.tinhTongLuong();
      nhanVien.xetXepLoai();
    }
  }

  renderTableNhanVien(arryNhanVien);
};
