export const Real = (e) => {
  let value = "";
  e.currentTarget ? (value = e.currentTarget.value) : (value = e);

  value = value.replace(/\D/g, "");
  value = value.replace(/^/, "R$ ");
  if (value.length <= 4) {
    value = value.replace(/(\d{1})$/, "0,0$1");
  } else if (value.length <= 7) {
    if (value.indexOf("0,")) {
      value = value.replace(/\D/g, "");
      value = (+value).toString();
      value = value.replace(/^/, "R$ ");
    }
    value = value.replace(/(\d{2})$/, ",$1");
    if (value.length <= 4) {
      value = value.replace(/(\d{1})$/, "0,0$1");
    } else if (value.length <= 6) {
      value = value.replace(/\D/g, "");
      value = value.replace(/^/, "R$ ");
      value = value.replace(/(\d{2})$/, "0,$1");
    }
  } else {
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  }

  e.currentTarget ? (e.currentTarget.value = value) : (e = value);
  return e;
};

export function Numbers(e) {
  let value = "";
  e.currentTarget ? (value = e.currentTarget.value) : (value = e);

  value = value.replace(/\D/g, "");
  if (+value > 80) {
    value = 80;
  }

  e.currentTarget ? (e.currentTarget.value = value) : (e = value);
  return e;
}

export function Zipcode(e) {
  let value = "";
  if (e.currentTarget) {
    e.currentTarget.maxLength = 9;
    value = e.currentTarget.value;
  } else {
    value = e;
  }

  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");

  e.currentTarget ? (e.currentTarget.value = value) : (e = value);

  return e;
}

export function Phone(e) {
  let value = "";
  if (e.currentTarget) {
    e.currentTarget.maxLength = 16;
    value = e.currentTarget.value;
  } else {
    value = e;
  }

  value = value.replace(/\D/g, "");
  value.length < 7
    ? (value = value.replace(/^(\d{2})/, "($1) "))
    : value.length < 11
    ? (value = value.replace(/^(\d{2})(\d{4})/, "($1) $2-"))
    : (value = value.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4"));

  e.currentTarget ? (e.currentTarget.value = value) : (e = value);

  return e;
}

export function CPF(e) {
  let value = "";
  if (e.currentTarget) {
    e.currentTarget.maxLength = 16;
    value = e.currentTarget.value;
  } else {
    value = e;
  }
  value = value.replace(/\D/g, "");
  if (value.length < 4) {
    value = value.replace(/^(\d{3})/, "$1");
  } else if (value.length < 7) {
    value = value.replace(/^(\d{3})/, "$1.");
  } else if (value.length < 10) {
    value = value.replace(/^(\d{3})(\d{3})/, "$1.$2.");
  } else {
    value = value.replace(/^(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");
  }

  e.currentTarget ? (e.currentTarget.value = value) : (e = value);
  return e;
}

export function FormatDate(e) {
  let data = new Date(e),  
    dia = data.getDate().toString(),
    diaF = dia.length === 1 ? "0" + dia : dia,
    mes = (data.getMonth() + 1).toString(),
    mesF = mes.length === 1 ? "0" + mes : mes,
    anoF = data.getFullYear();
  e = diaF + "/" + mesF + "/" + anoF;
  return e;
}
