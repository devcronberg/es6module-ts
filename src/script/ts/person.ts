export class Person {
  constructor(public name: string) {}

  public NameToUpper(): string {
    return this.name.toUpperCase();
  }
}
