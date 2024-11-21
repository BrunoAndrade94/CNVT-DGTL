export default class Password {
  static new(size: number = 15): string {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = lowerCase.toUpperCase();
    const numbers = "0123456789";
    const specials = "!:;@#$%^&*[]{}/?-()_";

    const groups = [lowerCase, upperCase, numbers, specials];
    const password = [""];

    for (let i = 0; i < size; i++) {
      const group = groups[Math.floor(Math.random() * groups.length)];
      password.push(group[Math.floor(Math.random() * group.length)]);
    }

    return password.join("");
  }
}
