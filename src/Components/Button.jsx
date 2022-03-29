import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;

    if (currentChange === nextChange && currentLocale === nextLocale) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { change, locale } = this.props;

    return (
      <div className="button">
        {/* <button type="button" onClick={change}>Click Here</button> */}

        <button type="button" onClick={() => change(locale)}>
          {/* {locale === "en-US"
            ? "change clock to United States"
            : "change clock to Bangladesh"} */}
          Click Here
        </button>
      </div>
    );
  }
}

export default Button;
