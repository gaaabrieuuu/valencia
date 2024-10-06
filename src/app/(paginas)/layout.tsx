import Page from "@/components/template/Page";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return <Page>{props.children}</Page>;
};

export default Layout;
