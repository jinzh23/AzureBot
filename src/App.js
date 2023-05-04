import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ContainerLeft from "./components/ContainerLeft";
import ContainerRight from "./components/ContainerRight";
import styles from "./components/ChatbotTurners.module.css";

const App = () => {
  return (
    <div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <Header />
      <section className={styles.home}>
        <ContainerLeft />
        <ContainerRight />
      </section>
    </div>
  );
};

export default App;
