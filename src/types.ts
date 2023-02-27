export type PostFrontMatter = {
  date: string;
  slug: string;
  title: string;
  description: string;
  category: string;
};

export type Posts = {
  node: {
    excerpt?: string;
    frontmatter: PostFrontMatter;
    id: string;
  };
};

export type Category = "HTML" | "CSS" | "Javascript" | "React";
