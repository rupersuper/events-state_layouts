export default function IconSwitch({ view, setView }) {
  return (
    <div className="switch_btn">
      <span className="material-icons" onClick={() => setView(view)}>
        {view}
      </span>
    </div>
  );
}
