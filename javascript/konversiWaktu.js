var konversiWaktu = function (waktu) {

  var jam = Math.floor(waktu / 60);
  var menit = waktu % 60;
  
   console.log(jam + ":" + menit);
};
konversiWaktu("210");