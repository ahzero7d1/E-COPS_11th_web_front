import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Program.module.css';

function Program(){
  return (
    <body>
    <header>
        <NavBar/>
    </header>
    <main className={styles.mainContainer}>
      {/* header */}
      <div className={styles.headerContainer}>
        <text className={styles.titleText}>THE E-COPS CURRICULUM</text>
      </div>
      {/* content - 학기 중 세션 */}
      <div className={styles.contentContainer}>
        {/* 소제목 */}
        <div style={{width: 1000,}}>
          <text className={styles.titleText} style={{fontSize: 32, padding: 0, margin: 0}}>학기 중 Session</text>
        </div>
        <div className={styles.rowContainer}>
          {/* beginner box*/}
          <div className={styles.columnContainer}>
            <text className={styles.boxTitleText}>Beginner Track</text>
            <div className={styles.boxContainer}></div>
          </div>
          {/* challenger box*/}
          <div className={styles.columnContainer}>
            <text className={styles.boxTitleText}>Challenger Track</text>
            <div className={styles.boxContainer}></div>
          </div>
        </div>
      </div>
      {/* content - 방학 중 세션 */}
      <div className={styles.contentContainer}>
        {/* 소제목 */}
        <div style={{width: 1000,}}>
          <text className={styles.titleText} style={{fontSize: 32, padding: 0, margin: 0}}>방학 중 Session</text>
        </div>
        <div className={styles.rowContainer}>
          {/* box */}
          <div className={styles.boxContainer} style={{width: '100%'}}></div>
        </div>
      </div>
      {/* content - 외부 활동 */}
      <div className={styles.contentContainer}>
        {/* 소제목 */}
        <div style={{width: 1000,}}>
          <text className={styles.titleText} style={{fontSize: 32, padding: 0, margin: 0}}>외부 활동</text>
        </div>
        <div className={styles.rowContainer}>
          {/* 활동 1 */}
          <div className={styles.columnContainer} style={{width: 300,}}>
            <div className={styles.ImgContainer}></div>
            <text className={styles.contentText}>활동 내용~~~</text>
          </div>
          {/* 활동 2 */}
          <div className={styles.columnContainer}  style={{width: 300,}}>
            <div className={styles.ImgContainer}></div>
            <text className={styles.contentText}>활동 내용~~~</text>
          </div>
          {/* 활동 3 */}
          <div className={styles.columnContainer}  style={{width: 300,}}>
            <div className={styles.ImgContainer}></div>
            <text className={styles.contentText}>활동 내용~~~</text>
          </div>
        </div>
      </div>
    </main>

    {/* bottom bars */}
    <footer>
      <NavBar/>
      <BottomBar/>
    </footer>
    
    </body>
  );
}

export default Program;