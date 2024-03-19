export class PersonDTO {
  static build(name, wanted, imageBuffer) {
    const person = {
      name,
      wanted,
      image: imageBuffer,
    };

    return person;
  }
}
