import AuthLayout from "../components/AuthLayout";
import AuthInfoPanel from "../components/AuthInfoPanel";
import RegisterFormPanel from "./components/RegisterFormPanel";
import GoalsPreviewCard from "./components/GoalsPreviewCard";

const FEATURES = [
  {
    title: "Metas financeiras",
    description: "Defina e acompanhe objetivos com progresso em tempo real",
  },
  {
    title: "Análises inteligentes",
    description: "Veja para onde vai seu dinheiro com gráficos claros",
  },
  {
    title: "Alertas de orçamento",
    description: "Seja avisado antes de ultrapassar seus limites",
  },
];

const Register = () => {
  return (
    <AuthLayout>
      <AuthInfoPanel
        headingLead="Tudo que você precisa para"
        headingHighlight="alcançar sua liberdade financeira"
        features={FEATURES}
      >
        <GoalsPreviewCard />
      </AuthInfoPanel>
      <RegisterFormPanel />
    </AuthLayout>
  );
};

export default Register;
