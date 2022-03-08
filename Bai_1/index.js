const validate = (s) => {
  const openBracket = "{[(";
  const closeBracket = "}])";

  const result = [];
  // Lặp qua tất cả các kí tự có trong chuỗi
  for (let i = 0; i < s.length; ++i) {
    // Gắn kí tự vào biến char
    const char = s[i];
    // Nếu char có trong các dấu mở thì thêm vào result
    if (openBracket.includes(char)) result.push(char);
    // Nếu không thì kiểm tra xem có trong các dấu đóng không
    else if (closeBracket.includes(char)) {
      const index = closeBracket.indexOf(char);
      if (
        result.length === 0 ||
        result[result.length - 1] !== openBracket[index]
      )
        return false;
      else result.pop();
    }
  }

  return result.length === 0;
};

// const s = "()";
// const s = "()[]{}";
const s = "([}";

console.log(validate(s));
