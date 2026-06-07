export type NavItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
};

export type Feature = {
  title: string;
  text: string;
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: string[];
};

export type MenuGroup = {
  title: string;
  image?: ImageAsset;
  price?: string;
  description?: string;
  items: MenuItem[];
};

export type Testimonial = {
  quote: string;
  author: string;
};

export type ContactInfo = {
  phone: string;
  email?: string;
  address: string;
  hours: string[];
  details?: string[];
  mapEmbedUrl?: string;
  mapUrl?: string;
  photos?: ImageAsset[];
};

export type WebOrderLink = {
  label: string;
  href?: string;
  logo?: ImageAsset;
  logoText?: string;
  rating?: string;
  campaign?: string;
};

export type Banner = {
  title?: string;
  text?: string;
  href?: string;
  linkLabel?: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
  items?: Array<{
    title: string;
    text: string;
    href: string;
    linkLabel?: string;
    logo?: ImageAsset;
  }>;
};

export type BranchStatus = "active" | "history" | "verification-required";

export type BranchLocation = {
  name: string;
  status: BranchStatus;
  address?: string;
  phone?: string;
  hours?: string[];
  note?: string;
};

export type BusinessContent = {
  business: {
    name: string;
    type: string;
    tagline: string;
    topLine?: string;
    description: string;
    seoTitle: string;
    seoDescription: string;
    logo?: ImageAsset;
    footerText?: string;
  };
  navigation: NavItem[];
  hero: {
    eyebrow?: string;
    title?: string;
    text?: string;
    image: ImageAsset;
    slides?: ImageAsset[];
    primaryAction?: NavItem;
    secondaryAction?: NavItem;
  };
  about: {
    title: string;
    subtitle?: string;
    text: string;
    image: ImageAsset;
  };
  features?: Feature[];
  gallery?: ImageAsset[];
  menu: {
    title: string;
    intro?: string;
    notice?: string;
    items?: MenuItem[];
    groups?: MenuGroup[];
  };
  testimonials?: Testimonial[];
  contact: ContactInfo;
  banner?: Banner;
  webOrder?: {
    title: string;
    links: WebOrderLink[];
  };
  branches?: BranchLocation[];
  posts?: Array<{
    title: string;
    date: string;
    text: string;
  }>;
  paymentMethods?: {
    title: string;
    description: string;
    methods: Array<{ label: string; items: string }>;
  };
  reviews?: {
    title: string;
    text?: string;
    readReviewsLabel?: string;
    getReviewsLabel?: string;
    readReviewsLink?: string;
    getReviewsLink?: string;
  };
  party?: {
    title: string;
    subtitle: string;
    description: string;
    notice: string;
    summary: { image: ImageAsset; title: string; text: string[] };
    courses: Array<{ title: string; price: string; food: string; drink: string }>;
  };
};
