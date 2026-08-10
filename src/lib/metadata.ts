export const siteUrl = "https://ivanreinaldo.com";

export const siteMetadata = {
  name: "Ivan Reinaldo",
  title: "Ivan Reinaldo — Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer specializing in TypeScript, React, Next.js, Node.js and production backend systems.",
  url: siteUrl,
  email: "reinaldoivan777@gmail.com",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
