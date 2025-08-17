const env = {
  siteApi: "https://admin.deepware.ir/api",

  siteApiUrl: "https://admin.deepware.ir",
};
export function jalali_to_gregorian(jy, jm, jd) {
  var sal_a, gy, gm, gd, days;
  jy += 1595;
  days =
    -355668 +
    365 * jy +
    ~~(jy / 33) * 8 +
    ~~(((jy % 33) + 3) / 4) +
    jd +
    (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
  gy = 400 * ~~(days / 146097);
  days %= 146097;
  if (days > 36524) {
    gy += 100 * ~~(--days / 36524);
    days %= 36524;
    if (days >= 365) days++;
  }
  gy += 4 * ~~(days / 1461);
  days %= 1461;
  if (days > 365) {
    gy += ~~((days - 1) / 365);
    days = (days - 1) % 365;
  }
  gd = days + 1;
  sal_a = [
    0,
    31,
    (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
  return [gy, gm, gd];
}
export function normalPriceCount(priceText, count) {
  if (!priceText || priceText === null || priceText === undefined) return "";

  try {
    priceText = priceText.split(" ")[0];
  } catch {}

  if (priceText === "0" || priceText === 0) return "-";
  var rawPrice =
    parseInt(priceText.toString().replace(/\D/g, "")) * (count ? count : 1);
  //console.log(rawPrice,priceText)
  return rawPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    .replace(/^\D+/g, "");
}
export function normalPriceCalc(priceText, count) {
  if (!priceText || priceText === null || priceText === undefined) return "";

  // try{priceText =priceText.split(' ')[0];}catch{}
  priceText = priceText.toString().split(".")[0];
  console.log(priceText);
  if (priceText === "0" || priceText === 0) return "-";
  var rawPrice =
    parseInt(priceText.toString().replace(/\D/g, "")) * (count ? count : 1);
  //console.log(rawPrice,priceText)
  return rawPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    .replace(/^\D+/g, "");
}

export function normalPriceRound(priceText, count, tax) {
  if (!priceText || priceText === null || priceText === undefined) return "";

  try {
    priceText = priceText.split(" ")[0];
  } catch {}
  if (priceText === "0" || priceText === 0) return "رایگان";
  priceText = priceText.toString().split(".")[0];
  var rawPrice =
    parseInt(priceText.toString().replace(/\D/g, "")) *
    (count ? count : 1) *
    (tax ? tax : 1);
  rawPrice = parseInt(Math.round(rawPrice / 1000)) * 1000;
  return rawPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    .replace(/^\D+/g, "");
}
export function normalArrayRound(priceArray) {
  if (!priceArray || !priceArray.length) return "";

  var rawPrice = 0;
  for (var i = 0; i < priceArray.length; i++) {
    var price = priceArray[i].toString().split(".")[0];
    rawPrice += parseInt(price.replace(/\D/g, ""));
  }
  rawPrice = parseInt(Math.round(rawPrice / 1000)) * 1000;
  return rawPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    .replace(/^\D+/g, "");
}
export function normalArrayCount(priceArray) {
  if (!priceArray || !priceArray.length) return "";

  var rawPrice = 0;
  for (var i = 0; i < priceArray.length; i++) {
    var price = priceArray[i].toString().split(".")[0];
    rawPrice += parseInt(price.replace(/\D/g, ""));
  }
  // rawPrice = parseInt(Math.round(rawPrice/1000))*1000
  return rawPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    .replace(/^\D+/g, "");
}
export function minusArrayRound(price, minus) {
  if (!price) return "";
  if (!minus) return price;

  var rawPrice = parseInt(price.toString().replace(/\D/g, ""));
  var rawMinus = parseInt(minus.toString().replace(/\D/g, ""));
  rawPrice = rawPrice - rawMinus;
  rawPrice = parseInt(Math.round(rawPrice / 1000)) * 1000;
  return rawPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    .replace(/^\D+/g, "");
}
export function PriceDiscount(priceText, count, discountText) {
  if (!discountText) discountText = "0";
  if (priceText === null || priceText === undefined) return priceText;
  var rawPrice = priceText.toString().replaceAll(",", "");
  var rawDiscount = discountText.toString().replace("%", "");
  var priceTemp = normalPriceCount(
    (rawPrice * parseInt(count) * (100 - rawDiscount)) / 100
  );
  return priceTemp ? priceTemp.toString().split(".")[0] : "";
}
export function PriceDiscountTax(priceText, count, discountText, tax) {
  if (!discountText) discountText = "0";
  if (priceText === null || priceText === undefined) return priceText;
  var rawPrice = priceText.toString().replaceAll(",", "");
  var rawDiscount = discountText.toString().replace("%", "");
  var priceTemp = normalPriceCount(
    (rawPrice * parseInt(count) * (100 - rawDiscount)) / 100,
    tax
  );
  var priceNoTax = priceTemp ? priceTemp.toString().split(".")[0] : 0;
  console.log(priceTemp);
  return normalPriceRound(priceTemp);
}
export function PageInfoFunction(orderInfo, filters) {
  var totalPage = orderInfo.size
    ? parseInt(
        parseInt(orderInfo.size) /
          parseInt(filters.pageSize ? filters.pageSize : "10")
      )
    : 0;
  var currentPage = filters.offset ? filters.offset : 0;
  if (currentPage > totalPage) currentPage = 0;
  return {
    show: true,
    totalPage: totalPage,
    totalItem: orderInfo.size,
    currentPage: currentPage,
    allowNext: currentPage > 0 ? true : false,
    allowPre: currentPage == totalPage ? false : true,
  };
}
var fulldays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const sortArray = (array, sort, type) => {
  var sortArray = [];
  if (!sort) return array;
  if (type == 1) {
    sortArray = array.sort(function (a, b) {
      var textA = a[sort].toUpperCase();
      var textB = b[sort].toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  } else {
    sortArray = array.sort((a, b) => a[sort] - b[sort]);
  }
  return sortArray;
};
export const CheckAccess = (token, pageUrlRaw) => {
  if (!token) return "";
  var pageUrl = pageUrlRaw && pageUrlRaw.toLowerCase();
  if (token.access == "manager") return "full";
  var access =
    token.profile &&
    token.profile.find((item) => item.title.toLowerCase() === pageUrl);
  return access ? access.state : "";
};

export default env;
