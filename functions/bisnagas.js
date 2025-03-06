function calcularBisnagas(valorCompra) {
  if (valorCompra < 479) return 0;
  if (valorCompra >= 479 && valorCompra < 679) return 4;
  if (valorCompra >= 679 && valorCompra < 879) return 6;
  if (valorCompra >= 879 && valorCompra < 1109) return 8;
  if (valorCompra >= 1109 && valorCompra < 1289) return 10;
  if (valorCompra >= 1289 && valorCompra < 1629) return 12;
  if (valorCompra >= 1629 && valorCompra < 1989) return 16;
  if (valorCompra >= 1989 && valorCompra < 2339) return 20;
  if (valorCompra >= 2339 && valorCompra < 2639) return 24;
  if (valorCompra >= 2639 && valorCompra < 2829) return 28;
  if (valorCompra >= 2829 && valorCompra < 3159) return 32;
  if (valorCompra >= 3159 && valorCompra < 3359) return 36;
  if (valorCompra >= 3359 && valorCompra < 3689) return 40;
  if (valorCompra >= 3689 && valorCompra < 3869) return 44;
  if (valorCompra >= 3869 && valorCompra < 4189) return 52;
  if (valorCompra >= 4189 && valorCompra < 4389) return 56;
  if (valorCompra >= 4389 && valorCompra < 4679) return 60;
  if (valorCompra >= 4679 && valorCompra < 4869) return 64;
  if (valorCompra >= 4869 && valorCompra < 5159) return 68;
  if (valorCompra >= 5159 && valorCompra < 5319) return 72;
  if (valorCompra >= 5319 && valorCompra < 5609) return 76;
  if (valorCompra >= 5609 && valorCompra < 5729) return 80;
  if (valorCompra >= 5729 && valorCompra < 6019) return 84;
  if (valorCompra >= 6019 && valorCompra < 6219) return 88;
  if (valorCompra >= 6219 && valorCompra < 6489) return 92;
  if (valorCompra >= 6489 && valorCompra < 6659) return 96;
  if (valorCompra >= 6659) {
    const incremento = Math.floor((valorCompra - 6659) / 66);
    return 100 + incremento;
  }
  return 0; 
}

export default calcularBisnagas;

