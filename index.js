// Bài tập 3
document.getElementById('btnBaitap3').onclick = function () {
    let hoten3 = document.getElementById('hoten3').value
    let nguoiphuthuoc = +document.getElementById('nguoiphuthuoc').value;
    let thunhapcuanam = +document.getElementById('thunhapcuanam').value;
    let tongthue;
    let thunhapchiuthue;

    thunhapchiuthue = thunhapcuanam - 4e+6 - nguoiphuthuoc * 16e+5;
    if (thunhapchiuthue <= 0) {
        tongthue = 0;
    } else if (thunhapchiuthue <= 6e+7) {
        tongthue = thunhapchiuthue * 0.05
    } else if (thunhapchiuthue > 6e+7 && thunhapchiuthue <= 12e+7) {
        tongthue = thunhapchiuthue * 0.1
    } else if (thunhapchiuthue > 12e+7 && thunhapchiuthue <= 21e+7) {
        tongthue = thunhapchiuthue * 0.15
    } else if (thunhapchiuthue > 21e+7 && thunhapchiuthue <= 384e+6) {
        tongthue = thunhapchiuthue * 0.2
    } else if (thunhapchiuthue > 384e+6 && thunhapchiuthue <= 624e+6) {
        tongthue = thunhapchiuthue * 0.25
    } else if (thunhapchiuthue > 624e+6 && thunhapchiuthue <= 960e+6) {
        tongthue = thunhapchiuthue * 0.3
    } else {
        tongthue = thunhapchiuthue * 0.35
    }

    document.getElementById('ketqua3').innerHTML = " Họ tên: " + hoten3 + " ; Tiền thuế thu nhập cá nhân: " + tongthue.toLocaleString() + " VND";
}


//Bài tập 4
// let showEl = document.getElementById("show")
// showEl.onclick = function () {
//     let mdn = document.getElementById("mdn");
//     mdn.classList.add("d-block")
// }
// function myFunction() {
//     document.getElementById("khuvuc").value = DN
//     let mdn = document.getElementById("mdn");
//     mdn.classList.add("d-block")
// }


function myFunction() {
    let value = document.getElementById('khuvuc').value;
    switch (value) {
        case "":
            let mdn3 = document.getElementById("mdn");
            mdn3.classList.add("d-none")
            mdn3.classList.remove("d-block")
            break
        case "ND":
            let mdn1 = document.getElementById("mdn");
            mdn1.classList.add("d-none")
            mdn1.classList.remove("d-block")
            break
        case "DN":
            let mdn2 = document.getElementById("mdn");
            mdn2.classList.add("d-block")
            mdn2.classList.remove("d-none")
            break
    }

}

document.getElementById("btnBaitap4").onclick = function () {
    let khuvuc = document.getElementById('khuvuc').value;
    let phihoadon = 4.5;
    let phidichvu = 20.5;
    let kenhcaocap = +document.getElementById('kenhcaocap').value;
    let phithuekenhcaocap = kenhcaocap * 7.5;
    let phihoadon2 = 15;
    let phithuekenhcaocap2 = kenhcaocap * 50;
    let phidichvu2 = 0
    let soketnoi = +document.getElementById('skn').value;
    let tiencap = 0;
    let maKh = document.getElementById("maKh").value;
    switch (khuvuc) {
        case "ND":
            tiencap = phihoadon + phidichvu + phithuekenhcaocap;
            break
        case "DN":
            if (soketnoi <= 10) {
                tiencap = phihoadon2 + phidichvu2 + phithuekenhcaocap2 + 75;
            } else {
                tiencap = phidichvu2 + phihoadon2 + phithuekenhcaocap2 + 75 + (soketnoi - 10) * 5
            }
            break
    }

    document.getElementById('ketqua4').innerHTML = " Mã khách hàng: " + maKh + " ; " + "Tiền cáp $ " + tiencap
}