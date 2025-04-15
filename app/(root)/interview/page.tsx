import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/action/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user?.name!}
        userId={user?.id}
        // Remove the profileImage prop as it is not defined in AgentProps
        type="generate"
      />
    </>
  );
};

export default Page;