// Component.module.css
.title {
    color: blue;
    font-size: 20px;
  }
  
  // Component.js
  import styles from './Component.module.css';
  
  const Component = () => (
    <div className={styles.title}>
      This is a styled component.
    </div>
  );
  