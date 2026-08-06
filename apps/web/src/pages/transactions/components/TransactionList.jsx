const groupByDate = (transactions) =>
  transactions.reduce((groups, t) => {
    (groups[t.date] ||= []).push(t);
    return groups;
  }, {});

const formatDateBr = (isoDate) => {
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
};

const TransactionsList = ({ transactions = [] }) => {
  const grouped = groupByDate(transactions);

  return (
    <div className="flex flex-col gap-4">
      {Object.entries(grouped).map(([date, items]) => (
        <div key={date}>
          <p className="text-dark-gray/70 text-sm font-medium mb-2">
            {formatDateBr(date)}
          </p>

          <div className="flex flex-col gap-3">
            {items.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between bg-white rounded-2xl p-4
                  hover:-translate-y-0.5 transition"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: t.iconBg }}
                  >
                    <t.icon
                      className="w-4 h-4"
                      style={{ color: t.iconColor }}
                    />
                  </span>
                  <div>
                    <p className="text-dark-gray font-medium text-sm">
                      {t.name}
                    </p>
                    <p className="text-dark-gray/80 text-xs">{t.category}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p
                    className={`text-sm font-semibold ${
                      t.type === "receita"
                        ? "text-medium-green"
                        : "text-medium-red"
                    }`}
                  >
                    {t.type === "receita" ? "+ " : "- "}R$
                    {t.value.toFixed(2).replace(".", ",")}
                  </p>
                  <p className="text-dark-gray/50 text-xs">{t.paymentMethod}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionsList;
