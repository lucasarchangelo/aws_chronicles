import ActionButtons from "@/components/ActionButtons";
import Chain from "@/components/Chain";

export const Layout = ({
  leftSlot,
  footer,
}: {
  leftSlot?: React.ReactNode;
  footer?: React.ReactNode;
}) => {
  return (
    <main className="overflow-hidden h-[calc(100vh-80px)]">
      <Chain />
      <div className="flex h-4/5 mx-auto container justify-between py-4 px-10">
        <div className="flex items-center justify-center flex-col gap-4">
          <ActionButtons />
        </div>
        <div className="flex w-2/3">{leftSlot}</div>
      </div>
      <div className="w-full h-1/5 flex items-end justify-end">{footer}</div>
    </main>
  );
};
