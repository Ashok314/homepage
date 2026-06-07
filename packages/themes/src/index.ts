export type BusinessTheme = {
  name: string;
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    primary: string;
    primaryText: string;
    accent: string;
    border: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  images?: {
    sectionTitleBackground?: string;
  };
  radius: string;
};

export const indianRestaurantTheme: BusinessTheme = {
  name: "Indian Restaurant",
  colors: {
    background: "#fffaf2",
    surface: "#ffffff",
    text: "#211a14",
    muted: "#66584d",
    primary: "#9f2d20",
    primaryText: "#ffffff",
    accent: "#d5972f",
    border: "#ead8bf"
  },
  fonts: {
    heading: "Georgia, 'Times New Roman', serif",
    body: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  radius: "8px"
};

export const binitaTheme: BusinessTheme = {
  name: "ビニタ",
  colors: {
    background: "#fffbf2",
    surface: "#ffffff",
    text: "#290e00",
    muted: "#5f4635",
    primary: "#f2630c",
    primaryText: "#ffffff",
    accent: "#b53e00",
    border: "#44880b"
  },
  fonts: {
    heading: "'Hiragino Mincho ProN', 'Yu Mincho', YuMincho, Georgia, serif",
    body: "'Hiragino Kaku Gothic ProN', 'Yu Gothic', Meiryo, ui-sans-serif, system-ui, sans-serif"
  },
  images: {
    sectionTitleBackground: "clients/binita/archive/all/titleback02.png"
  },
  radius: "8px"
};

export const themeToCssVars = (theme: BusinessTheme) =>
  [
    `--color-background: ${theme.colors.background}`,
    `--color-surface: ${theme.colors.surface}`,
    `--color-text: ${theme.colors.text}`,
    `--color-muted: ${theme.colors.muted}`,
    `--color-primary: ${theme.colors.primary}`,
    `--color-primary-text: ${theme.colors.primaryText}`,
    `--color-accent: ${theme.colors.accent}`,
    `--color-border: ${theme.colors.border}`,
    `--font-heading: ${theme.fonts.heading}`,
    `--font-body: ${theme.fonts.body}`,
    `--section-title-background: ${theme.images?.sectionTitleBackground ? `url("${theme.images.sectionTitleBackground}")` : "none"}`,
    `--radius: ${theme.radius}`
  ].join("; ");
