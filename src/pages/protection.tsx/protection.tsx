import type { ReactNode } from "react";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface AuthenticatedRouteProps {
  children: ReactNode;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  children,
}) => {
  const { user } = useUser();
  const router = useRouter();

  console.log(user);

  useEffect(() => {
    if (!user) {
      // Redirect to the sign-in page
      router.push("/dashboard/order").catch((error) => {
        // Handle navigation error, if needed
        console.error("Error navigating to sign-in page:", error);
      });
    }
  }, [user]);

  if (!user) {
    // Render nothing while the redirection happens
    return <>{children}</>;
  }

  // User is authenticated, render the children
  return <>{children}</>;
};

export default AuthenticatedRoute;
