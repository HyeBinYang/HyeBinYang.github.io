export type TPost = {
  node: {
    excerpt?: string;
    frontmatter: {
      date: string;
      slug: string;
      title: string;
      category: string;
    };
    id: string;
  };
};
