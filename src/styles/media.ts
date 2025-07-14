const sizes = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
};

export const media = {
    mobile: (styles: TemplateStringsArray) => `
      @media (max-width: ${sizes.mobile}px) {
        ${styles}
      }
    `,
    tablet: (styles: TemplateStringsArray) => `
      @media (max-width: ${sizes.tablet}px) {
        ${styles}
      }
    `,
    desktop: (styles: TemplateStringsArray) => `
      @media (min-width: ${sizes.desktop}px) {
        ${styles}
      }
    `,
};
