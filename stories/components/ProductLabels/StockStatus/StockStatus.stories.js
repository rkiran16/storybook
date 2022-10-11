import { StockStatus } from "./StockStatus";

export default {
  title: "Components/ProductLabels/StockStatus",
  parameters: {
    layout: "centered",
    zeplinLink:
      "https://app.zeplin.io/project/62902a463701ffb0e532df2b/screen/63053ee9c9b39414a05fab9b",
  },
  argTypes: {
    variation: {
      name: "Color Variations",
      control: { type: "select" },
      description: "Assign Color Variations",
      options: ["success", "danger", "warning", "info"],
      table: {
        type: { summary: "select" },
        defaultValue: { summary: "info" },
      },
    },
  },
};

const StockStatusTemplate = (args) => StockStatus(args);

export const InStock = StockStatusTemplate.bind({});
InStock.args = {
  title: "IN STOCK",
  variation: "success",
  count: 378,
};
export const LowStock = StockStatusTemplate.bind({});
LowStock.args = {
  title: "LOW STOCK",
  variation: "warning",
  count: 18,
};
export const OutOfStock = StockStatusTemplate.bind({});
OutOfStock.args = {
  title: "OUT OF STOCK",
  variation: "danger",
  count: 0,
};

export const AlertBadge = StockStatusTemplate.bind({});
AlertBadge.args = {
  title: "",
  variation: "info",
  count: 7,
};
