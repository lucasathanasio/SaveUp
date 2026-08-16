import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const AuthInfoPanel = ({
  headingLead,
  headingHighlight,
  features,
  children,
}) => {
  return (
    <div className="hidden md:flex md:w-1/2 flex-col justify-between bg-dark-blue p-10 text-white">
      <div>
        <p className="text-xs tracking-widest text-white/60 text-center mb-6">
          SAVE UP
        </p>
        <h1 className="text-2xl font-bold text-center leading-snug">
          {headingLead}{" "}
          <span className="text-light-green">{headingHighlight}</span>
        </h1>

        {features && (
          <ul className="mt-6 space-y-5">
            {features.map((feature) => (
              <li key={feature.title} className="flex gap-3 items-start">
                <RadioButtonCheckedIcon
                  style={{ fontSize: 18 }}
                  className="text-white/50 mt-0.5 shrink-0"
                />
                <div>
                  <p className="font-semibold text-sm">{feature.title}</p>
                  <p className="text-white/60 text-xs">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {children}
    </div>
  );
};

export default AuthInfoPanel;
