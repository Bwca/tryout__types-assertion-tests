/**
 * Sources: 
 * https://dev.to/tylim88/typescript-test-your-generic-type-part-1-4jbc
 * https://www.typescriptlang.org/play?#code/C4TwDgpgBA4hwGED2BXAdsA8gMwMooCNdgAnASzQHMAeAKAEhjyqB9KCAD2AjQBMBnKP1IVKAGgb4iIquy48BQmeIbJ0wOdz6D0AazRIA7mgDaAXSgBeKOdoA+K1Cai2nLYoAGAEgDew5pQAvr5SzlTBPhTYECRQACoAhmQANoEeDAD8sPBqGDihytSJKWJOhGHiNgCMpQB09bnAZnYMAFxQjSYA5Mk8lMAAFl1mtLSgkFAAohyQAMbARaUAqg7WcZoKgktQWQAU226b8TtQpCjQ7dgJyfwQAJRQl9e3o5xgSCQas0howlAJ-Fun0cRQ22lOJHOUAAPlArjcIHZdgkSJRHsdDuCztAstj0fDbg9LA4UZRRgCgQtpnMFnBEKg8nhyoUugkALRs9mcrkJLqlVldOylACsdiR2IeAHpJRDzqUwBTThBhLQKTEqTMIPNqHTGvlmQFqKyOTyeXyoAKhVAqmLdgT7lBpXDnhBSlcUkrhEA
 */

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
