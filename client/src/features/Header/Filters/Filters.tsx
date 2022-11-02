import React, { ChangeEvent } from "react";
import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { useFilters } from "../../../providers";
import { ReactNode } from "react";

interface CategoryFilterProps {
  value: string;
  label: ReactNode;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  checked: boolean;
}

function CategoryFilter({
  value,
  label,
  checked,
  onChange,
}: CategoryFilterProps) {
  return (
    <Checkbox
      onChange={onChange}
      colorScheme="blue"
      value={value}
      checked={checked}
      defaultChecked={checked}
    >
      {label}
    </Checkbox>
  );
}

const categories = [
  { label: "News", value: "news" },
  { label: "Sports", value: "sports" },
  { label: "Business", value: "business" },
  { label: "Fashion", value: "finance" },
  { label: "Nightlife", value: "nightlife" },
  { label: "Food", value: "food" },
];

export function Filters() {
  const { filters, setFilters } = useFilters();
  const updateCategories = (category: string) => {
    setFilters({
      categories: filters.categories.includes(category)
        ? filters.categories.filter((cat) => cat !== category)
        : [...filters.categories, category],
    });
  };

  return (
    <Flex gap={4}>
      <Text>I am interested in:</Text>
      {categories.map((category) => (
        <CategoryFilter
          {...category}
          key={category.value}
          checked={filters.categories.includes(category.value)}
          onChange={(event) => updateCategories(event.currentTarget.value)}
        />
      ))}
    </Flex>
  );
}
