import { ReactNode } from "react";
import styles from '../../../../md.module.css';
import BackButton from "@/components/ui/back-button";

type Props = {
  title: string;
  publishDate: string;
  children: ReactNode;
};

function BlogWrapper({ ...props }: Props) {
  return (
    <main className={`my-5 ${styles.markdown} w-full`}>
      <BackButton/>
      <div>
        <h5>{props.title}</h5>
        <p className="text-neutral-500">{props.publishDate}</p>
      </div>
      <br />
      <div className="w-full">{props.children}</div>
    </main>
  );
}

export default BlogWrapper;
