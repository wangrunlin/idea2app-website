import TeamMember from "@/components/TeamMember";

export default async function Team() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-4 my-4">团队成员</h2>

      <div className="max-w-screen-lg mx-auto">
        <TeamMember />
      </div>
    </div>
  );
}
