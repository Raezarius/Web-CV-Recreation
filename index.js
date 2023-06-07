const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const element = (
    <table>
    <tr>
      <th>Wan Adam<br> Raezlan</br></th>
      <td>Front-end Developer</td>
    </tr>
    <tr>
      <td>John</td>
    </tr>
  </table>
);

root.render(element);