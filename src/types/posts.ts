export type PostType = {
  id: string;
  date: string;
  title: string;
  cover?: string;
  contentHtml?: string;
};

export type PagePropsType = {
  postsData: PostType[];
};
