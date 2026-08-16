import AuthLayout from "../components/AuthLayout";
import AuthInfoPanel from "../components/AuthInfoPanel";
import LoginFormPanel from "./components/LoginFormPanel";
import DashboardPreviewCard from "./components/DashboardPreviewCard";

const Login = () => {
  return (
    <AuthLayout mirror>
      <LoginFormPanel />
      <AuthInfoPanel
        headingLead="Controle total das suas"
        headingHighlight="finanças em um só lugar"
      >
        <DashboardPreviewCard />
      </AuthInfoPanel>
    </AuthLayout>
  );
};

export default Login;
