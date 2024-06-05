import React from "react";
import styles from "../main_services.module.css"

const AuditHeader: React.FC = () =>{
  // const [routeName, setRouteName] = useState("");

  // useEffect(() => {
  //   setRouteName(window.location.pathname);
  // });

  return (
    <header className={styles.services_header}>
      <div className={styles.services_header_wrapper}>
        <div className={styles.services_header_container}>
            <h3>
              Audit & <span>Assurance</span>
            </h3>
        </div>
      </div>
    </header>
  );
}

export default AuditHeader;
