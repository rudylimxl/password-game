const style = {
  success: { backgroundColor: "lightgreen" },
  fail: { backgroundColor: "pink" },
};

const MapCheck = (props) => {
  if (props.mapCheck.active) {
    return (
      <div
        className="checks"
        style={props.mapCheck.valid ? style.success : style.fail}
      >
        {props.mapCheck.valid ? "✔ " : "✘ "}Password must contain this city name
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1689439502198!6m8!1m7!1sCAoSLEFGMVFpcE5LUHFGWkh6YTFRb0M2dmtjZFNaTzFraUNBa1g1TW5vaXdEQWgx!2m2!1d48.8629262!2d2.2874785!3f309.6967639415252!4f-3.32060561062967!5f0.7820865974627469"
          width="90%"
          height="300"
        ></iframe>
      </div>
    );
  }
};
export default MapCheck;
