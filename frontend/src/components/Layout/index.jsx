import { Layout, Spin } from "antd";

const AppLayout = ({ children, loading }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Content style={{ padding: "20px" }}>
        {loading ? (
          <div className="loading-spinner">
            <Spin size="large" />
          </div>
        ) : (
          children
        )}
      </Layout.Content>
    </Layout>
  );
};

export default AppLayout;
