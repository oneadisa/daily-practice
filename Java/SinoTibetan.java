class SinoTibetan extends Language {
  SinoTibetan(String name, int numSpeakers) {
    super(name, numSpeakers, "Asia", "subject-object-verb");
    if (language.contains("Chinese")) {
      this.wordOrder = "subject-verb-object";
    }
  }
}