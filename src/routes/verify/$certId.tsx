import { createFileRoute, redirect } from "@tanstack/react-router";

// Old verification links now open the public certificate page.
export const Route = createFileRoute("/verify/$certId")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/certificate/$certId", params: { certId: params.certId }, statusCode: 301 });
  },
});
