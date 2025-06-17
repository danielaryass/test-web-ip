import { IP_CAN_ACCESS } from "@/const/const";
import { headers } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const IP = headersList.get("x-forwarded-for") as string;
  const TESTIP = "103.125.43.174"
  const canAccess = IP_CAN_ACCESS.includes(TESTIP);
  console.log(canAccess)
  console.log(IP)
  console.log(IP_CAN_ACCESS)

  if (!canAccess) {
    return (
      <>
        <p>Access Denied your ip is {IP} </p>
        <ol>
          {IP_CAN_ACCESS.map((ip) => (
            <li key={ip}>{ip}</li>
          ))}
        </ol>
      </>
    );
  }
  return <>{children}</>;
}
