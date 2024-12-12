import OpenSourceList from "@/components/OpenSourceList";

export default async function OpenSourceProjects() {
  return (
    <div className="">
      <h2 className="text-2xl font-bold text-center py-4 my-4">开源项目</h2>
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-lg font-bold text-center">idea2app 开源项目</h3>
        <OpenSourceList user="idea2app" />

        <h3 className="text-lg font-bold text-center">EasyWebApp 开源项目</h3>
        <OpenSourceList user="EasyWebApp" />
      </div>
    </div>
  );
}
