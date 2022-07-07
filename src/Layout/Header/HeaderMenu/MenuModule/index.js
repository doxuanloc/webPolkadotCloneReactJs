import styles from "./MenuModule.module.scss";
function MenuModule() {
  const LANGUAGE_ITEM = [
    { code: "en", name: "English" },
    { code: "eo", name: "Esperanto" },
    { code: "et", name: "Estonian" },
    { code: "ee", name: "Ewe" },
    { code: "fo", name: "Faroese" },
    { code: "fj", name: "Fijian" },
    { code: "fi", name: "Finnish" },
    { code: "fr", name: "French" },
  ];
  return (
    <div className={styles.wrapper}>
      <ul style={{ listStyle: "none", paddingLeft: 8 }}>
        {LANGUAGE_ITEM.map((language) => (
          <li key={language.code}>
            <button className={styles.btn}>{language.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuModule;
