// 유효성 검사
export function InspectInput(data: string, type: string) {
  switch (type) {
    // 2~10글자, 영어, 한글, 숫자만 가능
    case "nickname":
      const nickname = /^([a-zA-Z0-9가-힣]){2,10}$/;
      return nickname.test(data);
    case "email":
      const email =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      return email.test(data);
    case "password":
      const password =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/;
      //최소 8자 및 최대 16자, 대문자 하나 이상, 소문자 하나 이상, 숫자 하나 이상, 특수 문자 하나 이상
      return password.test(data);
    default:
      return false;
  }
}

export const priceAddComma = (price: string) => {
  let priceLen: number = price.length - 1;
  let result: string = "";
  let count: number = 0;
  if (price.length > 3) {
    for (let i = priceLen; i >= 0; i--) {
      result = price[i] + result;
      count++;
      if (count % 3 === 0 && i) {
        result = "," + result;
      }
    }
  } else {
    result = price;
  }
  return result;
};
