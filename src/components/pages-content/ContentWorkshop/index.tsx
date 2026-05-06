import styles from "./styles/index.module.css";

export const ContentWorkshop = () => {
  return (
    <section id="content-workshop" className={styles.contentWorkshop}>
      <div className={styles.container}>
        <h2 className={styles.title}>Содержание практикума</h2>
        <ul className={styles.list}>
            <li className={styles.item}>
                <h3 className={styles.itemTitle}>Модуль 1</h3>
                <div className={styles.itemContent}>
                    <h4>Основы и захват видео</h4>
                    <p className={styles.itemDescription}>Первые шаги в области компьютерного зрения: от настройки камеры и захвата кадров до создания сетевой трансляции с дополненной графикой (OSD).</p>
                </div>
            </li>
            <li className={styles.item}>
                <h3 className={styles.itemTitle}>Модуль 2</h3>
                <div className={styles.itemContent}>
                    <h4>Фильтрация и поиск по цвету</h4>
                    <p className={styles.itemDescription}>Обучение камеры «избирательности»: использование цветовых пространств HSV и морфологических фильтров для точного выделения объектов.</p>
                </div>
            </li>
            <li className={styles.item}>
                <h3 className={styles.itemTitle}>Модуль 3</h3>
                <div className={styles.itemContent}>
                    <h4>Распознавание форм и навигация</h4>
                    <p className={styles.itemDescription}>Интеллектуальный анализ геометрии: определение форм предметов, внедрение систем навигации через чтение QR-кодов и ArUco-маркеров.</p>
                </div>
            </li>
            <li className={styles.item}>
                <h3 className={styles.itemTitle}>Модуль 4</h3>
                <div className={styles.itemContent}>
                    <h4>Развертывание нейросетей</h4>
                    <p className={styles.itemDescription}>Запуск современных нейросетей (YOLO, TensorFlow, Ultralytics) со всей мощностью встроенного аппаратного NPU-ускорителя.</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
};