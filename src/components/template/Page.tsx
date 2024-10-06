export interface PaginaProps {
  children: React.ReactNode;
  className?: string;
}

const Page = (props: PaginaProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col w-full">
        <main className={`flex-1 flex flex-col ${props.className ?? ""}`}>
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default Page;
