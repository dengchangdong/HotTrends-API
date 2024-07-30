import type { FC } from "hono/jsx";
import { html } from "hono/html";
import Layout from "./Layout.js";

const Error: FC = (props) => {
  return (
    <Layout title="Error | DailyTrands API">
      <main className="error">
        <div className="title">
          <h1 className="title-text">程序执行出错</h1>
          {props?.error ? <p className="content">{props.error}</p> : null}
        </div>
      </main>
    </Layout>
  );
};

export default Error;
