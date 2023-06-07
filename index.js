const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const element = (
    <table>
        <thead>
            <tr>
            <td>Wan Adam</td>
            <td>Wan Adam Raezlan bin Safian Aziz Kasim</td>
            </tr>

            <tr>
            <td>Raezlan</td>
            <td>"170, Jalan Sri Hartamas 2, Sri Hartamas,"<br> "50480, Kuala Lumpur"</td>
            </tr>

            <tr>
            <td>Front-end Developer</td>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>John</td>
            </tr>
        </tbody>
  </table>
);

root.render(element);