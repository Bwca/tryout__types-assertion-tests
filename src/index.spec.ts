type GetCountOfSubString<
  String_ extends string,
  SubString extends string,
  Count extends unknown[] = []
> = String_ extends `${string}${SubString}${infer Tail}` ? GetCountOfSubString<Tail, SubString, [1, ...Count]> : Count['length'];

type Expect<T, U> = T extends U ? (U extends T ? true : false) : false;

export const assert = <T extends true | false>(arg: T extends true ? true : false) => arg;

it('Should assert true', () => {
  // Assert
  expect(assert<Expect<GetCountOfSubString<'a--a--aa--a', 'a'>, 5>>(true)).toBeTruthy();
});
