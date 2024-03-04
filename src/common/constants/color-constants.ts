export type TColor = {
  name: string;
  value: string;
  isBrightColor: boolean;
};

export const DEFAULT_COLORS = [
  {
    name: "Black",
    value: "#000000",
    isBrightColor: false,
  },
  {
    name: "Dark Grey 4",
    value: "#434343",
    isBrightColor: false,
  },
  {
    name: "Dark Grey 3",
    value: "#666666",
    isBrightColor: false,
  },
  {
    name: "Dark Grey 2",
    value: "#999999",
    isBrightColor: false,
  },
  {
    name: "Dark Grey 1",
    value: "#B7B7B7",
    isBrightColor: false,
  },
  {
    name: "Grey",
    value: "#CCCCCC",
    isBrightColor: false,
  },
  {
    name: "Light Grey 1",
    value: "#D9D9D9",
    isBrightColor: false,
  },
  {
    name: "Light Grey 2",
    value: "#EFEFEF",
    isBrightColor: true,
  },
  {
    name: "Light Grey 3",
    value: "#F3F3F3",
    isBrightColor: true,
  },
  {
    name: "White",
    value: "#FFFFFF",
    isBrightColor: true,
  },
  {
    name: "Red Berry",
    value: "#980100",
    isBrightColor: false,
  },
  {
    name: "Red",
    value: "#FE0000",
    isBrightColor: false,
  },
  {
    name: "Orange",
    value: "#FE9900",
    isBrightColor: false,
  },
  {
    name: "Yellow",
    value: "#FEFF00",
    isBrightColor: true,
  },
  {
    name: "Green",
    value: "#00FF00",
    isBrightColor: false,
  },
  {
    name: "Cyan",
    value: "#00FFFF",
    isBrightColor: false,
  },
  {
    name: "Cornflower Blue",
    value: "#4B85E8",
    isBrightColor: false,
  },
  {
    name: "Blue",
    value: "#1300FF",
    isBrightColor: false,
  },
  {
    name: "Purple",
    value: "#9900FF",
    isBrightColor: false,
  },
  {
    name: "Magenta",
    value: "#FF00FF",
    isBrightColor: false,
  },

  {
    name: "Light Red Berry 3",
    value: "#E6B8AF",
    isBrightColor: false,
  },
  {
    name: "Light Red 3",
    value: "#F4CCCC",
    isBrightColor: false,
  },
  {
    name: "Light Orange 3",
    value: "#FCE4CD",
    isBrightColor: true,
  },
  {
    name: "Light Yellow 3",
    value: "#FFF2CC",
    isBrightColor: true,
  },
  {
    name: "Light Green 3",
    value: "#D9EAD3",
    isBrightColor: true,
  },
  {
    name: "Light Cyan 3",
    value: "#D0DFE3",
    isBrightColor: false,
  },
  {
    name: "Light Cornflower Blue 3",
    value: "#C9DAF8",
    isBrightColor: false,
  },
  {
    name: "Light Blue 3",
    value: "#CFE1F3",
    isBrightColor: true,
  },
  {
    name: "Light Purple 3",
    value: "#D9D2E9",
    isBrightColor: true,
  },
  {
    name: "Light Magenta 3",
    value: "#EAD1DB",
    isBrightColor: true,
  },

  {
    name: "Light Red Berry 2",
    value: "#DC7E6B",
    isBrightColor: false,
  },
  {
    name: "Light Red 2",
    value: "#EA9999",
    isBrightColor: false,
  },
  {
    name: "Light Orange 2",
    value: "#F9CB9C",
    isBrightColor: false,
  },
  {
    name: "Light Yellow 2",
    value: "#FFE598",
    isBrightColor: true,
  },
  {
    name: "Light Green 2",
    value: "#B7D6A8",
    isBrightColor: false,
  },
  {
    name: "Light Cyan 2",
    value: "#A1C4C9",
    isBrightColor: false,
  },
  {
    name: "Light Cornflower Blue 2",
    value: "#A4C2F4",
    isBrightColor: false,
  },
  {
    name: "Light Blue 2",
    value: "#9FC5E8",
    isBrightColor: false,
  },
  {
    name: "Light Purple 2",
    value: "#B5A7D5",
    isBrightColor: false,
  },
  {
    name: "Light Magenta 2",
    value: "#D5A6BD",
    isBrightColor: false,
  },

  {
    name: "Light Red Berry 1",
    value: "#CC4125",
    isBrightColor: false,
  },
  {
    name: "Light Red 1",
    value: "#E06666",
    isBrightColor: false,
  },
  {
    name: "Light Orange 1",
    value: "#F6B26B",
    isBrightColor: false,
  },
  {
    name: "Light Yellow 1",
    value: "#FFD966",
    isBrightColor: false,
  },
  {
    name: "Light Green 1",
    value: "#93C47D",
    isBrightColor: false,
  },
  {
    name: "Light Cyan 1",
    value: "#76A5AE",
    isBrightColor: false,
  },
  {
    name: "Light Cornflower Blue 1",
    value: "#6C9EEB",
    isBrightColor: false,
  },
  {
    name: "Light Blue 1",
    value: "#6FA8DC",
    isBrightColor: false,
  },
  {
    name: "Light Purple 1",
    value: "#8D7CC3",
    isBrightColor: false,
  },
  {
    name: "Light Magenta 1",
    value: "#C27BA0",
    isBrightColor: false,
  },

  {
    name: "Dark Red Berry 1",
    value: "#A61B00",
    isBrightColor: false,
  },
  {
    name: "Dark Red 1",
    value: "#CC0000",
    isBrightColor: false,
  },
  {
    name: "Dark Orange 1",
    value: "#E59138",
    isBrightColor: false,
  },
  {
    name: "Dark Yellow 1",
    value: "#F1C231",
    isBrightColor: false,
  },
  {
    name: "Dark Green 1",
    value: "#6AA74F",
    isBrightColor: false,
  },
  {
    name: "Dark Cyan 1",
    value: "#45818E",
    isBrightColor: false,
  },
  {
    name: "Dark Cornflower Blue 1",
    value: "#3B78D8",
    isBrightColor: false,
  },
  {
    name: "Dark Blue 1",
    value: "#3E84C6",
    isBrightColor: false,
  },
  {
    name: "Dark Purple 1",
    value: "#664EA6",
    isBrightColor: false,
  },
  {
    name: "Dark Magenta 1",
    value: "#A64D78",
    isBrightColor: false,
  },

  {
    name: "Dark Red Berry 2",
    value: "#84200D",
    isBrightColor: false,
  },
  {
    name: "Dark Red 2",
    value: "#990001",
    isBrightColor: false,
  },
  {
    name: "Dark Orange 2",
    value: "#B45F05",
    isBrightColor: false,
  },
  {
    name: "Dark Yellow 2",
    value: "#BF9002",
    isBrightColor: false,
  },
  {
    name: "Dark Green 2",
    value: "#38761D",
    isBrightColor: false,
  },
  {
    name: "Dark Cyan 2",
    value: "#124F5C",
    isBrightColor: false,
  },
  {
    name: "Dark Cornflower Blue 2",
    value: "#1155CB",
    isBrightColor: false,
  },
  {
    name: "Dark Blue 2",
    value: "#0C5394",
    isBrightColor: false,
  },
  {
    name: "Dark Purple 2",
    value: "#351C75",
    isBrightColor: false,
  },
  {
    name: "Dark Magenta 2",
    value: "#741B47",
    isBrightColor: false,
  },

  {
    name: "Dark Red Berry 3",
    value: "#5B0F00",
    isBrightColor: false,
  },
  {
    name: "Dark Red 3",
    value: "#660000",
    isBrightColor: false,
  },
  {
    name: "Dark Orange 3",
    value: "#783F04",
    isBrightColor: false,
  },
  {
    name: "Dark Yellow 3",
    value: "#7E6000",
    isBrightColor: false,
  },
  {
    name: "Dark Green 3",
    value: "#274E12",
    isBrightColor: false,
  },
  {
    name: "Dark Cyan 3",
    value: "#0D343D",
    isBrightColor: false,
  },
  {
    name: "Dark Cornflower Blue 3",
    value: "#1B4487",
    isBrightColor: false,
  },
  {
    name: "Dark Blue 3",
    value: "#083763",
    isBrightColor: false,
  },
  {
    name: "Dark Purple 3",
    value: "#1F124D",
    isBrightColor: false,
  },
  {
    name: "Dark Magenta 3",
    value: "#4C1130",
    isBrightColor: false,
  },
];

export const DEFAULT_CUSTOM_COLORS = [
  {
    name: "Dark Orange 3",
    value: "#783F04",
    isBrightColor: false,
  },
  {
    name: "Dark grey 3",
    value: "#666666",
    isBrightColor: false,
  },
  {
    name: "Dark grey 2",
    value: "#999999",
    isBrightColor: false,
  },
  {
    name: "Light Cornflower Blue 1",
    value: "#6C9EEB",
    isBrightColor: false,
  },
  {
    name: "Dark Magenta 3",
    value: "#4C1130",
    isBrightColor: false,
  },
];
