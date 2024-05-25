import SupportedLanguages from "../content/SupportedLanguages.json";

const Language = () => {
  return (
    <div className="flex flex-row">
      {SupportedLanguages.reduce((acc, language, index) => {
        acc.push(
          <div key={index} className="text-black font-semibold text-lg">
            {language.name}
          </div>
        );
        if (index < SupportedLanguages.length - 1) {
          acc.push(
            <span key={`separator-${index}`} className="mx-2 text-black">
              |
            </span>
          );
        }
        return acc;
      }, [])}
    </div>
  );
};

export default Language;
