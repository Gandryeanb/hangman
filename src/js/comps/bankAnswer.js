class BankAnswer {
  constructor() {
    this.asnwer= [
      {
      q: 'dua di tambah tiga sama \n dengan?',
      a: 'LIMA'
    },
    {
      q: 'buah yang mempunyai duri?',
      a: 'DURIAN'
    },
    {
      q: 'panggilan hari untuk 2 hari \n dari hari sekarang?',
      a: 'LUSA'
    },
    {
      q: '.... salah satu hewan yang \n dilindungi di indonesia?',
      a: 'KOMODO'
    },
    {
      q: 'tanggal apa yang di tunggu \n semua orang ?',
      a: 'MERAH'
    }
    ]
  }
  
  getAnswer() {
    var ranNum = Math.floor(Math.random() * this.asnwer.length)
    this.currentAnswer = this.asnwer[ranNum]
    return this.currentAnswer
  }
}
