function swapNameSurname() {
    let fullName = prompt("Ad və soyad daxil edin:");
    fullName = fullName.trim();
    let parts = fullName.split(" ");
    let newFormat = parts[1] + " " + parts[0];
    document.write("Yeni format: " + newFormat);
    console.log(newFormat);
  }
function showInitials() {
    let fullName = prompt("Ad və soyad daxil edin:");
    fullName = fullName.trim() // boşluqları sil
    let parts = fullName.split(" ");
    let initials = parts[0].charAt(0).toUpperCase() + parts[1].charAt(0).toUpperCase();
    document.write("Baş hərflər: " + initials);
    console.log(initials);
}