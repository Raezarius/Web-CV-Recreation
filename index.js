const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const element = (
    <table>
        <thead>
            <tr>
            <th>Wan Adam<br> Raezlan</br></th>
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