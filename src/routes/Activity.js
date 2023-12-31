import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import styles from './Activity.module.css';
import Button1 from '../components/Activity_Button1';
import Button2 from '../components/Activity_Button2';
import Button3 from '../components/Activity_Button3';
import Button4 from '../components/Activity_Button4';
import Button5 from '../components/Activity_Button5';
import Button6 from '../components/Activity_Button6';
import ProfileBox from '../components/ProfileBox';


function Activity(){
  return (
    <body>
    <header>
        <NavBar/>
    </header>
    <main className={styles.mainContainer}>
      <div className={styles.columnContainer}>
         <text className={styles.titleText}>
            Sessions
          </text>
          <text className={styles.contentText}>
            E-COPS의 정규 세션은 Beginner Track과 Challenger Track으로 나뉘어서 이루어집니다.<br></br>자유롭게 선택해 보세요.
          </text>  
        <div className={styles.rowContainer1}>
          <div className={styles.mintWhiteContainer}>
            <div className={styles.whiteBox}></div>
            <div className={styles.mintBox1}>
              <text className={styles.boxText}>
                Beginner Track
              </text>
              <button className={styles.clickButton}>
                <Button1/>
              </button>
             </div>
            </div>          
          <div className={styles.mintBox1c}>
            <text className={styles.boxText}>
              Challenger Track
            </text>
            <button className={styles.clickButton}>
              <Button2/>
            </button>
          </div>
        </div>
        <text className={styles.titleText}>
            Teams
        </text>
        <text className={styles.contentText}>
        방학 세션은 Team을 이루어 진행됩니다. <br></br>심화학습을 원하는 Team에 들어가 자신의 능력을 뽐내보세요!
        </text>
        <div className={styles.rowContainer2}>
          <div className={styles.mintBox2}>
            <text className={styles.boxText}>
              Web Hacking
            </text>
            <text className={styles.boxContentText}>
            무슨 모의 해킹<br></br>웹 환경 구현하여 모의 해킹하기
            </text>
            <button className={styles.clickButton2}>
              <Button3/>
            </button>
          </div>
          <div className={styles.mintBox2}>
            <text className={styles.boxText}>
              Reversing
            </text>
            <text className={styles.boxContentText}>
            무슨 모의 해킹<br></br>웹 환경 구현하여 모의 해킹하기
            </text>
            <button className={styles.clickButton2}>
              <Button4/>
            </button>
          </div>
          <div className={styles.mintBox2}>
            <text className={styles.boxText}>
              Forensics
            </text>
            <text className={styles.boxContentText}>
            무슨 모의 해킹<br></br>웹 환경 구현하여 모의 해킹하기
            </text>
            <button className={styles.clickButton2}>
              <Button5/>
            </button>
          </div>
          <div className={styles.mintBox2}>
            <text className={styles.boxText}>
              Development
            </text>
            <text className={styles.boxContentText}>
            무슨 모의 해킹<br></br>웹 환경 구현하여 모의 해킹하기
            </text>
            <button className={styles.clickButton2}>
              <Button6/>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.beginContainer}>
        <div className = {styles.beginBox}>
          <div className ={styles.firstContainer}>
            <div className ={styles.firstText}><br></br>E-COP'S------<br></br>Begginer Track</div>
          </div>
        </div>
      </div>
      <div className={styles.begin2Container}>
        <div className = {styles.begin2Box}>
          <div className = {styles.secondContainer}>
            <div className = {styles.secondText}>2022 Garallery</div>
          </div>
          <div className ={styles.rowContainer}>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          </div>
          <div className ={styles.rowContainer}>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          </div>
          <div className ={styles.rowContainer}>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          </div>
        </div>
      </div>
      <div className ={styles.begin3Container}>
        <div className ={styles.begin3Box}>
          <div className ={styles.firstContainer}>
           <div className ={styles.thirdText}>Spread your wide wrings at E-COPS</div>
           <div className ={styles.third2Text}>@E_COPS</div>
          </div>
        </div>
      </div>
      <div className={styles.beginContainer}>
        <div className = {styles.beginBox}>
          <div className ={styles.firstContainer}>
            <div className ={styles.firstText}><br></br>E-COP'S------<br></br>Challenger Track</div>
          </div>
        </div>
      </div>
      <div className={styles.begin2Container}>
        <div className = {styles.begin2Box}>
          <div className = {styles.secondContainer}>
            <div className = {styles.secondText}>2022 Garallery</div>
          </div>
          <div className ={styles.rowContainer}>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          </div>
          <div className ={styles.rowContainer}>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          </div>
          <div className ={styles.rowContainer}>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
            <ProfileBox img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEd_TAd9zUnbOApOSfOajPL7CUmNQa8V3KQ&usqp=CAU'/>
          </div>
        </div>
      </div>
      <div className ={styles.begin3Container}>
        <div className ={styles.begin3Box}>
          <div className ={styles.firstContainer}>
           <div className ={styles.thirdText}>Spread your wide wrings at E-COPS</div>
           <div className ={styles.third2Text}>@E_COPS</div>
          </div>
        </div>
      </div>
      <div className={styles.beginContainer}>
        <div className = {styles.beginBox}>
          <div className ={styles.firstContainer}>
            <div className ={styles.ac1Text}><br></br>Web Hacking<br></br>Team!</div>
             <div className ={styles.ac2Text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are</div>
          </div>
        </div>
      </div>
      <div className={styles.begin2Container}>
        <div className = {styles.begin2Box}>
          <div className = {styles.secondContainer}>
          </div>
          <div className ={styles.rowContainer}></div>
          <div className ={styles.rowContainer}></div>
          <div className ={styles.rowContainer}></div>
        </div>
      </div>
      <div className ={styles.begin3Container}>
        <div className ={styles.begin3Box}>
          <div className ={styles.firstContainer}>
           <div className ={styles.thirdText}>Spread your wide wrings at E-COPS</div>
           <div className ={styles.third2Text}>@E_COPS</div>
          </div>
        </div>
      </div>
      <div className={styles.beginContainer}>
        <div className = {styles.beginBox}>
          <div className ={styles.firstContainer}>
            <div className ={styles.ac1Text}><br></br>Reversing ---<br></br>Team!</div>
             <div className ={styles.ac2Text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are</div>
          </div>
        </div>
      </div>
      <div className={styles.begin2Container}>
        <div className = {styles.begin2Box}>
          <div className = {styles.secondContainer}>
          </div>
          <div className ={styles.rowContainer}></div>
          <div className ={styles.rowContainer}></div>
          <div className ={styles.rowContainer}></div>
        </div>
      </div>
      <div className ={styles.begin3Container}>
        <div className ={styles.begin3Box}>
          <div className ={styles.firstContainer}>
           <div className ={styles.thirdText}>Spread your wide wrings at E-COPS</div>
           <div className ={styles.third2Text}>@E_COPS</div>
          </div>
        </div>
      </div>
      <div className={styles.beginContainer}>
        <div className = {styles.beginBox}>
          <div className ={styles.firstContainer}>
            <div className ={styles.ac1Text}><br></br>Forensic ----<br></br>Team!</div>
             <div className ={styles.ac2Text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are</div>
          </div>
        </div>
      </div>
      <div className={styles.begin2Container}>
        <div className = {styles.begin2Box}>
          <div className = {styles.secondContainer}>
          </div>
          <div className ={styles.rowContainer}></div>
          <div className ={styles.rowContainer}></div>
          <div className ={styles.rowContainer}></div>
        </div>
      </div>
      <div className ={styles.begin3Container}>
        <div className ={styles.begin3Box}>
          <div className ={styles.firstContainer}>
           <div className ={styles.thirdText}>Spread your wide wrings at E-COPS</div>
           <div className ={styles.third2Text}>@E_COPS</div>
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

export default Activity;