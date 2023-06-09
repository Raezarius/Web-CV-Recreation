const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const element = (
    <table>
        <thead>
            <tr>
            <td className="leftSide">
                <h1>Wan Adam Raezlan</h1>
                <h2 id="c1">Front-end Developer</h2>
            </td>
            <td>
                <h1 className="line">________________________</h1>
                <h3 className="bsName">Wan Adam Raezlan bin Safian Aziz Kasim</h3>
                <p>170, Jalan Sri Hartamas 2, Sri Hartamas,</p>
                <p>50480, Kuala Lumpur</p>
                <p id="sp" className="c2">012-3923552</p>
                <p className="c2">raezlan@gmail.com</p>
            </td>
            </tr>

            <tr>
            <td className="leftSide">
                <p>ㅡ</p>
                <h3>Skills</h3>
            </td>
            <td>
                <h1 className="line">________________________</h1>
                <ul>
                    <li>Game Design</li>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>C# for Unity</li>
                    <li>UE5</li>
                    <li>Sound Design</li>
                </ul>
            </td>
            </tr>

            <tr>
            <td className="leftSide">
                <p>ㅡ</p>
                <h3>Experience</h3>
            </td>
            <td>
                <h1 className="line">________________________</h1>
                <h4>REKA / <span>Game Developer</span></h4>
                <h5>AUGUST 2022 - JANUARY 2023, Kuala Lumpur</h5>
                <p>Contracted as a programmer to continue development of the game made during prior internship.</p>

                <h4>REKA / <span>Intern</span></h4>
                <h5>FEBRUARY 2022 - JULY 2022, Kuala Lumpur</h5>
                <p>Worked as a programming intern to develop a game on Unity, then moved to UE5 in a group of three. Helped with ideation in other projects.</p>

                <h4>SO REAL / <span>Intern</span></h4>
                <h5>APRIL 2018 - JUNE 2018, Puchong</h5>
                <p>Worked as an intern in game designing on Unity and assisting in dialogue recording and programming.</p>
            </td>
            </tr>

            <tr>
            <td className="leftSide">
                <p>ㅡ</p>
                <h3>Education</h3>
            </td>
            <td>
                <h1 className="line">________________________</h1>
                <h4>Multimedia University / <span>Bachelor of Multimedia (Honours) (Virtual Reality)</span></h4>
                <h5>JUNE 2015 - MAY 2019, Cyberjaya</h5>
                <p>Studied User Experience and Interaction within a virtual 3D space, specialised mostly in audio with some knowledge in 3D Modeling and Programming.</p>
            </td>
            </tr>

            <tr>
            <td className="leftSide">
                <p>ㅡ</p>
                <h3>Projects</h3>
            </td>
            <td>
                <h1 className="line">________________________</h1>
                <h4 className="bs">Booth Ad / <span>A short interactable advertisement(Ongoing project)</span></h4>
                <p>A collaboration project with an artist to promote their booth during art conventions. Made mostly with Javascript and HTML, with the assistance of the A-Frame web framework.</p>

                <h4 className="bs">Recallum / <span>A word memory game</span></h4>
                <p>Recallum was created as a means to promote Reka’s booth during Universiti Malaya’s Makerthon event. Made with Javascript and HTML.</p>
            </td>
            </tr>
        </thead>
        <tbody>
        
        </tbody>
  </table>
);

root.render(element);