
const changeMinToHours = data => {
    var nbHour = parseInt(data / 60);
    var nbminuteRestante = data % 60;
    if (nbminuteRestante == 0) {
      if (nbHour < 10) {
        nbHour = '0' + nbHour;
      }
      return nbHour + ':00';
    } else {
      if (nbminuteRestante < 10) {
        nbminuteRestante = '0' + nbminuteRestante;
      }
      if (nbHour < 10) {
        nbHour = '0' + nbHour;
      }
      return nbHour + ':' + nbminuteRestante;
    }
  };
  
  const transformDate = data => {
    const months = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];
    const parts = data.split('-');
    const date = new Date(parts[2], parts[1] - 1, parts[0]);
    // console.log(date);
    return (
      date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
    );
  };
  