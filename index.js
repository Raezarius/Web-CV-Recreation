const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const element = (
    <table>
        <thead>
            <tr>
            <td className="leftSide">
                <h1>Wan Adam Raezlan</h1>
                <h2>Front-end Developer</h2>
            </td>
            <td>
                <h3>Wan Adam Raezlan bin Safian Aziz Kasim</h3>
                <p>170, Jalan Sri Hartamas 2, Sri Hartamas,</p>
                <p>50480, Kuala Lumpur</p>
                <p></p>
                <p>012-3923552</p>
                <p>raezlan@gmail.com</p>
            </td>
            </tr>

            <tr>
            <td>
                <p>ㅡ</p>
                <h3>Skills</h3>
            </td>
            <td>
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
            <td>
                <p>ㅡ</p>
                <h3>Experience</h3>
            </td>
            <td>
                <h2>REKA / Game Developer</h2>
                <h3>AUGUST 2022 - JANUARY 2023, Kuala Lumpur</h3>
                <p>Contracted as a programmer to continue development of the game made during prior internship.</p>

                <h2>REKA / Intern</h2>
                <h3>FEBRUARY 2022 - JULY 2022, Kuala Lumpur</h3>
                <p>Worked as a programming intern to develop a game on Unity, then moved to UE5 in a group of three. Helped with ideation in other projects.</p>

                <h2>SO REAL / Intern</h2>
                <h3>APRIL 2018 - JUNE 2018, Puchong</h3>
                <p>Worked as an intern in game designing on Unity and assisting in dialogue recording and programming.</p>
            </td>
            </tr>

            <tr>
            <td>
                <p>ㅡ</p>
                <h3>Education</h3>
            </td>
            <td>
                <h2>Multimedia University / Bachelor of Multimedia (Honours) (Virtual Reality)</h2>
                <h3>JUNE 2015 - MAY 2019, Cyberjaya</h3>
                <p>Studied User Experience and Interaction within a virtual 3D space, specialised mostly in audio with some knowledge in 3D Modeling and Programming.</p>
            </td>
            </tr>

            <tr>
            <td>
                <p>ㅡ</p>
                <h3>Projects</h3>
            </td>
            <td>
                <h2>Booth Ad / A short interactable advertisement(Ongoing project)</h2>
                <p>A collaboration project with an artist to promote their booth during art conventions. Made mostly with Javascript and HTML, with the assistance of the A-Frame web framework.</p>

                <h2>Recallum / A word memory game</h2>
                <p>Recallum was created as a means to promote Reka’s booth during Universiti Malaya’s Makerthon event. Made with Javascript and HTML.</p>
            </td>
            </tr>
        </thead>
        <tbody>
        
        </tbody>
  </table>
);

root.render(element);