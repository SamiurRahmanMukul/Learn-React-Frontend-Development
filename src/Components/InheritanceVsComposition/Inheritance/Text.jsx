import Emoji from "./Emoji";

export default class Text extends Emoji {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const decoratedText = this.addEmoji("I am like JavaScript", "๐๐๐๐๐งก๐");

    return super.render(decoratedText);
  }
}
