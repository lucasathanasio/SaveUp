import { useState } from "react";

const daysFromPeriod = { "7 Dias": 7, "30 Dias": 30, "90 Dias": 90 };

export const useTransactionFilters = (data) => {
  const [filters, setFilters] = useState({
    search: "",
    category: "Todas",
    type: "Todas",
    period: null,
    startDate: "",
    endDate: "",
    minValue: "",
    maxValue: "",
  });

  const filteredTransactions = data.filter((transaction) => {
    const matchesSearch = transaction.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    const matchesCategory =
      filters.category === "Todas" || transaction.category === filters.category;

    const matchesType =
      filters.type === "Todas" ||
      transaction.type.toLowerCase() === filters.type.toLowerCase();

    const matchesPeriod = (() => {
      if (!filters.period) return true;
      const days = daysFromPeriod[filters.period];
      const transactionDate = new Date(transaction.date);
      const today = new Date();
      const diffInDays = (today - transactionDate) / (1000 * 60 * 60 * 24);
      return diffInDays <= days;
    })();

    const matchesDateRange =
      (filters.startDate === "" || transaction.date >= filters.startDate) &&
      (filters.endDate === "" || transaction.date <= filters.endDate);

    const matchesValue =
      (filters.minValue === "" || transaction.value >= filters.minValue) &&
      (filters.maxValue === "" || transaction.value <= filters.maxValue);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesType &&
      matchesPeriod &&
      matchesDateRange &&
      matchesValue
    );
  });

  return { filters, setFilters, filteredTransactions };
};
