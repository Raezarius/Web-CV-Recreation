const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const element = (
    <table>
        <thead>
            <tr>
            <td>
                <p>Wan Adam Raezlan</p>
                <p>Front-end Developer</p>
            </td>
            <td>
                <p>Wan Adam Raezlan bin Safian Aziz Kasim</p>
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
                <p>Skills</p>
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
        </thead>
        <tbody>
        
        </tbody>
  </table>
);

root.render(element);