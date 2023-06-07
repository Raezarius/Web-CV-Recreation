const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function MyButton() {
    return (
      <button>
        I'm a button
      </button>
    );
  }

root.render(<MyButton />);