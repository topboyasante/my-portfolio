import { ReactNode } from "react";

type Props = {
  title: string;
  publishDate: string;
  children: ReactNode;
};

function BlogWrapper({ ...props }: Props) {
  return (
    <main className="my-5">
      <div>
        <h5>{props.title}</h5>
        <p className="text-neutral-500">{props.publishDate}</p>
      </div>
      <hr className="my-5" />
      <div>{props.children}</div>
    </main>
  );
}

export default BlogWrapper;
